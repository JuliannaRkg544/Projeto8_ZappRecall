import React from "react"
import Footer from "./Footer"
import styled from "styled-components"
import Header from "./Header"
import { useState } from "react"
import Flashcard from "./Flashcard"

const flashcards = [
    { key: 1, question: "O que é um Sistema Distribuído?", answer: "Conjuntos de computadores/processos independentes que juntos formam um sistema único e coerente que se comunicam" },
    { key: 2, question: "Dê exemplo de um Sistema Distribuído e justifique", answer: "Qualquer aplicação mobile pode servir de exemplo, como youtube e facebook, pq elas podem ser executadas em diferentes dispositvos e permitir a comunicação entre estes " },
    { key: 3, question: "Cite alguns desafios comuns a implementação de SD's", answer: "Segurança, Escalabilidade, Desempenho, Tolerância a falhas e Comunicação entre os componentes, " },
    { key: 4, question: "A internet poide ser considerada um SD? Pq? ", answer: "Sim, a internet é o maior exemplo de sistema distribuído; ela provê serviços que estão localizados em máquinas dispersas que são interligadas por algum tipo de rede, redes essas que utilizam de um meio de comunicação comum, os protocolos." },
    // { key: 5, question: "O ReactDOM nos ajuda __", answer: "interagindo com a DOM para colocar componentes React na mesma" },
    // { key: 6, question: "Usamos o npm para __", answer: "gerenciar os pacotes necessários e suas dependências" },
    // { key: 7, question: "Usamos props para __", answer: "passar diferentes informações para componentes" },
    // { key: 8, question: "Usamos estado (state) para __", answer: "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente" }
]


export default function DeckPage() {
    
    let [flashcardsSorteds, setFlashcardsSorteds] = useState([])
    let [answer, setAnswer] = useState([]) //array para o footer

    function comparador() {
        return Math.random() - 0.5;
    }

    if (flashcardsSorteds.length===0){
        flashcards.sort(comparador)
       setFlashcardsSorteds(flashcards)
        return<></>
    } else {
        return (
            <>
                <Container>
                    <Header />
                    <>{flashcardsSorteds.map((card, index) => <Flashcard key={index} index={index} card={card} answer={answer} setAnswer={setAnswer} />)}</>
                </Container>
                <Footer answer={answer} setAnswer={setAnswer} />
            </>
    
    
        )

    }

}

const Container = styled.div` 

display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
width:100%;
heigth: 100%;
margin-bottom: 100px;
`



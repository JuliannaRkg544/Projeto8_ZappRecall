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
    { key: 5, question:"Qual a função de um middleware em SD's?", answer:"Num SD os middleawares são responsáveis por permitir que aplicações diferentes funcionem em máquinas difrentes. É uma camada de software que vai atuar entre a camada de aplicação e o SO "},
    { key: 6, question: "Explique o que é arquitetura descentralizada, cite um exemplo desta arquitetura e reflita sobre uma vantagem e uma desvantagem desses sistema", answer: "É um tipo de arquitetura de sistemas onde não há uma definição estática (central) de cliente e servidor. Como exemplo temos o P2P, um modelo de arquitetura onde cada um dos pontos ou nós da rede funciona tanto como cliente quanto como servidor" },
    { key: 7, question: "Como podemos dividir uma arquitetura centralizada a nível de camadas?", answer: "É necessário minimamente um nível de interface com usuário, processamento e dados" },
    { key: 8, question: "Qual a relação entre arquitetura centralizada e multidividida?", answer: "arquitetura multidividida é um tipo de arquitetura centralizada que se subdivide quanto ao nível de implementação feito pelo cliente ou servidor.Ela pode ser do tipo Fat quando o cliente é responsável por realizar mais processos ou do tipo Thin quando o servidor possui maior peso na aplicação " }
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



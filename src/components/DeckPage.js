import React from "react"
import Footer from "./Footer"
import styled from "styled-components"
import Header from "./Header"
import { useState } from "react"
import Flashcard from "./Flashcard"

const flashcards = [
    { key: 1, question: "O que é JSX?", answer: "Uma extensão de linguagem do JavaScript" },
    { key: 2, question: "O React é __", answer: "uma biblioteca JavaScript para construção de interfaces" },
    { key: 3, question: "Componentes devem iniciar com __", answer: "letra maiúscula" },
    { key: 4, question: "Podemos colocar __ dentro do JSX ", answer: "expressões" },
    { key: 5, question: "O ReactDOM nos ajuda __", answer: "interagindo com a DOM para colocar componentes React na mesma" },
    { key: 6, question: "Usamos o npm para __", answer: "gerenciar os pacotes necessários e suas dependências" },
    { key: 7, question: "Usamos props para __", answer: "passar diferentes informações para componentes" },
    { key: 8, question: "Usamos estado (state) para __", answer: "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente" }
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



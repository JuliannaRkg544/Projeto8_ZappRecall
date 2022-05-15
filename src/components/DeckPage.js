import react from "react"
import Footer from "./Footer"
import styled from "styled-components"
import Header from "./Header"
import CardsQuestion from "./CardsQuestion"
import { useState } from "react"
import Flashcard from "./Flashcard"

const flashcards = [
    { key: 1, name: "Pergunta", question: "O que é JSX?", answer: "Uma extensão de linguagem do JavaScript" },
    { key: 2, name: "Pergunta", question: "O React é __", answer: "uma biblioteca JavaScript para construção de interfaces" },
    { key: 3, name: "Pergunta", question: "Componentes devem iniciar com __", answer: "letra maiúscula" },
    { key: 4, name: "Pergunta", question: "Podemos colocar __ dentro do JSX ", answer: "expressões" },
    { key: 5, name: "Pergunta", question: "O ReactDOM nos ajuda __", answer: "interagindo com a DOM para colocar componentes React na mesma" },
    { key: 6, name: "Pergunta", question: "Usamos o npm para __", answer: "gerenciar os pacotes necessários e suas dependências" },
    { key: 7, name: "Pergunta", question: "Usamos props para __", answer: "passar diferentes informações para componentes" },
    { key: 8, name: "Pergunta", question: "Usamos estado (state) para __", answer: "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente" }
]

export default function DeckPage() {
    let [answer, setAnswer] = useState([])

    function comparador() {
        return Math.random() - 0.5;
    }
    flashcards.sort(comparador);

    return (

        <>
            <Container>
                <Header />
                <>{flashcards.map((card, index) => <Flashcard key={index + 1} card={card} answer={answer} setAnswer={setAnswer} />)}</>
            </Container>
            <Footer answer={answer} setAnswer={setAnswer} />
        </>


    )
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



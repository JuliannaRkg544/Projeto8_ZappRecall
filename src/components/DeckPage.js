import react from "react"
import Footer from "./Footer"
import styled from "styled-components"
import Header from "./Header"
import CardsQuestion from "./CardsQuestion"
import { useState } from "react"

const flashcards = [{ name: "Pergunta", question: "O que é JSX?", answer: "Uma extensão de linguagem do JavaScript" },
{ name: "Pergunta", question: "O React é __", answer: "uma biblioteca JavaScript para construção de interfaces" },
{ name: "Pergunta", question: "Componentes devem iniciar com __", answer: "letra maiúscula" },
{ name: "Pergunta", question: "Podemos colocar __ dentro do JSX ", answer: "expressões" },
{ name: "Pergunta", question: "O ReactDOM nos ajuda __", answer: "interagindo com a DOM para colocar componentes React na mesma" },
{ name: "Pergunta", question: "Usamos o npm para __", answer: "gerenciar os pacotes necessários e suas dependências" },
{ name: "Pergunta", question: "Usamos props para __", answer: "passar diferentes informações para componentes" },
{ name: "Pergunta", question: "Usamos estado (state) para __", answer: "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente" }
]

export default function DeckPage() {
    let [card,setCard] = useState(true);
    return (
        card ?
        <>
            <Container>
            <Header/>
                {flashcards.map((card, index) => {

                    return <Cards>
                        <p key={index} >{card.name + ` ${index + 1}`}</p>
                        <img src="./imgs/Vector.png" onClick={(()=>{setCard(false)})} />
                      </Cards>

                })}

            </Container>
            <Footer />
        </>
            : <CardsQuestion/>
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

const Cards = styled.div`
display: flex;
flex-direction: center;
justify-content: space-between;
align-items: center;
width: 300px;
heigth: 80px;
margin-top: 15px;
background-color: #fff;
padding: 15px;
border-radius: 3px;

p{
    font-family:  'Recursive', sans-serif;
    font-color: #333333;
    font-weigth: 700;
    font-size: 16px ;
}
`


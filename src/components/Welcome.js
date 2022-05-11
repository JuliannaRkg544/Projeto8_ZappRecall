import { useState } from "react"
import DeckPage from "./DeckPage"
import styled from "styled-components";


export default function Welcome() {
    let [visibility, setVisibility] = useState(true)
    return (
        visibility ?
            <Container>
                <img src="./imgs/image 1.png" />
                <h1>ZapRecall</h1>
                <button onClick={() => setVisibility(false)} >Iniciar Recall!</button>
            </Container>
            :
            <DeckPage />
    )
}

const Container = styled.div`
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
 margin-top: 150px;
 width:100%;
 heigth: 100%;

 h1{
     font-size: 36px;
     font-family: 'Righteous', cursive;
     color: #fff;
     line-height: 44.7px;
     margin-top: 13px;
 }

 button{
     color: #D70900;
     background-color: #fff;
     border-radius: 3px;
     border: none;
     width: 264px;
     height: 54px;
     margin-top: 30px;
     font-size: 18px;
     line-heigth: 21.6px;
     font-family:'Recursive', sans-serif;

 }

`
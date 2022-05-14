import { useState } from "react"
import DeckPage from "./DeckPage"
import styled from "styled-components";
import logoBig from "../assets/images/image 1.png"


export default function Welcome() {
    let [visibility, setVisibility] = useState(true)
    return (
        visibility ?
            <Container>
                <img src={logoBig} />
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
     border-radius: 5px;
     width: 264px;
     height: 54px;
     margin-top: 30px;
     font-size: 18px;
     line-heigth: 21.6px;
     font-family:'Recursive', sans-serif;
     cursor:pointer;
     border: solid 1px #D70900;

 }

`
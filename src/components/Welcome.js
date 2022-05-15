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
     border: solid 1px #D70900;
     margin-top: 15px;
    width: 300px;
    heigth: 131px;
    padding: 15px;
    border-radius: 5px;
    cursor: pointer;
    background-color: #FFF;
    font-family:  'Recursive', sans-serif;
    color: #D70900;
    font-weigth: 700;
    font-size: 16px ;
    box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.15);
   }

`
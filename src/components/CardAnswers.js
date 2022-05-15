import { useState } from "react"
import styled from "styled-components"
import FlashcardRisk from "./FlashcardRisk"
import Card from "./CardBeige"


export default function CardAnswers({ card, answer, setAnswer,index }) {
    const [selected, setSelected] = useState(true)
    let status = ""
    const [color, setColor] = useState('')


    function flashcard(color) {
        setColor(color)
        setAnswer([...answer, color])
        setSelected(false)
    }

    return (
        selected ?
            <>
                <Cards> <p >{card.answer}</p>
                    <div className="answer" >
                        <button className="red" onClick={() => flashcard('red')}>Não lembrei</button>
                        <button className="yellow" onClick={() => flashcard('yellow')} >Quase nãp lembrei</button>
                        <button className="green" onClick={() => flashcard('green')} >Zap</button>
                    </div>
                </Cards>
            </>
            : <FlashcardRisk card={card} status={status} color={color} index={index} />
    )
}


const Cards = styled.div`
display: flex;
justify-content: center;
align-items: start;
width: 300px;
heigth: 131px;
margin-top: 15px;
background-color: #FFFFD4;
padding: 15px;
border-radius: 3px;
flex-direction: column;
padding: 8px;

p{
    font-family:  'Recursive', sans-serif;
    font-color: #333333;
    font-weigth: 700;
    font-size: 16px ;
}

.answer{
    display: flex;
   margin-top: 20px
}
.answer button {
    margin:5px;
    border:none;
    border-radius: 3px;
    width: 85.17px;
    heigth: 37.17px;
    font-size:12px;
    font-family:  'Recursive', sans-serif;
    cursor:pointer;
    color: #FFF;
}
.red{
    background-color: #FF3030;
}
.yellow{
   background-color: #FF922E;
}
.green{
    background-color: #2FBE34;
}`

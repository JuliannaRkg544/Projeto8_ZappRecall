import styled from "styled-components"
import happyEmoji from "../assets/images/party2.png"
import sadEmoji from "../assets/images/sad 7.png"

export default function Footer({ answer }) {

    let tam = answer.length
    function endCard() {
        if (tam === 8) {
            if (answer.includes('red')) {
                return (
                    <div className="box">
                        <p><img src={sadEmoji} /> <span> Putz...</span></p>
                        <p>Ainda faltam alguns...Mas não desanime!</p>
                    </div>
                )
            } else {
                return (
                    <div className="box">
                        <p> <img src={happyEmoji} /> <span> Parabéns!!!</span> </p>
                        <p> Você não esqueceu de nenhum flashcard!</p>
                    </div>
                )
            }
        }
    }

    return (

        <Div>
            {endCard()}
            <p>{tam}/8 CONCLUÍDOS</p>
            <div className="icons" >  {answer.map((c, index) => { return <img key={index} src={`./imgs/Vector-${c}.png`} /> })}</div>
        </Div>
    )
}

const Div = styled.div`
background-color: #fff;
width: 100%;
min-height: 80px;
height: auto;
display: flex;
justify-content: center;
align-items: center;
position: fixed;
left:0;
rigth:0;
bottom:0;
flex-direction: column;
.box{
    display:flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100vw;
    padding: 20px;
}

span{
    font-weight: 700;
 
}
.box img{
    margin-bottom:-5px;
}
p{
    font-size: 18px;
    color: #333333;
    font-family: 'Recursive', sans-serif ;
}

img{
    margin: 8px 2px ;
}


`
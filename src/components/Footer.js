import styled from "styled-components"

export default function Footer({answer}) {
    
    console.log(answer)
    let tam = answer.length

    if (tam === 8){
        if (answer.includes('red')){
          return (
            <Div>
            <div>Putz... </div>
            <p>{tam}/8 CONCLUÍDOS</p> 
            <div className="icons" >  {answer.map((c,index)=>{return <img key={index} src={`./imgs/Vector-${c}.png`} />})}</div> 
        </Div>
          )
        } else {
            return (
                <Div>
                <div>Parabéns!!! </div>
                <p>{tam}/8 CONCLUÍDOS</p> 
                <div className="icons" >  {answer.map((c,index)=>{return <img key={index} src={`./imgs/Vector-${c}.png`} />})}</div> 
            </Div>
              )
        }

    }

    return (
        <Div>
            <p>{tam}/8 CONCLUÍDOS</p> 
            <div className="icons" >  {answer.map((c,index)=>{return <img key={index} src={`./imgs/Vector-${c}.png`} />})}</div> 
        </Div>
    )
}
const Div = styled.div`
background-color: #fff;
width: 100%;
height: 70px;
display: flex;
justify-content: center;
align-items: center;
position: fixed;
left:0;
rigth:0;
bottom:0;
flex-direction: column;

p{
    font-size: 18px;
    color: #333333;
    font-family: 'Recursive', sans-serif ;
}

img{
    margin-top:5px;
}


`
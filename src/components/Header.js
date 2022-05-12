import styled from "styled-components"

export default function Header(){

    return(
        <Container>
         <img src="./imgs/image 2.png" /> 
         <p>ZapRecall</p>
        </Container>
    )
}

const Container =  styled.div`
display: flex;
justify-content: center;
align-items: center;
margin-top: 42px;
margin-bottom: 40px;

p{
    font-family: 'Righteous', cursive;; 
    font-size: 33px ;
    color: #fff;
    margin-left: 15px;

}

`
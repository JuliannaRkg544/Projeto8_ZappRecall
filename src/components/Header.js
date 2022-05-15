import styled from "styled-components"
import logoSmall from "../assets/images/image 2.png"

export default function Header() {


    return (
        <Container>
            <img src={logoSmall} />
            <p>ZapRecall</p>
        </Container>
    )
}

const Container = styled.div`
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
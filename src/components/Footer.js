import styled from "styled-components"

export default function Footer() {
    return (
        <Div>
            <p>0/4 CONCLUÍDOS</p>
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

p{
    font-size: 18px;
    color: #333333;
    font-family: 'Recursive', sans-serif ;
}

`
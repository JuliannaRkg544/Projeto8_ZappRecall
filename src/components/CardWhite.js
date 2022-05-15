import styled from "styled-components"

export default function CardWhite({children}){
    return <Style> {children}</Style>
}

const Style = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 300px;
heigth: 131px;
margin-top: 15px;
background-color: #FFF ;
padding: 15px;
border-radius: 5px;
cursor: pointer;
box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.15);

p{
    font-family:  'Recursive', sans-serif;
    font-color: #333333;
    font-weigth: 700;
    font-size: 16px ;
}

.risk{
    text-decoration: line-through;
}
.red{
    color: #FF3030;
}
.yellow{
   color: #FF922E;
}
.green{
    color: #2FBE34;
}

`
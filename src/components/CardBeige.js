import React from "react";
import styled from "styled-components"

export default function Card({children}){
    return(
        <Style>{children}</Style>
    )
}



const Style = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 300px;
heigth: 131px;
margin-top: 15px;
background-color: #FFFFD4 ;
padding: 15px;
border-radius: 3px;
cursor: pointer;
box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.15);

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
    border-radius: 5px;
    width: 85.17px;
    heigth: 37.17px;
    font-size: 12px;
    font-family:  'Recursive', sans-serif;
    cursor:pointer;
    color: #FFF;
}


`
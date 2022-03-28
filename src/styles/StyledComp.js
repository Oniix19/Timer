import styled from "styled-components";

export const StyledComp = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Red+Hat+Text:wght@700&display=swap');

        background-color: hsl(235, 16%, 14%);
        font-family: red hat text;
        height: 660px;
        letter-spacing: 5.5px;
        color: white;

    @media(max-width: 400px ){
        
        .main{
            max-width: 350px ;
            margin: 500px;
        }
    }

    .main{
        background-image: url("https://res.cloudinary.com/dsu0m4sa2/image/upload/v1648268858/Timer/bg-stars_gschpf.svg");
        background-color: aquamarine;
        background-size: cover;
        padding: 5% 25%;
        margin: 0%;
    }
    .title{
        background-color: aqua;
        
        color: hsl(0, 0%, 100%);
        text-align: center;
        margin-bottom: 10%;
    }
    .contTimer{
        background-color: aqua;
        
        display: flex;
        justify-content: space-between;
    }
    h1{
        background-color: hsl(236, 21%, 26%);
        border-radius: 5px;
        width: 5rem;
        height: 5rem;
        color: hsl(345, 95%, 68%);
        font-size: 55px;
        text-align: center;
        padding: 10px;
        margin: 30% 0;
    }
    h6{
        background-color: blue;

        color: hsl(237, 18%, 59%);
        margin: 10% 0;
        text-align: center;
    }
    footer{
        background-image: url("https://res.cloudinary.com/dsu0m4sa2/image/upload/v1648268864/Timer/pattern-hills_iielg1.svg");
        margin: 7px 0 0 0; 
        height: 200px;
    }
    .divF{
        padding-top: 125px;
        text-align: center;
    }
    button{
        margin: 0 15px;

        padding: 0;
        border: none;
        background-color: transparent;
    }
    button:hover{
        background-color: hsl(345, 95%, 68%);
    }
    .imgF{
        color: hsl(345, 95%, 68%);
    }
    .imgF:hover{
        color: hsl(345, 95%, 68%);
    }
    .modal{
        height: 50px;
        width: 60px;
        background-color: aqua;
    }



`

// Grayish blue: hsl(237, 18%, 59%); ---
// - Soft red: hsl(345, 95%, 68%); ---

// ### Neutral

// - White: hsl(0, 0%, 100%); ---
// - Dark desaturated blue: hsl(236, 21%, 26%);---
// - Very dark blue: hsl(235, 16%, 14%);
// - Very dark (mostly black) blue: hsl(234, 17%, 12%);
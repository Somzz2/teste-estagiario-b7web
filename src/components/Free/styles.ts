import styled from "styled-components";
import bg from '../../assets/bg.png'

export const Main = styled.div`
    background-color: #2941ab;
    background-image: url(${bg});
    background-size: cover;
    
`

export const Container = styled.div`
    max-width: 1200px;
    margin: auto;
    color: #1ed261;
    min-height: 500px;



`

export const Description = styled.div`
    display: flex;
    flex-direction: column;
    
    padding: 50px 20px;
    width: 50%;
    

    span {
        font-size: 12px;

        &:nth-child(1) {
            font-size: 13px;
        }
    }

    p {
        font-size: 20px;
    }

    button {
        font-size: 10px;
        width: 200px;
        color: #2941ab;
        padding: 8px;
        border-radius: 20px;
        border: none;
        background-color: #1ed760;
        margin: 20px 0;
        margin-bottom: 30px;
        cursor: pointer;

        &:hover {
            background-color: #fff;
            color: #000;
            transition: all ease 1s;
        }
    }

    @media (max-width: 800px) {
        margin: auto;
        align-items: center;
        text-align: center;

    }
`
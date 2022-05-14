import styled from "styled-components";

export const Main = styled.div`
    background-color: #993399;
    
`

export const Container = styled.div`
    margin: auto;
    max-width: 1200px;
    display: flex;
    justify-content: space-between;
    min-height: 500px;

    img {
        width: 25%;
        height: 25%;
        margin: auto;
    }

    @media (max-width: 800px) {
        min-height: 750px;
        flex-direction: column;
        align-items: center;

        img {
            width: 60%;
            margin-bottom: 50px;
        }
    }
    
`

export const Description = styled.div`
    display: flex;
    flex-direction: column;
    color: #fff;
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
        padding: 8px;
        border-radius: 20px;
        border: none;
        background-color: #000;
        color: #fff;
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
        
        align-items: center;
        text-align: center;
    
        
        h1 {
            font-size: 25px;
        }

        p {
            font-size: 18px;
        }

        span {
            font-size: 10px;
    
            &:nth-child(1) {
                font-size: 12px;
            }
        }
        
    }
`
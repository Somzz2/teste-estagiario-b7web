import styled from "styled-components";

export const Main = styled.div`
    background-color: #000;
`;

export const Container = styled.div`
    
    margin: auto;
    height: 80px;
    max-width: 1200px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    img {
        width: 120px;
        padding: 20px;
    }

    @media(max-width: 800px) {
        flex-direction: column;
        height: auto;

        ul {
            padding: 0;
            margin: 0;
        }
    }

    @media(max-width: 550px) {
        ul {
            flex-direction: column;

        }


    }
`

export const Navigation = styled.div`
padding: 20px;

    ul {
        display: flex;
        text-decoration: none;
        list-style: none;
        
        

        li {
            font-weight: bold;
            color: #fff;
            margin-left: 30px;
            height: 18px;
            display: flex;
            text-align: center;
            line-height: 18px;
            &:hover {
                cursor: pointer;
            }

            &:nth-child(4) {
                
                
                padding-left: 30px;
                border-left: 1px solid #373737;
            }

            @media(max-width: 550px) {
                border: none;
                padding: 10px;
                text-align: left;

                &:nth-child(4) {
                    padding: 10px;
                    border: none;
                    
                }
            }
        }




    
`

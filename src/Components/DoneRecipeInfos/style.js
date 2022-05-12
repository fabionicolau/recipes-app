import styled from 'styled-components';

const FavoriteCar = styled.div`
    display: flex;
    margin: auto;
    margin-top: 15px;
    box-shadow: 0 1px 10px 0 #c9c9c9;
    border-radius: 10px;
    overflow: hidden;
    width: 95vw;
    
    div {
        display: flex;
    }

    h2 {
        color: #000;
        font-size: 25px;
        margin: 0;
    }

    a {
        display: flex;
        text-decoration: none;
        section {
            display: flex;
            justify-content: space-evenly;
            flex-flow: column wrap;
            margin-left: 10px;
        }
    }
    
    .btn-share {
        display: flex;
        align-self: flex-end;   
        button {
            border: none;
            
            background: none;

            img {
                margin-top: 15px;
                width: 30px;
            }
        }
    }


    span { 
        font-size: 15px;
        opacity: 50%;
        color: #000;
    }

`;

export default FavoriteCar;

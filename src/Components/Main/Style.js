import styled from 'styled-components';
import CardBackground from '../../Assets/talhercard.png'

export const SectionFood = styled.section`

    background: #F2F4F1;

`

export const TextHead = styled.div`
    
    height: 40vh;

    display: flex;
    align-items: center;
    justify-content: center;

    h2{
        text-transform: uppercase;
        color: #373737;
        font-weight: 500;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        ::before {
            content: "";
            width: 40px;
            height: 3px;
            background: #373737;
            display: block;
            margin-bottom: 20px;
        }
    }
`
export const Wrapper = styled.div`
    
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 3rem;

    height: 80vh;

`

export const SectionAbout = styled.section`

    display: flex;
    flex-direction: row;
    align-items: center;
    flex-direction: row;
    justify-content: center;

    figure{
        width: 50vw;
        height: 80vh;
        background-image: url(${CardBackground});
        background-size: cover;
    }

    section{
        width: 50vw;
        height: 80vh;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    h2{
        text-transform: uppercase;
        color: #373737;
        font-weight: 500;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        ::after {
            content: "";
            width: 40px;
            height: 3.5px;
            background: #373737;
            display: block;
            margin-top: 15px;
        }
    }

    p{  
        margin-top: 3rem;
        color: #373737;
        width: 30vw;
        text-align: justify;
        font-size: 1rem;
    }
`

export const SectionSubscribe = styled.section`

    background: #DFE4DE;
    height: 60vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: #373737;

    h2{
        text-transform: uppercase;
        color: #373737;
        letter-spacing: 2px;
    }

    p{
        font-size: 1.2rem;
        margin-bottom: 2rem;
    }

    form{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 2rem;

        input{
            width: 30vw;
            height: 9vh;
            background: #EFF1EE;
            border: 0;
            outline: none;
            padding: 0 1rem 0 1rem;
            color: #373737;
            font-size: 1rem;
        }

        button{
            width: 10vw;
            height: 7vh;
            cursor: pointer;
            background: #DFE4DE;
            border: 4px solid #373737;
            text-transform: uppercase;
            letter-spacing: 2px;

            :hover{
                transition: .3s ease-in-out;
                background: #373737;
                color: #DFE4DE;
            }
        }
    }
`


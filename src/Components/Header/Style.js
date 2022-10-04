import styled from 'styled-components';
import Background from '../../Assets/imagebackground.png'

export const Container = styled.div`
    height: 100vh;
    background-image: url(${Background});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`

export const Header = styled.header`
    height: 15vh;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    color: #373737;
    padding: 0 2rem;
    

    nav{
        @media screen and (max-width: 999px) {
            display: none;
        }
    }

    span{
        font-size: 2rem;
        font-weight: 600;
    }

    ul{
        display: flex;
        flex-direction: row;
        justify-content: space-between; 
        list-style: none;
    }

    a{
        text-decoration: none;
        color: #373737;
        margin-right: 1rem;
        text-transform: uppercase;
        padding: .8rem 2rem;
        border: 3px solid #37373700;

        :hover{
            transtion: .2s ease-in-out;
            border: 3px solid #373737;
        }
    }

`

export const Logo = styled.div`

    height: 85vh;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 3rem;
    text-transform: uppercase;
    letter-spacing: 7px;
    color: ##373737;
    cursor: auto;

    @media screen and (max-width: 499px) {
        font-size: 2rem;
    }
`

export const Menu = styled.div`

    display: none;
    flex-direction: column;
    flex-wrap: no-wrap;
    gap: 5px;
    cursor: pointer;

    @media screen and (max-width: 999px) {
        display: flex;
    }


    div{
        background: #373737;
        width: 40px;
        height: 5px;
    }
    

`

export const MenuResponsive = styled.div`
    display: none;
`

import styled from 'styled-components';

export const Footer = styled.footer`

    background: #F2F4F1;
    height: 30vh;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    color: #373737;
    padding: 0 2rem;

    @media screen and (max-width: 699px) {
        flex-direction: column-reverse;
        justify-content: space-evenly;
        align-items: center;
        padding: 0;
    }

    ul{
        display: flex;
        flex-direction: row;
        justify-content: space-between; 
        align-items: center;
        list-style: none;

        @media screen and (max-width: 699px) {
            width: 300px;
            height: 10vh;
            flex-direction: column;
            justify-content: space-evenly;
            align-items: center;
        }

        a{
            text-decoration: none;
            color: #373737;
            margin-right: 2rem;
            text-transform: uppercase;

            @media screen and (max-width: 699px) {
                margin-right: 0;
            }
    }
`

export const SocialMedias = styled.div`

    a{
        margin-left: 1rem;

        img{
            width: 40px;
        }
    }

`
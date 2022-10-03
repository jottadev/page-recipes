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

    ul{
        display: flex;
        flex-direction: row;
        justify-content: space-between; 
        list-style: none;

        a{
            text-decoration: none;
            color: #373737;
            margin-right: 2rem;
            text-transform: uppercase;
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
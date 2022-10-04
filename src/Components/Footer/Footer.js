import React from 'react'
import instagram from '../../Assets/icon-instagram.svg'
import twitter from '../../Assets/icon-twitter.svg'
import facebook from '../../Assets/icon-facebook.svg'
import pinterest from '../../Assets/icon-pinterest.svg'
import * as S from './Style.js'

export default function Footer(){
  return(
    <S.Footer>

        <S.SocialMedias>
            <a href='https://www.instagram.com/' rel="noopener noreferrer" target='_blank'>
                <img src={instagram} alt=""/>
            </a>

            <a href='https://twitter.com/home'  target='_blank' rel="noopener noreferrer">
                <img src={twitter} alt=""/>
             </a>

            <a href='https://pt-br.facebook.com/' rel="noopener noreferrer" target='_blank'>
                <img src={facebook} alt=""/>
            </a>

            <a href='https://br.pinterest.com/' rel="noopener noreferrer" target='_blank'>
                <img src={pinterest} alt=""/>
            </a>
        </S.SocialMedias>

        <div>
            <nav>
                <ul>
                    <li>
                        <a href='#about'> About </a>
                    </li>

                    <li>
                        <a href='#recipes'> Recipes </a>
                    </li>

                    <li>
                        <a href='#subscribe'> Subscribe </a>
                    </li>
                </ul>
            </nav>
        </div>

    </S.Footer>
  )
}

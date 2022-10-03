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
            <a href='#'>
                <img src={instagram} alt=""/>
            </a>

            <a href='#'>
                <img src={twitter} alt=""/>
             </a>

            <a href='#'>
                <img src={facebook} alt=""/>
            </a>

            <a href='#'>
                <img src={pinterest} alt=""/>
            </a>
        </S.SocialMedias>

        <div>
            <nav>
                <ul>
                    <li>
                        <a href='#'> About </a>
                    </li>

                    <li>
                        <a href='#'> Recipes </a>
                    </li>

                    <li>
                        <a href='#'> Subscribe </a>
                    </li>
                </ul>
            </nav>
        </div>

    </S.Footer>
  )
}

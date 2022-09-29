import React from 'react'
import instagram from '../../Assets/icon-instagram.svg'
import twitter from '../../Assets/icon-twitter.svg'
import facebook from '../../Assets/icon-facebook.svg'
import pinterest from '../../Assets/icon-pinterest.svg'
export default function Footer(){
  return(
    <footer>
        <div>
            <div>
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
            </div>

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
        </div>

        <div>
            <p> Layout produzido por Vai na Web para fins exclusivamente educacionais.</p>
        </div>

    </footer>
  )
}

import React from 'react'
import * as S from './Style.js'

export default function Header(){

  return(
    <>
      <div>
        <header>
            <div>
                <span> RC </span>
            </div>
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
        </header>
        <div>
            <h1> Recipes </h1>
        </div>
      </div>


    </>
  )
}

import React from 'react'
import * as S from './Style.js'

export default function Header(){

  return(
    <>
      <S.Container>
        <S.Header>
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
        </S.Header>
        <S.Logo>
            <h1> Recipes </h1>
        </S.Logo>
      </S.Container>


    </>
  )
}

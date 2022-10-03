import React from 'react'
import Card1 from '../../Assets/foodcard1.png'
import Card2 from '../../Assets/foodcard2.png'
import Card3 from '../../Assets/foodcard3.png'
import * as S from './Style.js'
import './style.css'

export default function Main(){
  return(
    <main>
        <S.SectionFood>
            <S.TextHead>
                <h2> Latest Recipes </h2>
            </S.TextHead>
            <S.Wrapper>
                <div className='card'>
                    <figure className='food1'>
                    </figure>
                    <div className='namefood'>
                        <span></span>
                        <h3> Red Velvet Cake </h3>
                    </div>
                </div>

                <div className='card'>
                    <figure className='food2'>
                    </figure>
                    <div  className='namefood'>
                        <span></span>
                        <h3> Margherita Pizza </h3>
                    </div>
                </div>

                <div className='card'>
                    <figure className='food3'>
                    </figure>
                    <div  className='namefood'>
                        <span></span>
                        <h3> Peanut Smoothie </h3>
                    </div>
                </div>
            </S.Wrapper>
        </S.SectionFood>

        <S.SectionAbout>
            <figure>

            </figure>
            <section>
                <div>
                    <h2> About </h2>
                </div>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                    tincidunt, tortor nec rhoncus dictum, lorem massa tempus sem,
                    eu tincidunt libero velit sit amet velit. Nunc in euismod urna.
                    Duis dapibus, elit eu eleifend tincidunt, nulla ipsum consectetur
                    lorem, quis tempor lorem justo quis nisi. Nam interdum, nisi nec
                    mollis sagittis, enim risus euismod nisi, quis rutrum quam augue
                    id mauris. Pellentesque mattis hendrerit semper. Orci varius
                    natoque penatibus et magnis dis parturient montes, nascetur
                    ridiculus mus. Ut vestibulum nisl ante, et ultricies sapien
                    facilisis aliquam.
                </p>
            </section>
        </S.SectionAbout>

        <S.SectionSubscribe>
            <div>
                <h2> Subscribe </h2>
                <p> Sign up for newsletter </p>
            </div>
            <form action="#">
                <input type="text" name="text" id="text" placeholder="Your email"/>
                <button type='submit'> Submit </button>
            </form>
        </S.SectionSubscribe>

    </main>
  )
}

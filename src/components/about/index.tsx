import {FunctionalComponent, h} from 'preact';
import style from './style.scss';

const About: FunctionalComponent = () => {

    return (
        <div className={style.about}>
            <div className={`${style['about__main-wrapper']}`}>
                <h1>Deflationary Token Development</h1>
                <p>CREATE and MANAGE your own deflationary token with a burn rate.</p>
                <a
                    className={`${style.btn} ${style['btn-orange-cl-solid']} ${style['btn-rounded']}`}
                >
                    Request
                <img src="../../assets/img/icons/icon-arrow-right-mask.svg" alt="arrow-right" />
            </a>
            </div>

            <div className={style['about__bg']}>
                <picture>
                    <source type="image/webp" srcSet='../../assets/img/about-bg.png' media="(min-width: 1440px)" />
                    <source type="image/webp" srcSet='../../assets/img/about-bg.png' media="(min-width: 768px)" />
                    <img src='../../assets/img/about-bg.png' alt=''/>
                   
                </picture>
            </div>

            
            
        </div>
    )
}

export default About;
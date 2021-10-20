import {FunctionalComponent, h} from 'preact';
import style from './style.scss';
const HowTokensWork: FunctionalComponent = () => {
    
    return (
        <div className={style.tokens}>
            <div className={style['tokens__title-wrapper']}>
                <h2>How deflationary tokens work</h2>
                <img width="300" height="239" src='../../assets/img/fire.png' alt='' />
            </div>

            <div className={style['tokens__main-container']}>
                  <img className={style['tokens__img-main-mobile']} width='336' height='771'srcset='../../assets/img/how-work-mobile.png' alt='' />
                  <img className={style['tokens__img-main']} width='1100' height='390'srcset='../../assets/img/how-work.png' alt='' />
            </div>
            <a
                    className={`${style.btn} ${style['btn-orange-cl-solid']} ${style['btn-rounded']}`}
                >
                    Learn More on Our Blog
                <img src="../../assets/img/icons/icon-arrow-right-mask.svg" alt="arrow-right" />
            </a>

            
        </div>
    )
}

export default HowTokensWork;
import {FunctionalComponent, h} from 'preact';
import style from './style.scss';
import cardFirst from '../../assets/img/safemoon.png';
import cardSecond from '../../assets/img/vanilla.png';
import cardThird from '../../assets/img/spore.png';
import cardFour from '../../assets/img/sake.png';
import cardFifth from '../../assets/img/yfdai.png';
interface ICard {
    icon: string;
    text: string;
    subtitle?: string;
}
const Blockchain: FunctionalComponent = () => {
    const dataCards: Array<ICard> = [
        {
          icon: cardFirst,
          text: 'SAFEMOON',
        },
        {
          icon: cardSecond,
          text: 'VANILLA NETWORK',
          subtitle: 'VNLA'
        },
        {
          icon: cardThird,
          text: 'SPORE',
          subtitle: 'SPORE'
        },
        {
          icon: cardFour,
          text: 'SAKE TOKEN',
          subtitle: 'SAKE'
        },
        {
          icon: cardFifth,
          text: 'YFDAI.Finance',
          subtitle: 'YF-DAI'
        },
    ]
    return (
        <div className={style.blockchain}>
            <div className={style['blockchain__title-wrapper']}>
                <h2>Below mentioned are some of the popular deflationary tokens of various blockchain networks.</h2>
            </div>
            <div className={style['blockchain__cards-container']}>
                {
                  dataCards.map((data: ICard) => 
                    <div className={style['blockchain__card-container']}> 
                      <div className={style['blockchain__card-title']}>
                        <img width="110" height="110" src={data.icon}/>
                      </div>
                      <h3>{data.text}</h3>
                      { data.subtitle && <p>{data.subtitle}</p> }
                    </div>
                  )
                }
            </div>

            
        </div>
    )
}

export default Blockchain;
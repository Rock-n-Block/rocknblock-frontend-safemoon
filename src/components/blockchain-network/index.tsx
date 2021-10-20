import {FunctionalComponent, h} from 'preact';
import style from './style.scss';

interface ICard {
    icon: string;
    text: string;
    subtitle?: string;
}
const Blockchain: FunctionalComponent = () => {
    const dataCards: Array<ICard> = [
        {
          icon: '../../assets/img/safemoon.png',
          text: 'SAFEMOON',
        },
        {
          icon: '../../assets/img/vanilla.png',
          text: 'VANILLA NETWORK',
          subtitle: 'VNLA'
        },
        {
          icon: '../../assets/img/spore.png',
          text: 'SPORE',
          subtitle: 'SPORE'
        },
        {
          icon: '../../assets/img/sake.png',
          text: 'SAKE TOKEN',
          subtitle: 'SAKE'
        },
        {
          icon: '../../assets/img/yfdai.png',
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
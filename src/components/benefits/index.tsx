import {FunctionalComponent, h} from 'preact';
import style from './style.scss';
import cardFirst from '../../assets/img/coin.png';
import cardSecond from '../../assets/img/bar.png';
import cardThird from '../../assets/img/investor.png';

interface ICard {
    icon: string;
    text: string;
}
const Benefits: FunctionalComponent = () => {
    const dataCards: Array<ICard> = [
        {
            icon: cardFirst,
            text: 'It helps in maintaining a stable price of the token value once listed for trading.',
        },
        {
            icon: cardSecond,
            text: 'It increases liquidity as the demand for the assets on the market is higher.',
        },
        {
          icon: cardThird,
          text: 'Due to the minimum supply of tokens, a large scale of investors is attracted towards it.',
      },
    ]
    return (
        <div className={style.benefits}>
            <div className={style['benefits__title-wrapper']}>
                <h2>Benefits of Deflationary Tokens</h2>
            </div>
            <div className={style['benefits__cards-container']}>
                {
                  dataCards.map((data: ICard) => 
                    <div className={style['benefits__card-container']}> 

                      <div className={style['benefits__card-title']}>
                        <img width="124" height="124" src={data.icon}/>
                      </div>
                      <p>{data.text}</p>
                    </div>
                  )
                }
            </div>
            <img className={style['benefits__bg']}  src='../../assets/img/benefits-bg.png' alt='none'/>

            
        </div>
    )
}

export default Benefits;
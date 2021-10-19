import {FunctionalComponent, h} from 'preact';
import style from './style.scss';
import cardFirst from '../../assets/img/cardFirst.png';
import cardSecond from '../../assets/img/cardSecond.png';

interface ICard {
    icon: string;
    title: string;
    text: string;
}
const WhatAreTokens: FunctionalComponent = () => {
    const dataCards: Array<ICard> = [
        {
            icon: cardFirst,
            title: 'Buy Back',
            text: 'A mechanism happens when a project removes a particular amount of its tokens from the market by sending them to a dead address, thus eliminates those tokens permanently. After that, the same project uses its very own funds to repurchase an amount of those burnt tokens and hold them in their wallets. ',
        },
        {
            icon: cardSecond,
            title: `Burn on transaction`,
            text: 'A method where a particular amount of tokens from the sender account is decreased and thus led to a decreased supply of tokens in the blockchain. This Burn transaction can be sent by any user who owns a token. ',
        },
    ]
    return (
        <div className={style.crowdsale}>
            <div className={style['crowdsale__title-wrapper']}>
                <h2>What are Deflationary Tokens?</h2>
                <p>A deflationary token model is where a particular percentage of tokens are removed from the market each time a token transfer takes place. The process of removing these tokens from the market is termed, Burns. The burning of these tokens can be carried out by two different mechanisms as follows:</p>
            </div>

            <div className={style['crowdsale__cards-container']}>
                {
                  dataCards.map((data: ICard) => 
                    <div className={style['crowdsale__card-container']}> 

                      <div className={style['crowdsale__card-title']}>
                        <img width="124" height="124" src={data.icon}/>
                        <h3>{data.title}</h3>
                      </div>
                      <p>{data.text}</p>
                    </div>
                  )
                }
            </div>

            
        </div>
    )
}

export default WhatAreTokens;
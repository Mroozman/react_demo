import styles from './DrawCard.module.css';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import CardsData from '../dataModels/ApiCardsData';
import Card from '../dataModels/ApiCard';

const DrawCard = () => {
  const { t } = useTranslation();
  const [pickedCard, setPickedCard] = useState<Card>();

  const drawCard = async (): Promise<CardsData> => {
    const cardResponse: CardsData = await fetch(
      'https://deckofcardsapi.com/api/deck/new/draw/?count=1'
    ).then((response: Response) => {
      return response.json();
    });
    return cardResponse;
  };

  const drawCardHandler = async (): Promise<void> => {
    const cardDrawnData: CardsData = await drawCard();
    const cardDrawn: Card | undefined = cardDrawnData.cards.find(
      (card: Card) => {
        return card;
      }
    );
    if (cardDrawn === undefined || !cardDrawn) {
      throw new Error('Card not found!');
    }
    setPickedCard(cardDrawn);
  };

  return (
    <>
      {!pickedCard && (
        <button onClick={drawCardHandler} className={styles.drawCardButton}>
          {t('drawCard')}
        </button>
      )}
      {pickedCard && (
        <>
          <div className={styles.cardSelected}>
            <div className={styles.cardInfo}>
              <p>{t('yourDrawnCard')}</p>
              <p>
                {t(`cards.${pickedCard!.value}`)}{' '}
                {t(`cards.${pickedCard!.suit}`)}
              </p>
            </div>
            <img className={styles.selectedCardImage} src={pickedCard.image} />
          </div>
          <button
            onClick={drawCardHandler}
            className={styles.drawAnotherCardButton}
          >
            {t('drawAnotherCard')}
          </button>
        </>
      )}
    </>
  );
};
export default DrawCard;

import Card from './ApiCard';

interface CardsData {
  cards: Array<Card>;
  deck_id: string;
  remaining: number;
  success: boolean;
}

export default CardsData;

import { AsyncStorage } from 'react-native';
import { FLASHCARDS_STORE_KEY } from '../config/constants';
import logger from '../lib/Logger';

const getItem = async () => {
  const value = await AsyncStorage.getItem(FLASHCARDS_STORE_KEY);

  return JSON.parse(value) || [];
};

const setItem = async (value) => {
  const put = typeof (value) === 'string' ? value : JSON.stringify(value);

  return AsyncStorage.setItem(FLASHCARDS_STORE_KEY, put);
};

const getDecks = async () => {
  try {
    const decks = await getItem();

    return { ok: true, decks };
  } catch (error) {
    logger(error);

    return { ok: false, error };
  }
};

const getDeck = async ({ title }) => {
  try {
    const { decks } = await getDecks();

    return { ok: true, deck: decks[title] };
  } catch (error) {
    logger(error);

    return { ok: false, error };
  }
};

const createDeck = async ({ title }) => {
  try {
    const newDeck = { title, cards: [] };
    const response = await getDecks();
    const decks = response.decks.concat(newDeck);

    await setItem(decks);

    logger('CREATE_DECK', decks);

    return { ok: true, decks };
  } catch (error) {
    logger(error);

    return { ok: false, error };
  }
};

const updateDeck = async ({ title, card }) => {
  logger(card.question, title);
  try {
    const response = await getDecks();
    const decks = response.decks.map((deck) => {
      if (deck.title === title) {
        const cards = deck.cards.concat(card);

        return { title, cards };
      }

      return deck;
    });

    await setItem(decks);

    return { ok: true, decks };
  } catch (error) {
    logger(error);

    return { ok: false, error };
  }
};

export {
  getItem,
  setItem,
  getDecks,
  getDeck,
  createDeck,
  updateDeck,
};

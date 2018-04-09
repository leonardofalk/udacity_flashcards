import { AsyncStorage } from 'react-native';
import { FLASHCARDS_STORE_KEY } from '../config/constants';
import logger from '../lib/Logger';

const getItem = async () => {
  const value = await AsyncStorage.getItem(FLASHCARDS_STORE_KEY);

  logger('GET_ITEM', value);

  return JSON.parse(value) || [];
};

const setItem = async (value) => {
  const put = typeof (value) === 'string' ? value : JSON.stringify(value);

  logger('SET_ITEM', put);

  return AsyncStorage.setItem(FLASHCARDS_STORE_KEY, put);
};

const getDecks = async () => {
  try {
    const response = await getItem();

    return { ok: true, decks: response.decks };
  } catch (error) {
    logger(error);

    return { ok: false, error };
  }
};

const getDeck = async ({ title }) => {
  try {
    const response = await getDecks();
    const deck = response.decks.find(deckFound => deckFound.title === title);

    return { ok: true, deck };
  } catch (error) {
    logger(error);

    return { ok: false, error };
  }
};

const createDeck = async ({ title }) => {
  try {
    const newDeck = { title, cards: [] };
    const response = await getItem();
    response.decks = response.decks.concat(newDeck);

    await setItem(response);

    return { ok: true, deck: newDeck };
  } catch (error) {
    logger(error);

    return { ok: false, error };
  }
};

const updateDeck = async ({ title, card }) => {
  try {
    const response = await getItem();
    const newData = response.decks.map((deck) => {
      if (deck.title === title) {
        const cards = deck.cards.concat(card);

        return { title, cards };
      }

      return deck;
    });

    await setItem({ ...response, decks: newData });

    return { ok: true, title, decks: newData.decks };
  } catch (error) {
    logger(error);

    return { ok: false, error };
  }
};

const registerQuizAnalytics = async () => {
  const response = await getItem();

  response.quiz.lastTakenAt = new Date();

  await setItem(response);
};

const getQuizLastTakenAt = async () => {
  const response = await getItem();

  return response.quiz.lastTakenAt;
};

export {
  getItem,
  setItem,
  getDecks,
  getDeck,
  createDeck,
  updateDeck,
  registerQuizAnalytics,
  getQuizLastTakenAt,
};

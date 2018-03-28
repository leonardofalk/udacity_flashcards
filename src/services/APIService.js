import { AsyncStorage } from 'react-native';
import { FLASHCARDS_STORE_KEY } from '../config/constants';

const getItem = async () => {
  const value = await AsyncStorage.getItem(FLASHCARDS_STORE_KEY);

  return JSON.parse(value);
};

const setItem = async (value) => {
  const put = typeof (value) === 'string' ? value : JSON.stringify(value);

  return AsyncStorage.setItem(FLASHCARDS_STORE_KEY, put);
};

const getDecks = async () => {
  try {
    const decks = await getItem();

    return { ok: true, decks: JSON.parse(decks) };
  } catch (error) {
    return { ok: false, error };
  }
};

const getDeck = async ({ id }) => {
  try {
    const decks = await getDecks();

    return { ok: true, deck: decks[id] };
  } catch (error) {
    return { ok: false, error };
  }
};

const createDeck = async ({ title }) => {
  try {
    const allDecks = await getDecks();
    const decks = await setItem({
      ...allDecks,
      [title]: {
        title,
        questions: [],
      },
    });

    return { ok: true, decks };
  } catch (error) {
    return { ok: false, error };
  }
};

const updateDeck = async ({ title, card }) => {
  try {
    const allDecks = await getDecks();
    const decks = setItem({
      ...allDecks,
      [title]: {
        ...allDecks[title],
        questions: allDecks[title].questions.concat(card),
      },
    });

    return { ok: true, decks };
  } catch (error) {
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

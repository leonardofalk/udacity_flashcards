import _ from 'lodash';
import { AsyncStorage } from 'react-native';
import { production } from '../config/environment';
import { getDecks, setItem } from '../services/APIService';

export const clearStorage = async () => AsyncStorage.clear();

export const fixtures = {
  quiz: {
    lastTakenAt: new Date(),
  },
  decks: [
    {
      title: 'react',
      cards: [
        {
          question: 'Are these very dumb questions ?',
          answer: 'Yes',
        },

        {
          question: 'Is ReactJS the coolest library ?',
          answer: 'Yes',
        },
      ],
    },
    {
      title: 'redux',
      cards: [
        {
          question: 'Does react comes with redux by default ?',
          answer: 'No',
        },
        {
          question: 'Is this the last card ?',
          answer: 'Yes',
        },
      ],
    },
  ],
};

export default async (force = false) => {
  if (production) {
    return false;
  }

  const response = await getDecks();

  if (!force && !_.isEmpty(response.decks)) {
    return false;
  }

  setItem(fixtures);

  return true;
};

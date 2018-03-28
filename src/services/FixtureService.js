import _ from 'lodash';
import { production } from '../config/environment';
import { getDecks, createDeck, updateDeck } from './APIService';

const fixtures = {
  titles: ['react', 'redux', 'udacity'],
};

const FixtureService = async () => {
  if (production) {
    return false;
  }

  const { decks } = await getDecks();

  if (!_.isEmpty(decks)) {
    return false;
  }

  fixtures.titles.forEach(title => createDeck({ title }));

  return true;
};

export default FixtureService;

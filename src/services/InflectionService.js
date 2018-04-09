import pluralize from 'pluralize';
import inflections from '../config/inflections';

inflections.irregular.forEach(irregularVerbs => (
  pluralize.addIrregularRule(irregularVerbs[0], irregularVerbs[1])
));

export default pluralize;

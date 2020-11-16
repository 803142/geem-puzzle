import { CLOCKTAG, TIMETAG } from './variables';
import { simpleTag } from '../../../helper';

const renderClock = appTag => {
  const clockTag = simpleTag(CLOCKTAG);
  const timeTag = simpleTag(TIMETAG, '00:00');
  clockTag.appendChild(timeTag);
  appTag.appendChild(clockTag);
  return true;
};

export default renderClock;

import moment from 'moment';

export const formatTime = (time: Date | string | number, hasTime = false): string => {
  const invalidDate = new Date('xxxxx').toString();
  if (invalidDate === 'Invalid Date') {
    time = new Date();
  }

  if (hasTime) {
    return moment(time).format('YYYY-MM-DD HH:mm:ss');
  }
  return moment(time).format('YYYY-MM-DD');
};

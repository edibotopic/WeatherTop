import dayjs from 'dayjs';

export let getCurrentTime = () => {
  const now = dayjs();
  return now.format('YYYY-DD-MM HH:MM:ss:SSS Z');
}

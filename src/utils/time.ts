import { parseISO, formatDistanceToNow } from 'date-fns';

export const parseTime = (timeStr: string, timezone: number = 8) => {
  const today = new Date();
  const [time, period] = timeStr.toUpperCase().split(/(?=[AP]M)/);
  const [hours, minutes = '00'] = time.trim().split(':');
  
  let hour = parseInt(hours);
  
  // Convert to 24-hour format
  if (period === 'PM' && hour !== 12) hour += 12;
  if (period === 'AM' && hour === 12) hour = 0;
  
  // Set the time
  today.setHours(hour);
  today.setMinutes(parseInt(minutes));
  today.setSeconds(0);
  today.setMilliseconds(0);
  
  // Convert to UTC
  const utcTime = new Date(today.getTime() - timezone * 60 * 60 * 1000);
  
  return utcTime.toISOString();
};

export const formatTimeAgo = (timestamp: string) => {
  return formatDistanceToNow(parseISO(timestamp), { addSuffix: true });
};
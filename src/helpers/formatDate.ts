const formatDate = (
  date: Date | string,
  type: 'onlyDate' | 'fullDate' = 'fullDate'
): string => {
  if (typeof date === 'string') {
    date = new Date(date);
  }

  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = String(date.getFullYear()).padStart(4, '0');
  const hour = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');

  if (type === 'onlyDate') {
    return `${day}/${month}/${year} `;
  }

  return `${day}/${month}/${year} ${hour}:${minutes}`;
};

export default formatDate;

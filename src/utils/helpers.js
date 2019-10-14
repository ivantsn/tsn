export const formatDate = dateToFormat => {
  const options = ['en-US', { day: 'numeric', month: 'long', year: 'numeric' }];
  const date = new Date(dateToFormat);

  return date.toLocaleDateString(...options);
};

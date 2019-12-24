export const getMonthLocale = (date, format="long") => {
  const month = date.getMonth();

  let shortLabel;

  // trivialy get moonth
  // TODO: trnslate
  switch(month) {
    case 0: shortLabel = "Jan"; break;
    case 1: shortLabel = "Feb"; break;
    case 2: shortLabel = "Mar"; break;
    case 3: shortLabel = "Apr"; break;
    case 4: shortLabel = "May"; break;
    case 5: shortLabel = "Jun"; break;
    case 6: shortLabel = "Jul"; break;
    case 7: shortLabel = "Aug"; break;
    case 8: shortLabel = "Sep"; break;
    case 9: shortLabel = "Oct"; break;
    case 10: shortLabel = "Nov"; break;
    case 11: shortLabel = "Dec"; break;
  };

  return shortLabel;
}

export function formatCurrency(value) {
  return new Intl.NumberFormat("en", {
    style: "currency",
    currency: "EUR",
  }).format(value);
}

export function formatDate(dateStr) {
  return new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "short",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(dateStr));
}

export function calcMinutesLeft(dateStr) {
  const d1 = new Date().getTime();
  const d2 = new Date(dateStr).getTime();
  return Math.round((d2 - d1) / 60000);
}

export function replaceWith(oldValue, newValue, array){
  /* Using map & filter */
  // const index=array.map((val, i)=>[i, val]).filter(x=>x[1]===oldValue)[0][0];
  // array[index]=newValue;

  /* using indexof */
  const array2=array.map(item=>item===oldValue?newValue:item);
  return array2;
}
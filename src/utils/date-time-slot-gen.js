const getTime = num => {
  const tempHour = String(Math.trunc(num / 60));
  const hour = tempHour + "".length === 1 ? "0" + tempHour : tempHour;
  const  min = num % 60 === 0 ? "00" : num % 60;
  
  return { num: num, time: hour + "h" + min };
}

const addDays = (date, days) => {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}


const getDateTimeSlots = () => {
  const times = 2,
  sums = 30;
  let start = 540;
  var dateTimes = Array(Math.round(9 * times))
  .fill(0)
  .map(function(_) {
    start = start + sums;
    return start;
  });
  
  return dateTimes
  .map(function(x) {
    return getTime(x);
  })
  .reduce(function(accc, element) {
    accc["" + element.num] = element.time;
    return accc;
  }, {});
}

const getNext15DaysTimeArray = () => {
  const weekDayArray = ["Dim.", "Lun.", "Mar.", "Mer.", "Jeu.", "Ven.", "Sam."]
  const result = {}
  let date = new Date()

  result[`${weekDayArray[date.getDay()]} ${date.getDate().toString().length === 1 ? "0"+date.getDate() : date.getDate()}/0${date.getMonth() + 1}`] = getDateTimeSlots()

  for(let i = 1; i< 16; i++) {
    date = addDays(date, 1)
    result[`${weekDayArray[date.getDay()]} ${date.getDate().toString().length === 1 ? "0"+date.getDate() : date.getDate()}/0${date.getMonth() + 1}`] = getDateTimeSlots()
  }

  return result
}

export default getNext15DaysTimeArray;

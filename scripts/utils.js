function dateFormat(date) {
  // const curDate = new Date(date);
  // // console.log(curDate);
  // const formattedDate = curDate.toLocaleDateString("en-US");
  // return formattedDate;

  const today = new Date();
  console.log({ today });
  const yyyy = today.getFullYear();
  let mm = today.getMonth() + 1; // Months start at 0!
  let dd = today.getDate();

  if (dd < 10) dd = "0" + dd;
  if (mm < 10) mm = "0" + mm;

  return (formattedToday = dd + "/" + mm + "/" + yyyy);

  // document.getElementById('DATE').value = formattedToday;
}

//DATE CONVERSION
function getMonthName(month) {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "April",
    "May",
    "June",
    "July",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];
  return months[month]; // No need to adjust month index
}
function getDayName(day) {
  const days = ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"];
  return days[day];
}
function convertDateToWords(date) {
  const date1 = new Date(date);
  const dayWords = getDayName(date1.getDay()); // Use getDay instead of getDate
  let day = date1.getDate();
  day = String(date1.getDate()).padStart(2, "0");
  const month = getMonthName(date1.getMonth());
  const year = date1.getFullYear();
  return `${dayWords} ${month} ${day} ${year}`; // Return the formatted date as a string
  // console.log(`${dayWords} ${month} ${day} ${year}`);
}

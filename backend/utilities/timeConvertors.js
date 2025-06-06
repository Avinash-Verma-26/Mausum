function unixToTime(value) {
  const dateTime = new Date(value).toLocaleString();
  const time = dateTime.split(" ")[1] + " " + dateTime.split(" ")[2];
  return time;
}

module.exports = { unixToTime };

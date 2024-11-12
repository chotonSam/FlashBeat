function getFormattedDate() {
  const currentDate = new Date();

  // Define options for formatting
  const options = {
    weekday: "long", // Full name of the day (e.g., "Thursday")
    year: "numeric", // Full numeric year (e.g., "2021")
    month: "long", // Full name of the month (e.g., "February")
    day: "2-digit", // Two-digit day (e.g., "25")
  };

  // Format the date
  return currentDate.toLocaleDateString("en-US", options);
}

export { getFormattedDate };

export const reportSummaries = {
  getWeatherDataFromCode(code) {
    let data = { icon: "", description: "" };
    console.log("code to check: ", code);
    console.log(typeof code);

    if (code >= 200 && code <= 232) {
      data.description += "thunder";
      data.icon += "11d";
    } else if (code >= 300 && code <= 321) {
      data.description += "drizzle";
      data.icon += "09d";
    } else if (code >= 500 && code <= 531) {
      data.description += "rain";
      data.icon += "10d";
    } else if (code >= 600 && code <= 622) {
      data.description += "snow";
      data.icon += "13d";
    } else if (code >= 701 && code <= 781) {
      data.description += "atmosphere";
      data.icon += "50d";
    } else if (code === 800) {
      data.description += "clear";
      data.icon += "01d";
    } else if (code >= 801 && code <= 804) {
      data.description += "clouds";
      data.icon += "02d";
    } else {
      console.log("default weather image loaded...");
      data.description += "no data"
      data.icon += "10d";
    }
    console.log("data equals: ", data)
    return data;
  },

  getLatestReportElement(reports, element) {
    let latest = null;
    if (reports && reports.length > 0) {
      latest = reports[reports.length - 1][element];
    }
    return latest;
  }
}

export const reportSummaries = {
  weatherCodeToIcon(code) {
    let img = "";  // Initialize the img variable
    console.log("code to check: ", code);
    console.log(typeof code);

    if (code >= 200 && code <= 232) {
      // desc += "thunder";
      img += "11d";
    } else if (code >= 300 && code <= 321) {
      // desc += "drizzle";
      img += "09d";
    } else if (code >= 500 && code <= 531) {
      // desc += "rain";
      img += "10d";
    } else if (code >= 600 && code <= 622) {
      // desc += "snow";
      img += "13d";
    } else if (code >= 701 && code <= 781) {
      // desc += "atmosphere";
      img += "50d";
    } else if (code === 800) {
      // desc += "clear";
      img += "01d";
    } else if (code >= 801 && code <= 804) {
      // console.log("clouds");
      img += "02d";
    } else {
      // console.log("default weather image loaded...");
      img += "10d";
    }
    return img;
  },

  getLatestReportElement(reports, element) {
    let latest = null;
    if (reports && reports.length > 0) {
      latest = reports[reports.length - 1][element];
    }
    return latest;
  }
}

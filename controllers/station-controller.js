import { stationStore } from '../models/station-store.js'
import { reportsStore } from '../models/reports-store.js'
import { stationAnalytics } from "../utils/station-analytics.js";
import { reportSummaries } from "../utils/report-summaries.js";
import { getCurrentTime } from "../utils/date-and-time.js";

export const stationController = {
  async index(request, response) {
    const station = await stationStore.getStationById(request.params.id)
    const reports = await reportsStore.getReportsByStationId(request.params.id)

    let temp_max = stationAnalytics.getMax(reports, "temp");
    let temp_min = stationAnalytics.getMin(reports, "temp");
    let wind_max = stationAnalytics.getMax(reports, "wind_speed");
    let wind_min = stationAnalytics.getMin(reports, "wind_speed");
    let pressure_max = stationAnalytics.getMax(reports, "pressure");
    let pressure_min = stationAnalytics.getMin(reports, "pressure");
    let weather_icon = reportSummaries.getLatestReportElement(reports, "weather_icon");
    let weather_desc = reportSummaries.getLatestReportElement(reports, "weather_desc");

    const viewData = {
      title: "Station",
      station: station,
      temp_max: temp_max,
      temp_min: temp_min,
      wind_max: wind_max,
      wind_min: wind_min,
      pressure_max: pressure_max,
      pressure_min: pressure_min,
      weather_icon: weather_icon,
      weather_desc: weather_desc,
    }
    response.render("station-view", viewData)
  },

  async addReport(request, response) {

    const station = await stationStore.getStationById(request.params.id)

    const newReport = {
      code: Number(request.body.code),
      temp: Number(request.body.temp),
      wind_speed: Number(request.body.wind_speed),
      wind_direction: String(request.body.wind_direction),
      pressure: Number(request.body.pressure),
      weather_icon: String(reportSummaries.getWeatherDataFromCode(Number(request.body.code)).icon),
      weather_desc: String(reportSummaries.getWeatherDataFromCode(Number(request.body.code)).description),
      time: String(getCurrentTime()),
    }

    console.log(`adding report ${newReport.title}`)
    await reportsStore.addReport(station._id, newReport)

    response.redirect("/station/" + station._id)
  },

  async deleteReport(request, response) {
    const stationId = request.params.stationid;
    const reportId = request.params.reportid;
    console.log(`Deleting Report ${reportId} from Station ${stationId}`);
    await reportsStore.deleteReport(request.params.reportId);
    response.redirect("/station/" + stationId);
  },
}

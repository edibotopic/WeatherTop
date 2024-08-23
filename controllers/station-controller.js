import { stationStore } from '../models/station-store.js'
import { reportsStore } from '../models/reports-store.js'
import { stationAnalytics } from "../utils/station-analytics.js";
import { reportSummaries } from "../utils/report-summaries.js";

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
      weather_icon: String(reportSummaries.weatherCodeToIcon(Number(request.body.code))),
    }

    console.log(`adding report ${newReport.title}`)
    await reportsStore.addReport(station._id, newReport)

    response.redirect("/station/" + station._id)
  }
}

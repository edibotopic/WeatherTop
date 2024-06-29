import { stationStore } from '../models/station-store.js'
import { reportsStore } from '../models/reports-store.js'

export const stationController = {
  async index(request, response) {
    const station = await stationStore.getStationById(request.params.id)
    const viewData = {
      title: "Station",
      station: station,
    }
    response.render("station-view", viewData)
  },

  async addReport(request, response) {
    const station = await stationStore.getStationById(request.params.id)
    const newReport = {
      code: Number(request.body.code),
      temp: Number(request.body.temp),
      pressure: Number(request.body.pressure),
    }
    console.log(`adding report ${newReport.title}`)
    await reportsStore.addReport(station._id, newReport)
    response.redirect("/station/" + station._id)
  }
}


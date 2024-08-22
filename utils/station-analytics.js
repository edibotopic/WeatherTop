export const stationAnalytics = {
  getMax(reports, measure) {
    if (reports && reports.length > 0) {
      let data = []
      for (let i = 0; i < reports.length; i++) {
        data.push(reports[i][measure])
      }
      return (Math.max(...data))
    }
  },
  getMin(reports, measure) {
    if (reports && reports.length > 0) {
      let data = []
      for (let i = 0; i < reports.length; i++) {
        data.push(reports[i][measure])
      }
      return (Math.min(...data))
    }
  }
}

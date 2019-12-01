const API_URL =
  'https://opendata.paris.fr/api/records/1.0/search/?dataset=velib-disponibilite-en-temps-reel&facet=overflowactivation&facet=creditcard&facet=kioskstate&facet=station_state&rows=100'

export const getAllStations = async (latitude, longitude) => {
  return new Promise(async resolve => {
    const url = `${API_URL}&geofilter.distance=${latitude},${longitude},2000`
    const response = await fetch(url)
    const json = await response.json()

    const stations = []

    json.records.map(record => {
      stations.push({
        code: record.fields.station_code,
        name: record.fields.station_name,
        distance: record.fields.dist,
        nbedock: record.fields.nbedock,
        nbdock: record.fields.nbdock,
        nbebike: record.fields.nbebike,
        nbbike: record.fields.nbbike,
        location: {
          latitude: record.fields.geo[0],
          longitude: record.fields.geo[1]
        }
      })
    })

    resolve(stations)
  })
}

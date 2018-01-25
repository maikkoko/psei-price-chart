import axios from 'axios'
import moment from 'moment'

const BASE_URL = 'http://phisix-api.appspot.com/stocks/'

export default function getStockData(symbol) {
  let requests = []

  getRequestDates().forEach(date => {
    requests.push(
      axios.get(BASE_URL + symbol + '.' + date + '.json').catch(e => e)
    )
  })

  return Promise.all(requests)
}

function getRequestDates() {
  let dateStart = moment().subtract(29, 'day')
  let dateEnd = moment()
  let requestDates = []

  while (dateEnd > dateStart) {
    requestDates.push(dateStart.format('YYYY-MM-DD'))
    dateStart.add(1, 'day')
  }

  return requestDates
}

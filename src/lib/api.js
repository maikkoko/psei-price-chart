import axios from 'axios'

const BASE_URL = 'http://phisix-api.appspot.com/stocks/'

export function getMultipleStocsk() {
  let requests = []

  requests.push(axios.get(BASE_URL + 'BPI.json').catch(e => e))
  requests.push(axios.get(BASE_URL + 'BDO.json').catch(e => e))
  requests.push(axios.get(BASE_URL + 'maikko.json').catch(e => e))

  return Promise.all(requests)
}

export default function getStock(symbol) {
  return axios.get(BASE_URL + symbol + '.json')
}

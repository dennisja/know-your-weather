import { get } from "./lib/request"
import * as utils from "./lib/utils"

const BASE_URL = `https://api.worldweatheronline.com/premium/v1/weather.ashx`

const API_KEY = "2f350f8566494a638b390456191803"

const getWeather = async function(
  locationName?: string,
  postalCode?: string,
): utils.FormattedWeatherData {
  if (!locationName && !postalCode) {
    throw new Error("Either location name or postal code should be provided")
  }

  const searchTerm: string = locationName
    ? utils.formatLocationName(locationName)
    : postalCode

  //   const { API_KEY } = process.env
  if (!API_KEY) {
    throw new Error("Either location name or postal code should be provided")
  }

  const queryString = utils.makeQueryString({
    key: API_KEY,
    q: searchTerm,
    format: "json",
    extra: "localObsTime",
    fx: "no",
    mca: "no",
    showlocaltime: "yes",
  })
  const url = `${BASE_URL}${queryString}`
  const response = await get(url)
  const {
    data: {
      request: [requestDetails = {}] = [],
      current_condition: [currentCondition = {}] = [],
      time_zone: [timeZone = {}] = [],
    } = {},
  } = response.data
  return utils.formatDataFromApi({
    ...requestDetails,
    ...currentCondition,
    ...timeZone,
  })
}

async function run(): void {
  try {
    const kampalaWeather = await getWeather("Kampala")
    const sanFranciscoWeather = await getWeather("San Francisco, CA")
    const zip94111Weather = await getWeather(undefined, 94111)

    console.log({
      kampalaWeather,
      sanFranciscoWeather,
      zip94111Weather,
    })
  } catch (error) {
    console.log(error)
  }
}

run()

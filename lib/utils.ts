export interface QueryStringObject {
  key: string
  q: string
  format: string
  extra: string
  fx: string
  mca: string
  showlocaltime: string
}

export interface WeatherAPIData {
  type: string
  query: string
  weatherDesc: { value: string }[]
  weatherIconUrl: { value: string }[]
  temp_C: string
  temp_F: string
  windspeedKmph: string
  humidity: string
  pressure: string
  cloudcover: string
  observation_time: string
  localObsDateTime: string
  utcOffset: string
  zone: string
}

export interface RequestDetails {
  searchedBy: string
  value: string
}

export interface FormattedWeatherData {
  request: RequestDetail
  weatherDescription: string
  weatherIconURL: string
  temperatureDegreesCelsius: string
  temperatureDegreesFahrenheit: string
  windSpeedKMPH: string
  humidity: string
  pressure: string
  cloudCover: string
  observationTime: string
  currentLocalDateTime: string
  utcOffset: string
  zone: string
}
export const makeQueryString = (
  queryStringObject: QueryStringObject,
): string => {
  return Object.entries(queryStringObject).reduce(
    (fullQueryString, currentKeyValuePair): string => {
      const [key, value]: [string, string] = currentKeyValuePair
      const isFirstKeyValuePair: boolean = !Boolean(fullQueryString)
      if (isFirstKeyValuePair) {
        return `?${key}=${value}`
      }
      return `${fullQueryString}&${key}=${value}`
    },
    "",
  )
}

export const replaceSpacesWithPlusSign = (str: string): string =>
  str.replace(/\s+/g, "+")

export const makeFirstLetterUpperCase = (str: string): string => {
  const lowerCaseString = str.toLowerCase()
  return lowerCaseString.charAt(0).toUpperCase() + lowerCaseString.slice(1)
}

export const formatLocationName = (locationName: string): string =>
  makeFirstLetterUpperCase(replaceSpacesWithPlusSign(locationName))

export const formatDataFromApi = (
  data: WeatherAPIData,
): FormattedWeatherData => {
  const {
    type: searchedBy,
    query: value,
    weatherDesc: [{ value: weatherDescription }],
    weatherIconUrl: [{ value: weatherIconURL }],
    temp_C: temperatureDegreesCelsius,
    temp_F: temperatureDegreesFahrenheit,
    windspeedKmph: windSpeedKMPH,
    humidity,
    pressure,
    cloudcover: cloudCover,
    observation_time: observationTime,
    localObsDateTime: currentLocalDateTime,
    utcOffset,
    zone,
  } = data
  return {
    request: {
      searchedBy,
      value,
    },
    weatherDescription,
    weatherIconURL,
    temperatureDegreesCelsius,
    temperatureDegreesFahrenheit,
    windSpeedKMPH,
    humidity,
    pressure,
    cloudCover,
    observationTime,
    currentLocalDateTime,
    utcOffset,
    zone,
  }
}

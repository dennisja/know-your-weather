# know-your-weather

Shows weather of an area searched by city or zipcode (postal code).
Currently hard coded to print weather details of Kampala, SanFrancisco and 94111 to the console.
See sample response below:-

```js
{ kampalaWeather:
   { request: { searchedBy: 'City', value: 'Kampala, Uganda' },
     weatherDescription: 'Partly cloudy',
     weatherIconURL:
      'http://cdn.worldweatheronline.net/images/wsymbols01_png_64/wsymbol_0002_sunny_intervals.png',
     temperatureDegreesCelsius: '28',
     temperatureDegreesFahrenheit: '82',
     windSpeedKMPH: '11',
     humidity: '62',
     pressure: '1017',
     cloudCover: '25',
     observationTime: '02:35 PM',
     currentLocalDateTime: '2019-03-18 05:35 PM',
     utcOffset: '3.0',
     zone: 'Africa/Kampala' },
  sanFranciscoWeather:
   { request:
      { searchedBy: 'City',
        value: 'San Francisco, United States of America' },
     weatherDescription: 'Partly cloudy',
     weatherIconURL:
      'http://cdn.worldweatheronline.net/images/wsymbols01_png_64/wsymbol_0002_sunny_intervals.png',
     temperatureDegreesCelsius: '11',
     temperatureDegreesFahrenheit: '52',
     windSpeedKMPH: '0',
     humidity: '80',
     pressure: '1015',
     cloudCover: '25',
     observationTime: '02:35 PM',
     currentLocalDateTime: '2019-03-18 07:35 AM',
     utcOffset: '-7.0',
     zone: 'America/Los_Angeles' },
  zip94111Weather:
   { request: { searchedBy: 'Zipcode', value: '94111' },
     weatherDescription: 'Partly cloudy',
     weatherIconURL:
      'http://cdn.worldweatheronline.net/images/wsymbols01_png_64/wsymbol_0002_sunny_intervals.png',
     temperatureDegreesCelsius: '11',
     temperatureDegreesFahrenheit: '52',
     windSpeedKMPH: '0',
     humidity: '80',
     pressure: '1015',
     cloudCover: '25',
     observationTime: '02:35 PM',
     currentLocalDateTime: '2019-03-18 07:35 AM',
     utcOffset: '-7.0',
     zone: 'America/Los_Angeles' } }
```

## Requirements

- yarn
- Node

## Setting Up the project

1. Install Dependencies

```sh
yarn
```

2. Signup for a free API key at [World Weather Online](https://www.worldweatheronline.com/developer/api/pricing2.aspx)

3. Set the `API_KEY` environment variable

> For UNIX based operating systems

```sh
export API="The API key you were given"
```

> For Windows

```sh
set API="The API key you were given"
```

3. Build the Application

```sh
yarn build
```

4. Run the application

```sh
yarn run-app
```

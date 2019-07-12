import React from 'react'

export const yAxisLabelPopover = {
  launchPerYear: {
    title: 'Launches Per Year',
    popover:
      "This chart shows SpaceX's total launches from 2006 to 2019 for each Rocket",
  },
  successRate: {
    title: 'Success Rate',
    popover:
      "The success rate of the launches have been nearly perfect (~97%) since SpaceX's 7th launch",
  },
  orbitEccen: {
    title: 'Orbital Eccentricity',
    popover:
      'The orbital eccentricity of an astronomical object is a dimensionless parameter that determines the amount by which its orbit around another body deviates from a perfect circle.',
    link: () => {
      return (
        null
        // <a
        //   target='_blank'
        //   href='https://en.wikipedia.org/wiki/Orbital_eccentricity'
        // >
        //   Learn more
        // </a>
      )
    },
  },
  orbitInclin: {
    title: 'Orbital Inclination (degrees)',
    popover:
      "Orbital inclination measures the tilt of an object's orbit around a celestial body. It is expressed as the angle between a reference plane and the orbital plane. ",
    link: () => {
      return (
        null
        // <a
        //   target='_blank'
        //   href='https://en.wikipedia.org/wiki/Orbital_eccentricity'
        // >
        //   Learn more
        // </a>
      )
    },
  },
  orbitMeanAn: {
    title: 'Orbital Mean Anomaly',
    popover:
      "In celestial mechanics, the mean anomaly is the fraction of an elliptical orbit's period that has elapsed since the orbiting body passed periapsis, expressed as an angle.",
    link: () => {
      return (
        null
        // <a
        //   target='_blank'
        //   href='https://en.wikipedia.org/wiki/Orbital_eccentricity'
        // >
        //   Learn more
        // </a>
      )
    },
  },
  orbitPeriap: {
    title: 'Orbital Periapsis (km)',
    popover:
      'An argument of periapsis of 0° means that the orbiting body will be at its closest approach to the central body at the same moment that it crosses the plane of reference.',
    link: () => {
      return (
        null
        // <a
        //   target='_blank'
        //   href='https://en.wikipedia.org/wiki/Orbital_eccentricity'
        // >
        //   Learn more
        // </a>
      )
    },
  },
  period: {
    title: 'Orbital Period (min)',
    popover:
      'The orbital period is the time a given astronomical object takes to complete one orbit around another object.  ',
    link: () => {
      return (
        null
        // <a
        //   target='_blank'
        //   href='https://en.wikipedia.org/wiki/Orbital_eccentricity'
        // >
        //   Learn more
        // </a>
      )
    },
  },
}

/**
 * This function will create the data needed for the chart.
 * It will produce an array of objects.
 *
 * queryData is the data object returned by the GQL endpoint
 */
export function getChartData(queryData) {
  //   Create a date Array with all dates from query results
  const dataYears = Array.from(new Array(14), (x, i) => String(i + 2006))

  // Create object that will hold each year's totals
  let rocketTotalsByYear = dataYears.map(cv => {
    return {
      year: cv,
      Falcon9: 0,
      FalconHeavy: 0,
      Falcon1: 0,
    }
  })

  const successRate = []
  const eccentricity = []
  const inclinationDeg = []
  const meanAnomaly = []
  const periapsisKm = []
  const periodMin = []

  // For each year, increment the corresponding rocket's total
  queryData.forEach(cv => {
    let rocket = cv.rocket.rocket_name
    successRate.push({
      launchNum: `#${cv.id}`,
      [cv.rocket.rocket_name]: cv.rocket.rocket.success_rate_pct,
    })
    eccentricity.push({
      launchNum: `#${cv.id}`,
      [cv.rocket.rocket_name]:
        cv.rocket.second_stage.payloads[0].orbit_params.eccentricity,
    })
    inclinationDeg.push({
      launchNum: `#${cv.id}`,
      [cv.rocket.rocket_name]:
        cv.rocket.second_stage.payloads[0].orbit_params.inclination_deg,
    })
    meanAnomaly.push({
      launchNum: `#${cv.id}`,
      [cv.rocket.rocket_name]:
        cv.rocket.second_stage.payloads[0].orbit_params.mean_anomaly,
    })
    periapsisKm.push({
      launchNum: `#${cv.id}`,
      [cv.rocket.rocket_name]:
        cv.rocket.second_stage.payloads[0].orbit_params.periapsis_km,
    })
    periodMin.push({
      launchNum: `#${cv.id}`,
      [cv.rocket.rocket_name]:
        cv.rocket.second_stage.payloads[0].orbit_params.period_min,
    })

    let chartObjindex = rocketTotalsByYear.findIndex(
      el => el.year === cv.launch_year
    )

    if (rocket === 'Falcon 1') rocketTotalsByYear[chartObjindex].Falcon1++
    else if (rocket === 'Falcon Heavy')
      rocketTotalsByYear[chartObjindex].FalconHeavy++
    else rocketTotalsByYear[chartObjindex].Falcon9++
  })

  return {
    rocketTotalsByYear,
    successRate,
    eccentricity,
    inclinationDeg,
    meanAnomaly,
    periapsisKm,
    periodMin,
  }
}

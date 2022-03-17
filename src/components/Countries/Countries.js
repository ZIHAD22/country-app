import React, { useEffect, useState } from 'react'
import Country from '../Country/Country'

const Countries = () => {
  const [countries, setCountry] = useState([])
  useEffect(() => {
    async function fetchData() {
      const countryFetch = await fetch('https://restcountries.com/v3.1/all')
      const countryData = await countryFetch.json()
      setCountry(countryData)
    }
    fetchData()
  }, [])

  return (
    <div className="allCountry">
      {countries.map((country) => (
        <Country key={country.cca3} country={country} />
      ))}
    </div>
  )
}

export default Countries

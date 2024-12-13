import React from 'react'
import axios from "axios"
import { useEffect, useState } from "react"

const ListCountries = () => {
      const [countries, setCountries] = useState([])
  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then((res) => {
      setCountries(res.data)
    }).catch((err) => {
      console.log(err)
    })
  })
  return (
    <div>
        {countries.map((country) => {
      return <div key={country.name.common}>
        {<img src={country.flags.png} />}
        {country.name.common}</div>
    })}
    </div>
  )
}

export default ListCountries
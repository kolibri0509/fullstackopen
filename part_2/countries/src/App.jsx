import { useState } from 'react'
import Filter from './Components/Filter'
import axios from 'axios'

const ShowCountries = ({countries}) => {
  const[state, setState] = useState([])
  
    if(countries.length === 0) return <p>Loading...</p>
  
    if(countries.length > 1 && countries.length < 10) 
      return countries.map(countrie =><div key={countrie}>{countrie}</div>)
  
    if(countries.length > 10) 
      return 'Too many matches, specify another filter'

    if(countries.length === 1) {
      const baseUrlItem = `https://studies.cs.helsinki.fi/restcountries/api/name/${countries}`
      axios.get(baseUrlItem).then(response => setState(Object.entries(response.data)))
      const capital = state.find(arr => arr[0] === 'capital')
      const area = state.find(arr => arr[0] === 'area')
      const languages = state.find(arr => arr[0] === 'languages')
      const flags = state.find(arr => arr[0] === 'flags')
      if(state.length>0)
      return <div>
         <h1>{countries}</h1>
         <p>{capital[0]} {capital[1]}</p>
         <p>{area[0]} {area[1]}</p>
         <p>{languages[0]} :</p>
         <ul>
           {Object.values(languages[1]).map(i => <li key={i}>{i}</li>)}
         </ul>  
         <img src={flags[1]['png']}/>
       </div>   
    }
}

const App = () => {
  const [countries, setCountries] = useState([]) 
  const [findCountrieValue, setFindCountrieValue] = useState('')

  const baseUrl = 'https://studies.cs.helsinki.fi/restcountries/api/all'

  const findCountrie = (event) => {
    setFindCountrieValue(event.target.value)

    axios.get(baseUrl).then(response =>
      setCountries(response.data
      .map(c => c.name.common).filter(c => c.toUpperCase()
  .includes(findCountrieValue.toUpperCase()))))
  }
    
  return (
    <div>
      <Filter find={findCountrie} value={findCountrieValue}/>      
      <ShowCountries countries={countries}/>
    </div>
  )
}
export default App
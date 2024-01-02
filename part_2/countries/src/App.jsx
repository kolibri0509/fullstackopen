import { useState } from 'react'
import Filter from './Components/Filter'
import axios from 'axios'

const ShowCountry = ({country}) => {
  const[state, setState] = useState({});
  const[isShow, setShow] = useState(false);
    const getInfo = () => {
          setShow((s) => !s);
          if (state.capital) return;
          const baseUrlItem = `https://studies.cs.helsinki.fi/restcountries/api/name/${country}`;
          axios.get(baseUrlItem)
            // .then((res) => res.json())
            .then((response) => {
              response.data.languages = Object.values(response.data.languages).join(", ");
              setState(response.data);
              console.log(response.data)
              return response.data;
            });
        };
        return (
              <div>
                <b>{country}</b>{" "}
                <button onClick={getInfo}>
                  {isShow ? "hide" : "show"}
                </button>
                {isShow && state.capital && (
                  <div>
                    <h1>{state.country}</h1>
                    <p>{state.capital[0]}</p>
                    <p>{state.area}</p>
                    <p>{state.languages}</p>
          
                    <div style={{ border: "1px solid black", width: "fit-content" }}>
                      <img src={state.flags["png"]} />
                    </div>
                  </div>
                )}
              </div>
            );
          };
          
const App = () => {
  const [countries, setCountries] = useState([]) 
  const [findCountrieValue, setFindCountrieValue] = useState('')

  const baseUrl = 'https://studies.cs.helsinki.fi/restcountries/api/all'

  const findCountrie = (event) => {
    setFindCountrieValue(event.target.value)

    axios.get(baseUrl).then(response =>
      setCountries(response.data
      .map(c => c.name.common).filter(c => c.toUpperCase()
  .indexOf(findCountrieValue.toUpperCase()) > -1)))
  }
  const list = countries.map((country) => (
    <ShowCountry key={country} country={country} />)) 

  return (
    <div>
      <Filter find={findCountrie} value={findCountrieValue}/> 
      {list.length > 10 ? 'Too many matches, specify another filter'
      : list}
    </div>
  )
}
export default App

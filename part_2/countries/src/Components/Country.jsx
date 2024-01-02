const Country = (props) => {
    const countryInfo = () => {
        
    }
    return (
        <div>
            <b>{props.country}</b>
            <button onClick={countryInfo}>show</button><br></br>
        </div>
    )
}
export default Country
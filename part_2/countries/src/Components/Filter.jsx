const Filter = (props) => {
    return (
        <div>
        find countries <input onChange={props.find} value={props.value}/>
        </div>
    )
}
export default Filter
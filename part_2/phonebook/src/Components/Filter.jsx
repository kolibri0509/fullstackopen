const Filter = (props) => {
    return (
        <div>
        filter shown with <input onChange={props.find} value={props.value}/>
        </div>
    )
}
export default Filter
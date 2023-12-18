const Person = (props) => {
const onDelete = () => {
    if(window.confirm(`Delete ${props.name} ?`)){
        return props.deleteUser(props.id)
    }
}
    return(
        <div>
            <div>{props.name} {props.number}
            <button onClick={onDelete}>delete</button>
            </div>
        </div>       
    )
}
export default Person
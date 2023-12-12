const PersonForm = (props) => {
    return (
        <form onSubmit={props.addNewName}>
            <div>
                name: <input onChange={props.writeName} value={props.newName}/> <br/> <br/>
                number: <input onChange={props.writeNumber} value={props.newNumber}/>
            </div> <br/>
            <div>
                <button type="submit">add</button>
            </div>
        </form>
    )
}
export default PersonForm
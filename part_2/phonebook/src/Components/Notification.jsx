const Notification = ({message}) => {
    if(message === null){
        return null
    }
    const styleMessage = {
        background: 'lightgrey',
        color:'green',
        fontSize: 16,
        borderStyle: 'solid',
        borderColor: 'green',
        borderWidth: 3,
        padding: 10,
        marginTop:10,
        marginBottom:10
    }
    return(
        <div style={styleMessage}>
            {message}
        </div>
    )
}
export default Notification
const Error = ({error}) => {
    if(error === null){
        return null
    }
    const styleError = {
        background: 'lightgrey',
        color:'red',
        fontSize: 16,
        borderStyle: 'solid',
        borderColor: 'red',
        borderRadius: 5,
        borderWidth: 3,
        padding: 10,
        marginTop:10,
        marginBottom:10
    }
    return(
        <div style={styleError}>
            {error}
        </div>
    )
}
export default Error
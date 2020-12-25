const userInput = (props) => {
    return <input onChange={(event) => props.changed(event, props.index)} value={props.name}/>
}

export default userInput;
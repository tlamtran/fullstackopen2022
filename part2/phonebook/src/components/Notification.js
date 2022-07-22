const Notification = ({message, style}) => {

    if (message === '') {
        return null
    }
    else {
        return(
            <div className="error" style={style}>
                {message}
            </div>
        )
    }
}

export default Notification
type HelloProps = {
    message: string
}

function Hello(props: HelloProps){ //props: any

    console.log("Disply Props:", props);
    return(
        <div>
            <h3>Hello {props.message}</h3>
            <p>This is a functional componet</p>
            <p>Generated at: {new Date().toString()}</p>
        </div>
    )
}

export default Hello;
import { useRouteError } from "react-router-dom"

const ErrorElement = () => {
    const errorCheck = useRouteError()
    return (
        <div className="error-page">
            <h1>OOPS!!</h1>
            <h2>SomeThing Went Wrong</h2>
            <p>{errorCheck.status}: {errorCheck.statusText}</p>
        </div>
    )
}

export default ErrorElement;
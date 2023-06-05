import "./Error.css"
import { checkErrorCodeDocumentation } from "./checkErrorCode"
interface ErrorProps {
    message: string,
    errorCode: string,
}
const Error = (props: ErrorProps) => {
    return (
        <div className="container">
            <h2>Ein Error ist aufgetreten!</h2>
            <p>{props.message}</p>
            <a target="_blanc" style={{color: "white"}} href={checkErrorCodeDocumentation(props.errorCode.toString())}>Nach dem Error in der Documentation suchen</a>
        </div>
    )
}
export default Error;
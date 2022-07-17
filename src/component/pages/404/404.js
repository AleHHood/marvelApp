import { Link } from "react-router-dom"

import "./404.scss"

const NoMatch404 = () => {

    return(
        <div className="No-match">
            <h2>404</h2>
            <Link to="/" className="No-match__link">Back to Home</Link>
        </div>
    )

}

export default NoMatch404
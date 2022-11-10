import { Link } from "react-router-dom";
const Homepage = () => {
    return(
        <div><h1>Homepage</h1>
        <Link to='/page2'>Go to page2</Link>
        <br />
        <Link to='/page3'>Go to page3</Link>
        </div>
    )
}

export default Homepage;
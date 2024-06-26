import { Link } from "react-router-dom";

function Header(){
    return (
        <header>
            <Link to={"/"}>Go to Home Page</Link>
        </header>
    );
}
export default Header;
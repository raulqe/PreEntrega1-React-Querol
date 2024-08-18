
import {CartWidget} from "./CartWidget";

export const NavBar = ({ logo }) => {

    return (
        <>
            <nav className="d-flex flex-wrap justify-content-center py-3 mb-1 border-bottom ">
                <a href="/" className="d-flex align-items-center me-5 mb-3 mb-md-1 me-md-auto link-body-emphasis text-white text-decoration-none">
                    <img className="bi ms-2 me-2 " src={logo} alt="Origo logo. Two concentric circles involved within an other circle which has two spheres, one on the top right and the other one on the bottom left."></img>
                    <span className="fs-4 ">h my T'shirt</span>
                </a>
                <ul className="nav nav-pills  ">
                    <li className="nav-item "><a href="/" className="btnS nav-link  text-white " aria-current="page">Home</a></li>
                    <li className="nav-item"><a href="/" className="btnS nav-link nav-link-hover text-white">Products</a></li>
                    <li className="nav-item"><a href="/" className="btnS nav-link text-white">Sale</a></li>
                    <li className="nav-item"><a href="/" className="btnS nav-link text-white">Shipping</a></li>
                    <li className="nav-item" ><CartWidget/></li>
                </ul>
            </nav>
        </>
    );
}
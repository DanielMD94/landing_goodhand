import "./Navbar.css"


const Navbar = () => {
    return (
        <nav className="navbarMain">
            <div className="navbarContainer">
                <div className="navbarLogo">
                    IdentityCrisis
                </div>
                <div className="navbarLinks">
                    <a href="#home">Home</a>
                    <a href="#about">About</a>
                    <a href="#services">Services</a>
                    <a href="#contact">Contact</a>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
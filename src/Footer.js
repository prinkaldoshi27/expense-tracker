const Footer = ({total}) => {
return (
        <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark" style={{ width: "40%", margin: "auto", alignSelf: "center", position: "sticky", bottom: "0" }}>
                <div className="container-fluid">
            <p className="text-light h5">Total : ₹ {total}</p>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
            </button>
                </div>
        </nav>
)
}
export default Footer
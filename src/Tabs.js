import { Link, useLocation } from "react-router-dom";

const Tabs = () => {
    const location = useLocation();

    return (
        <div style={{ width: "40%", margin: "auto", alignSelf: "center", marginTop: "2%", position: "sticky", top: "3000", zIndex: "999" }}>
            <ul className="nav nav-tabs" role="tablist">
                <li className="nav-item " role="presentation">
                    <Link
                        className={`nav-link ${location.pathname === "/show-expenses" ? "active" : ""}`}
                        to="/show-expenses"
                    >
                        Show Expenses
                    </Link>
                </li>
                <li className="nav-item" role="presentation">
                    <Link
                        className={`nav-link ${location.pathname === "/add-expenses" ? "active" : ""}`}
                        to="/add-expenses"
                    >
                        Add Expenses
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Tabs;

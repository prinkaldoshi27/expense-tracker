import { useState, useEffect } from "react";

const Loader = () => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prev) => (prev < 100 ? prev + 30 : 100)); 
        }, 500);

        return () => clearInterval(interval);
    }, []);

    return (
        <div style={{ width: "40%", margin: "auto", alignSelf: "center", marginTop: "2%" }}>
            <div className="progress" style={{ height: "20px" }}>
                <div
                    className="progress-bar progress-bar-striped bg-primary"
                    role="progressbar"
                    style={{ width: `${progress}%`, transition: "width 0.5s ease-in-out" }}
                    aria-valuenow={progress}
                    aria-valuemin="0"
                    aria-valuemax="100"
                >
                    {progress}%
                </div>
            </div>
        </div>
    );
};

export default Loader;

import { Link, useRouteError } from "react-router-dom";
const ErrorPage = () => {
    return (
        <div className="grid h-[100vh] justify-center text-center items-center">
            <div className="space-y-3">
                <h2 className="text-3xl font-bold">Ooppps!</h2>
                <button className="underline"><Link to={'/'}>Go Back</Link></button>
            </div>
        </div>
    );
};

export default ErrorPage;
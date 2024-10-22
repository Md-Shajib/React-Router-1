import { useNavigate, useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    const navigate = useNavigate();
    const handleGoBack = ()=> {
        navigate(-1);
    }
    return (
        <div className="grid h-[90vh] place-items-center p-10 m-10">
            <h2 className="font-bold text-4xl">Opps!!!</h2>
            <p><small>{error.error.stack}</small></p>
            <p>{error.statusText}</p>
            <button className="bg-gray-200 px-3 py-1 border rounded-xl" onClick={handleGoBack}>Go Back</button>
            <Link to={'/'}><button className="bg-gray-200 px-3 py-1 border rounded-xl">Go To Home</button></Link>
        </div>
    );
};

export default ErrorPage;
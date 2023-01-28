import { useRouteError } from "react-router-dom";

export default function ErrorBoundary(){
    let error = useRouteError();

    return <div>{error}</div>
}
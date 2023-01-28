import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ErrorBoundary from "../components/ErrorBoundary";

const routes = [
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorBoundary />
    },
]

const router = createBrowserRouter(routes)

export default router
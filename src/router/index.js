import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ErrorBoundary from "../components/ErrorBoundary";
import { GamePage } from "../components";

const routes = [
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorBoundary />,
    },
    {
        element: <GamePage />,
        path: "/game/:gameSlug",
        errorElement: <ErrorBoundary />
    }
]

const router = createBrowserRouter(routes)

export default router
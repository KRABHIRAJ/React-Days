import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import App from "../App";
import InstaStory from "../components/InstaStory";


const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/" element={<App />} />
            <Route path="/category/:category" element={<InstaStory /> } />
        </>
    )
)

export default router;
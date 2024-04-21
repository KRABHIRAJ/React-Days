import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Layout from "../../Layout";
import { About, Contact, Github, Home, Users } from "../components";
import { githubInfoLoader } from "../api";


const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<Layout />}>
            <Route path="" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route loader={githubInfoLoader} path="github" element={<Github />} />
            <Route path="users/:userId" element={<Users />} />
        </Route>
    )
)

export default router;
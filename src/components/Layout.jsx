import {NavMenu} from './NavMenu/NavMenu';
import { Footer } from "./Footer/Footer.jsx";
import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import { Box } from "../utils/Box.js";
import { Loader } from './BaseComponents/Loader/Loader';

export const Layout = () => {

    return (
        <Box>
            <NavMenu />
            <Box display='flex' flexDirection='column' justifyContent='space-between' minHeight='100vh'>
                <Suspense fallback={<Loader />}>
                    <Outlet />
                </Suspense>
            </Box>
            <Footer />
        </Box>
    )
}
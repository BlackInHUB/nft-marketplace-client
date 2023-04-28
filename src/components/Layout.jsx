import {NavMenu} from './NavMenu/NavMenu';
import { Footer } from "./Footer/Footer.jsx";
import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import { Box } from "../utils/Box.js";

export const Layout = () => {

    return (
        <Box>
            <NavMenu />
            <Box minHeight='100vh' display='flex' flexDirection='column' justifyContent='space-between'>
                <Suspense>
                    <Outlet />
                </Suspense>
                <Footer />
            </Box>
        </Box>
    )
}
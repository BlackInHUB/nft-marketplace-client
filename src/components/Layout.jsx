import { NavMenu } from "./NavMenu/NavMenu.jsx";
import { Footer } from "./Footer/Footer.jsx";
import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import { Box } from "../utils/Box.js";

export const Layout = () => {

    return (
        <Box>
            <NavMenu />
            <Suspense>
                <Outlet />
            </Suspense>
            <Footer />
        </Box>
    )
}
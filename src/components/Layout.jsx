import { NavMenu } from "./NavMenu/NavMenu.jsx";
import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import { Box } from "../utils/Box.js";
import { useState } from "react";

export const Layout = () => {
    const [edit, setEdit] = useState(false);

    return (
        <Box>
            <NavMenu setEdit={setEdit} edit={edit} />
            <Suspense>
                <Outlet context={{edit, setEdit}} />
            </Suspense>
        </Box>
    )
}
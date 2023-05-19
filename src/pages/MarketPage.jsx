import { PaddingWrapper } from "../components/BaseComponents/PaddingWrapper/PaddingWrapper.styled";
import { Suspense } from "react";
import { MarketSearch } from "../components/Marketplace/MarketSearch/MarketSearch";
import { MarketTabBar } from "../components/Marketplace/MarketTabBar/MarketTabBar";
import { Outlet } from "react-router-dom";

const MarketPage = () => {    
    return (
        <>
            <PaddingWrapper>
                <MarketSearch />
                <MarketTabBar />
            </PaddingWrapper>
            <Suspense>
                <Outlet />
            </Suspense>
        </>
    )
};

export default MarketPage;
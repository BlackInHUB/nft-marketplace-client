import { useDispatch } from "react-redux";
import nftOperations from "../redux/nft/nftOperations";
import { PaddingWrapper } from "../components/BaseComponents/PaddingWrapper/PaddingWrapper.styled";
import { Suspense, useEffect } from "react";
import { MarketSearch } from "../components/Marketplace/MarketSearch/MarketSearch";
import { MarketTabBar } from "../components/Marketplace/MarketTabBar/MarketTabBar";
import { Outlet } from "react-router-dom";

const MarketPage = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(nftOperations.getAll());
    }, [dispatch]);
    
    return (
        <PaddingWrapper>
            <MarketSearch />
            <MarketTabBar />
            <Suspense>
                <Outlet />
            </Suspense>
        </PaddingWrapper>
    )
};

export default MarketPage;
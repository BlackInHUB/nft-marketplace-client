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
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        });
        
        dispatch(nftOperations.getAll());
        dispatch(nftOperations.getAllCollections());
    }, [dispatch]);
    
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
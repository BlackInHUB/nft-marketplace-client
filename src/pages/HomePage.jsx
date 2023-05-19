import { useDispatch } from "react-redux";
import { Hero } from "../components/Hero/Hero";
import { TrendingCollection } from "../components/MainPageComponents/TrendingCollection";
import { TopCreators } from "../components/MainPageComponents/TopCreators";
import { TrendingNfts } from "../components/MainPageComponents/TrendingNfts";
import nftOperations from "../redux/nft/nftOperations";
import { useEffect } from "react";

const HomePage = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        });
        dispatch(nftOperations.getAll());
    }, [dispatch]);

    return (
        <>
            <Hero />
            <TrendingCollection />
            <TopCreators />
            <TrendingNfts />
        </>
    )
};

export default HomePage;
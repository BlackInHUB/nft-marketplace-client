import { useDispatch } from "react-redux";
import { Hero } from "../components/Hero/Hero";
import { TrendingCollection } from "../components/MainPageComponents/TrendingCollection";
import nftOperations from "../redux/nft/nftOperations";
import { useEffect } from "react";

const HomePage = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(nftOperations.getAll());
    }, [dispatch]);

    return (
        <>
            <Hero />
            <TrendingCollection />
        </>
    )
};

export default HomePage;
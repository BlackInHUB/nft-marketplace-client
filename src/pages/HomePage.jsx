import { useDispatch } from "react-redux";
import { Hero } from "../components/Hero/Hero";
import nftOperations from "../redux/nft/nftOperations";

const HomePage = () => {
    const dispatch = useDispatch();

    dispatch(nftOperations.getAll());

    return (
        <>
            <Hero />
        </>
    )
};

export default HomePage;
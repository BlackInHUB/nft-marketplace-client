import MarketNfts from "./MarketNfts";
import MarketCollections from "./MarketCollections";
import { useOutletContext, useParams, useSearchParams } from "react-router-dom";
import { useEffect } from "react";

const Marketplace = () => {
    const {category} = useParams();
    const {params} = useOutletContext();
    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        if (params) {
            setSearchParams(params)
        } else {
            setSearchParams();
        };
    }, [params, setSearchParams])
    
    return (
        <>
            {category === 'nfts' && <MarketNfts />}
            {category === 'collections' && <MarketCollections />}
        </>
    )
};

export default Marketplace;
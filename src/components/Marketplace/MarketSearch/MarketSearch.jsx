import { useState } from "react";
import { IconButton } from "../../BaseComponents/Buttons/IconButton";
import { SearchTitle, SearchText, SearchForm, SerachFormInput, SearhcContainer } from "./MarketSearch.styled";

export const MarketSearch = ({searchChange, search, searchSubmit, searchErase}) => {
    const [submit, setSubmit] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!search) {
            return
        };

        setSubmit(!submit);
        searchSubmit();
    };

    const handleErase = () => {
        searchErase();
        setSubmit(!submit);
    };

    return (
        <SearhcContainer>
            <SearchTitle>Browse Marketplace</SearchTitle>
            <SearchText>Browse through more than 50k NFTs on the NFT Marketplace.</SearchText>
            <SearchForm onSubmit={handleSubmit}>
                <SerachFormInput type='text' value={search} onChange={searchChange} placeholder="Search your favourite NFTs" />
                {submit ? 
                    <IconButton iconType='close' type='button' w='25px' h='25px' right='20px' onClick={handleErase} /> : 
                    <IconButton iconType='search' type='submit' w='25px' h='25px' right='20px' />
                }
            </SearchForm>
        </SearhcContainer>
    )
}
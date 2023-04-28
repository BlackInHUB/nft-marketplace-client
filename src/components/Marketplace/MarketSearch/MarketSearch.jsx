import { IconButton } from "../../BaseComponents/Buttons/IconButton";
import { SearchTitle, SearchText, SearchForm, SerachFormInput, SearhcContainer } from "./MarketSearch.styled";

export const MarketSearch = () => {

    return (
        <SearhcContainer>
            <SearchTitle>Browse Marketplace</SearchTitle>
            <SearchText>Browse through more than 50k NFTs on the NFT Marketplace.</SearchText>
            <SearchForm>
                <SerachFormInput type='text' placeholder="Search your favourite NFTs" />
                <IconButton iconType='search' type='submit' w='25px' h='25px' right='20px' />
            </SearchForm>
        </SearhcContainer>
    )
}
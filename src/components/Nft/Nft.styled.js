import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const NftContainer = styled.section`
    @media (max-width: 767px) {
        padding-bottom: 40px;
    }
`

export const NftImage = styled.div`
    width: 100%;
    height: 300px;
    background: url(${p => p.imageUrl});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;

    @media (min-width: 1280px) {
        height: 500px;
    }
`

export const InfoContainer = styled.div`
    padding-top: 40px;
    padding-bottom: 40px;
`

export const AuctionContainer = styled.div`
    background-color: ${({theme}) => theme.colors.secondary};
    border-radius: ${({theme}) => theme.radii.normal};
    padding: 30px;
`

export const TopWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`

export const BtnsWrapper = styled.div`
    display: flex;
    gap: 30px;
`

export const NftTitle = styled.h2`
    font-size: ${({theme}) => theme.fontSizes.h4};
    line-height: ${({theme}) => theme.lineHeights.h4};
    font-weight: ${({theme}) => theme.fontWeights.bold};

    @media (min-width: 768px) {
        font-size: ${({theme}) => theme.fontSizes.h3};
        line-height: ${({theme}) => theme.lineHeights.h3};
    }

    @media (min-width: 1280px) {
        font-size: ${({theme}) => theme.fontSizes.h2};
        line-height: ${({theme}) => theme.lineHeights.h2};
    }
`

export const CreatedAt = styled.p`
    color: ${({theme}) => theme.colors.caption};
    margin-top: 10px;
    margin-bottom: 20px;

    @media (min-width: 768px) {
        margin-bottom: 30px;
    }

    @media (min-width: 1280px) {
        font-size: ${({theme}) => theme.fontSizes.h5};
        line-height: ${({theme}) => theme.lineHeights.h5};
    }
`

export const InfoTitle = styled.p`
    font-family: ${({theme}) => theme.fontFamily.secondary};
    color: ${({theme}) => theme.colors.caption};
    margin-bottom: 10px;

    :not(:first-of-type) {
        margin-top: 20px;
    }

    @media (min-width: 768px) {
        :not(:first-of-type) {
            margin-top: 30px;
        }
    }

    @media (min-width: 1280px) {
        font-size: ${({theme}) => theme.fontSizes.h5};
        line-height: ${({theme}) => theme.lineHeights.h5};
    }
`

export const AuthorLink = styled(NavLink)`
    display: flex;
    align-items: center;
    gap: 12px;
`

export const AuthorAvatar = styled.img`
    width: 24px;
    height: 24px;
    border-radius: ${({theme}) => theme.radii.round};
`

export const AuthorName = styled.p`

    @media (min-width: 1280px) {
        font-size: ${({theme}) => theme.fontSizes.h5};
        line-height: ${({theme}) => theme.lineHeights.h5};
    }
`

export const NftDescription = styled.p`

    @media (min-width: 1280px) {
        font-size: ${({theme}) => theme.fontSizes.h5};
        line-height: ${({theme}) => theme.lineHeights.h5};
    }
`

export const DetailsList = styled.ul`
    
`

export const DetailsListItem = styled.li`
    width: fit-content;

    :not(:last-child) {
        margin-bottom: 10px;
    }
`

export const DetailsLink = styled.a`
    display: flex;
    gap: 10px;
    align-items: center;
    transition: all 250ms ease;

    @media (min-width: 1280px) {
        font-size: ${({theme}) => theme.fontSizes.h5};
        line-height: ${({theme}) => theme.lineHeights.h5};
    }

    :hover,
    :focus-visible {
        color: ${({theme}) => theme.colors.accent};
    }
`

export const LinkIcon = styled.svg`
    width: 24px;
    height: 24px;
    fill: ${({theme}) => theme.colors.caption};
    transition: all 250ms ease;

    @media (min-width: 1280px) {
        width: 32px;
        height: 32px;
    }

    ${DetailsLink}:hover & {
        fill: ${({theme}) => theme.colors.accent};
    }
    ${DetailsLink}:focus-visible & {
        fill: ${({theme}) => theme.colors.accent};
    }
`

export const TagsList = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 20px;

    @media (min-width: 1280px) {
        flex-direction: row;
    }
`

export const TagsListItem = styled.li`
    width: fit-content;
    font-weight: ${({theme}) => theme.fontWeights.bold};
    padding: 12px 30px;
    background-color: ${({theme}) => theme.colors.secondary};
    border-radius: ${({theme}) => theme.radii.normal};
`

export const MoreContainer = styled.div`
    padding-bottom: 40px;
    padding-top: 40px;
    background-color: ${({theme}) => theme.colors.secondary};

    @media (min-width: 1280px) {
        padding-bottom: 60px;
    }
`

export const MoreTopWrapper = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 40px;
    
    @media (min-width: 768px) {
        justify-content: space-between;
    }

    @media (min-width: 1280px) {
        margin-bottom: 60px;
    }
`

export const MoreTitle = styled.h3`
    font-size: ${({theme}) => theme.fontSizes.h4};
    line-height: ${({theme}) => theme.lineHeights.h4};

    @media (min-width: 1280px) {
        font-size: ${({theme}) => theme.fontSizes.h3};
        line-height: ${({theme}) => theme.lineHeights.h3};
    }
`

export const LinkWrapper = styled.div`
    width: 100%;
    text-align: center;
`

export const ToArtistLink = styled(NavLink)`
    display: inline-block;
`
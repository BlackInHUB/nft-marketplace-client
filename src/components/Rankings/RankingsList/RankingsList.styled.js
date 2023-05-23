import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Wrapper = styled.div`
    padding: 40px 0px;
    background-color: ${p => p.theme.colors.secondary};
`

export const InfoBar = styled.div`
    padding: 12px 15px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    border: ${p => p.theme.borders.thin} ${p => p.theme.colors.caption};
    border-radius: ${p => p.theme.radii.normal};
    font-family: ${p => p.theme.fontFamily.secondary};
    font-size: ${p => p.theme.fontSizes.caption};
    line-height: ${p => p.theme.lineHeights.caption};
    color: ${p => p.theme.colors.caption};
    margin-bottom: 20px;

    @media (min-width: 768px) {
        font-size: ${p => p.theme.fontSizes.body};
        line-height: ${p => p.theme.lineHeights.body};
        padding: 12px 25px;
    }

    @media (min-width: 1280px) {
        padding: 12px 30px;
    }
`

export const LeftWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;

    @media (min-width: 768px) {
        gap: 20px;
    }

    @media (min-width: 1280px) {
        gap: ${p => p.gap ? p.gap : '20px'}
    }
`

export const RightWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
`

export const InfoBarPart = styled.span`
    width: ${p => p.w ? p.w : 'fit-content'};
`

export const List = styled.ul`

`

export const ListItem = styled.li`
    opacity: ${p => p.show ? 1 : 0};
    transform: ${p => p.show ? 'translate(0, 0)' : 'translate(0, 100%)'};
    transition: all 500ms ease;
    
    &:not(:last-child) {
        margin-bottom: 20px;
    }
`

export const ListItemLink = styled(NavLink)`
    display: flex;
    justify-content: space-between;
    background-color: ${p => p.theme.colors.main};
    border-radius: ${p => p.theme.radii.normal};
    font-family: ${p => p.theme.fontFamily.secondary};
    font-size: ${p => p.theme.fontSizes.caption};
    line-height: ${p => p.theme.lineHeights.caption};
    padding: 12px 15px;

    @media (min-width: 768px) {
        font-size: ${p => p.theme.fontSizes.body};
        line-height: ${p => p.theme.lineHeights.body};
        padding: 14px 25px;
    }

    @media (min-width: 1280px) {
        padding: 12px 20px;
    }
`

export const ListItemRank = styled.span`
    color: ${p => p.theme.colors.caption};

    @media (min-width: 1280px) {
        display: flex;
        width: 30px;
        height: 30px;
        justify-content: center;
        align-items: center;
        border-radius: ${p => p.theme.radii.round};
        background-color: ${p => p.theme.colors.secondary};
    }
`

export const ListItemArtist = styled.div`
    display: flex;
    gap: 12px;
    align-items: center;

    @media (min-width: 1280px) {
        gap: 20px;
    }
`

export const ArtistAvatar = styled.img`
    width: 24px;
    height: 24px;
    border-radius: ${p => p.theme.radii.round};

    @media (min-width: 1280px) {
        width: 60px;
        height: 60px;
    }
`

export const ArtistName = styled.p`
    font-family: ${p => p.theme.fontFamily.main};
    font-size: ${p => p.theme.fontSizes.body};
    line-height: ${p => p.theme.lineHeights.body};

    @media (min-width: 768px) {
        font-size: ${p => p.theme.fontSizes.h5};
        line-height: ${p => p.theme.lineHeights.h5};
        font-weight: ${p => p.theme.fontWeights.bold};
    }
`

export const ListItemItem = styled.span`
    width: 80px;
    color: ${p => p.change ? p.theme.colors.confirmGreen : p.theme.colors.text};

    @media (min-width: 768px) {
        width: 100px;
    }

    @media (min-width: 1280px) {
        width: 160px;
    }
`

export const NoInfo = styled.p`
    padding: 60px 0;
    font-size: ${p => p.theme.fontSizes.h3};
    line-height: ${p => p.theme.lineHeights.h3}
`
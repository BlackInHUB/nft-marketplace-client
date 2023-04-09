import styled from "styled-components";
import defaultCover from '../../images/defaultCover.jpg';
import {AiOutlineEdit} from 'react-icons/ai';

export const Container = styled.section`
`

export const CoverWrapper = styled.div`
    position: relative;
    background: ${p => p.background ? `url(${p.background})` : `url(${defaultCover})`};
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    height: 250px;

    @media (min-width: 768px) {
        height: 280px;
    }

    @media (min-width: 1280px) {
        height: 320px;
    }
`

export const AvatarWrapper = styled.div`
    position: absolute;
    background-color: ${p => p.theme.colors.darkGrey};
    top: -60px;
    left: 50%;
    transform: translate(-50%, 0);
    width: 120px;
    height: 120px;
    border-radius: ${p => p.theme.radii.round};
    border: ${p => p.theme.borders.main} ${p => p.theme.colors.mainBlack};

    @media (min-width: 768px) {
        left: 72px;
        transform: translate(0, 0)
    }

    @media (min-width: 1280px) {
        left: 115px;
    }
`

export const Avatar = styled.img`
    width: 116px;
    height: 116px;
    border-radius: inherit;
`

export const UsernameBtnsWrapper = styled.div`
    @media (min-width: 1280px) {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
`

export const InfoWrapper = styled.div`
    position: relative;
    padding: 70px 30px 30px 30px;

    @media (min-width: 768px) {
        padding: 70px 72px 30px 72px;
    }

    @media (min-width: 1280px) {
        padding: 70px 115px 30px 115px;
    }
`

export const Username = styled.h2`
    font-size: ${p => p.theme.fontSizes.h4};
    line-height: ${p => p.theme.lineHeights.h4};
    font-weight: ${p => p.theme.fontWeights.bold};
    margin-bottom: 30px;

    @media (min-width: 768px) {
        font-size: ${p => p.theme.fontSizes.h3};
        line-height: ${p => p.theme.lineHeights.h3};
    }

    @media (min-width: 1280px) {
        margin-bottom: 0px;
        font-size: ${p => p.theme.fontSizes.h2};
        line-height: ${p => p.theme.lineHeights.h2};
    }
`

export const InfoList = styled.ul`
    display: flex;
    gap: 20px;
    margin-top: 30px;
`

export const InfoListItem = styled.li`

`

export const InfoListItemNumber = styled.p`
    font-family: ${p => p.theme.fontFamily.spaceMono};
    font-weight: ${p => p.theme.fontWeights.boldest};
    font-size: ${p => p.theme.fontSizes.h5};
    line-height: ${p => p.theme.lineHeights.h5};

    @media (min-width: 1280px) {
        font-size: ${p => p.theme.fontSizes.h4};
        line-height: ${p => p.theme.lineHeights.h4};
    }
`

export const InfoListItemText = styled.p`
    font-size: ${p => p.theme.fontSizes.body};
    line-height: ${p => p.theme.lineHeights.body};

    @media (min-width: 1280px) {
        font-size: ${p => p.theme.fontSizes.h5};
        line-height: ${p => p.theme.lineHeights.h5};
    }
`

export const DetailsWrapper = styled.div`
    margin-top: 30px;

    &:last-of-type {
        margin-bottom: 30px;
    }
`

export const DetailsTitle = styled.p`
    display: block;
    font-family: ${p => p.theme.fontFamily.spaceMono};
    font-size: ${p => p.theme.fontSizes.body};
    line-height: ${p => p.theme.lineHeights.body};
    color: ${p => p.theme.colors.grey};
    font-weight: ${p => p.theme.fontWeights.boldest};

    @media (min-width: 1280px) {
        font-size: ${p => p.theme.fontSizes.h5};
        line-height: ${p => p.theme.lineHeights.h5};
    }
`

export const BioText = styled.p`

`

export const SocialList = styled.ul`

`

export const SocialListItem = styled.li`

`

export const FileInputLabel = styled.label`
    display: flex;
    align-items: center;
    cursor: pointer;
    position: absolute;
    top: 50%;
    right: 50%;
    transform: translate(50%, -50%);
    transition: all 250ms ease;

    :hover,
    :focus-visible {
        color: ${p => p.theme.colors.purple};
    }
`

export const FileInput = styled.input`
    opacity: 0;
    width: 0;
    height: 0;
`

export const EditIcon = styled(AiOutlineEdit)`
    fill: ${p => p.theme.colors.white};
    width: 50px;
    height: auto;
    margin-right: 10px;
    transition: all 250ms ease;

    ${FileInputLabel}:hover & {
        fill: ${p => p.theme.colors.purple};
    }
    ${FileInputLabel}:focus & {
        fill: ${p => p.theme.colors.purple};
    };
`

export const EditWrapper = styled.div`
    display: flex;
    align-items: center;
    position: relative;
`
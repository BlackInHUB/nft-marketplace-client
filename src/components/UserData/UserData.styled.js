import styled from "styled-components";

export const Container = styled.section`

`

export const CoverWrapper = styled.div`

`

export const Cover = styled.img`

`

export const AvatarWrapper = styled.div`

`

export const Avatar = styled.img`

`

export const BtnsWrapper = styled.div`
    @media (min-width: 768px) {
        display: flex;
    }
`

export const UsernameBtnsWrapper = styled.div`
    @media (min-width: 1280px) {
        display: flex;
    }
`

export const InfoWrapper = styled.div`

`

export const Username = styled.h2`

`

export const InfoList = styled.ul`
    display: flex;
    gap: 30px;
    margin-top: 40px;

    @media (min-width: 767px) {
        margin-top: 20px;
    }

    @media (min-width: 1280px) {
        margin-top: 40px;
    }
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

`

export const DetailsTitle = styled.p`

`

export const BioText = styled.p`

`

export const SocialList = styled.ul`

`

export const SocialListItem = styled.li`

`
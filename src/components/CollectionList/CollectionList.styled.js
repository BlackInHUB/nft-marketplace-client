import styled from "styled-components";

export const List = styled.ul`
    display: flex;
    justify-content: center;
    gap: 30px;
    flex-wrap: wrap;
`

export const ListItem = styled.li`
    position: relative;
`

export const MainImg = styled.img`
    width: 315px;
    height: 315px;
    border-radius: ${p => p.theme.radii.normal};
    margin-bottom: 15px;

    @media (min-width: 768px) {
        width: 330px;
        height: 330px;
    }
`

export const OtherWrapper = styled.div`
    display: flex;
    gap: 15px;
    margin-bottom: 15px;
`

export const OtherImgs = styled.img`
    width: 100px;
    height: 100px;
    border-radius: ${p => p.theme.radii.normal};
`

export const ImgsCounter = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 100px;
    border-radius: ${p => p.theme.radii.normal};
    background-color: ${p => p.theme.colors.accent};
`

export const Counter = styled.p`
    font-family: ${p => p.theme.fontFamily.secondary};
    font-weight: ${p => p.theme.fontWeights.boldest};

    @media (min-width: 768px) {
        font-size: ${p => p.theme.fontSizes.h5};
        line-height: ${p => p.theme.lineHeights.h5};
    }
`

export const Title = styled.p`
    font-size: ${p => p.theme.fontSizes.h5};
    line-height: ${p => p.theme.lineHeights.h5};
    font-weight: ${p => p.theme.fontWeights.bold};
    margin-bottom: 10px;
`

export const Author = styled.div`
    display: flex;
    gap: 12px;
`

export const AuthorName = styled.p`

`

export const AuthorAvatar = styled.img`
    width: 24px;
    height: 24px;
    border-radius: ${p => p.theme.radii.round};
`

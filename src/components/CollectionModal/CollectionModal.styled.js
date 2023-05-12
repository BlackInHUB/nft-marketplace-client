import styled from "styled-components";

export const ModalBackdrop = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
`

export const ModalContainer = styled.div`
    position: absolute;
    top: 50%;
    right: 50%;
    width: calc(100vw - 60px);
    height: 70%;
    overflow: auto;
    border: ${p => p.theme.borders.main} ${p => p.theme.colors.main};
    border-radius: ${p => p.theme.radii.normal};
    background-color: ${p => p.theme.colors.secondary};
    padding: 40px;
    opacity: ${p => p.show ? '1' : 0};
    transform: ${p => p.show ? 'translate(50%, -50%) scale(1)' : 'translate(50%, -50%) scale(0)'};
    transition: all 500ms ease;

    @media (min-width: 768px) {
        width: calc(100vw - 144px);
        height: calc(841px * 0.66);
    }

    @media (min-width: 1280px) {
        width: 60%;
        height: calc(841px * 0.8);
    }
`

export const Form = styled.form`
    text-align: center;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`

export const TitleLabel = styled.label`
    font-size: ${p => p.theme.fontSizes.h5};
    line-height: ${p => p.theme.lineHeights.h5};
`

export const TitleInput = styled.input`
    display: inline-block;
    width: 100%;
    outline: none;
    font-size: ${p => p.theme.fontSizes.body};
    line-height: ${p => p.theme.lineHeights.body};
    padding: 10px 20px;
    border: ${p => p.theme.borders.main} ${p => p.theme.colors.caption};
    border-radius: ${p => p.theme.radii.normal};
    transition: all 150ms ease;
    margin-top: 10px;

    @media (min-width: 768px) {
        /* width: 300px; */
    }

    &::placeholder {
        font-family: ${p => p.theme.fontFamily.main};
        color: ${p => p.theme.colors.caption};
    };

    :hover,
    :focus-visible {
        border-color: ${p => p.theme.colors.accent};
    }
`

export const ListTitle = styled.p`
    margin-top: 20px;
`

export const FormList = styled.ul`
    width: 100%;
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 10px;
    margin-bottom: 30px;
    overflow: auto;
    background-color: ${p => p.theme.colors.main};
    padding: 20px;
    border-radius: ${p => p.theme.radii.normal};

    /* width */
    ::-webkit-scrollbar {
        width: 5px; 
    }

    /* Track */
    ::-webkit-scrollbar-track {
        border-radius: 10px;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
        background: ${p => p.theme.colors.accent};
        border-radius: 10px;
    }
`

export const FormListItem = styled.li`

`

export const ImgLabel = styled.label`
    position: relative;
    display: block;
    width: 150px;
    height: 200px;
    background: url(${p => p.bg});
    background-size: cover;
    background-position: center;
    border-radius: ${p => p.theme.radii.normal};
`

export const ImgInput = styled.input`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    bottom: 10px;
    right: 10px;
    appearance: none;
    width: 20px;
    height: 20px;
    background-color: ${p => p.theme.colors.caption};
    border: ${p => p.theme.borders.main} ${p => p.theme.colors.main};
    border-radius: 50%;
    transition: all 250ms ease;

    ::before {
        content: '';
        width: 12px;
        height: 12px;
        border-radius: 50%;
        background-color: ${p => p.theme.colors.main};
        transform: scale(0);
        transition: all 250ms ease;
    }

    :checked::before {
        transform: scale(1);
    }
`
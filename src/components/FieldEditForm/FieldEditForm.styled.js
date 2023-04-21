import styled from "styled-components";

export const Form = styled.form`
    width: 100%;
    display: flex;
    align-items: center;

`

export const FormInput = styled.input`
    font-family: ${p => p.theme.fontFamily.main};
    width: 100%;
    outline: none;
    font-size: ${p => p.theme.fontSizes.body};
    line-height: ${p => p.theme.lineHeights.body};
    padding: 6px 20px 6px 20px;
    border: ${p => p.theme.borders.main} ${p => p.theme.colors.caption};
    border-radius: ${p => p.theme.radii.normal};
    margin-right: 10px;
    transition: all 150ms ease;

    @media (min-width: 768px) {
        width: 500px;
        padding: 12px 20px 12px 20px;
    }

    &::placeholder {
        font-family: ${p => p.theme.fontFamily.main};
        color: ${p => p.theme.colors.main};
    };

    :focus-visible,
    :hover {
        border-color: ${p => p.theme.colors.accent};
    }
`

export const FormTextArea = styled.textarea`
    font-family: ${p => p.theme.fontFamily.main};
    resize: none;
    width: 100%;
    height: 100px;
    outline: none;
    font-size: ${p => p.theme.fontSizes.body};
    line-height: ${p => p.theme.lineHeights.body};
    padding: 12px;
    border: ${p => p.theme.borders.main} ${p => p.theme.colors.caption};
    border-radius: ${p => p.theme.radii.normal};
    margin-right: 10px;
    margin-top: 5px;
    transition: all 150ms ease;

    @media (min-width: 768px) {
        width: 500px;
    }

    :focus-visible,
    :hover {
        border-color: ${p => p.theme.colors.accent};
    }
`
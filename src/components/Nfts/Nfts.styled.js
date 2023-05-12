import styled from "styled-components";

export const NftsWrapper = styled.div`
    background-color: ${p => p.theme.colors.secondary};
    padding-top: 40px;
    padding-bottom: 40px;

    @media (min-width: 1280px) {
        padding-top: 60px;
        padding-bottom: 60px;
    }
`
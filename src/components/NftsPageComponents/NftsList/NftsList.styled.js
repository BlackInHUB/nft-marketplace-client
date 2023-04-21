import styled from "styled-components";

export const List = styled.ul`
    padding: 80px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;

    @media (min-width: 768px) {
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
    }

    @media (min-width: 1280px) {
        
    }
`
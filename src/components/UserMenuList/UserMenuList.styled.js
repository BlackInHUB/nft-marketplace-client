import styled from "styled-components";

export const List = styled.ul`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: start;
`

export const ListItem = styled.li`
    width: 100%;
    
    :not(:last-child) {
        margin-bottom: 10px;
    }
`
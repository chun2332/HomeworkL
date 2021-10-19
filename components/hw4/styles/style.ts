import styled from "styled-components";

export const Calendar = styled.table`
    margin: auto;
    width: 50%;

    th {
        color: #666;
        padding: 0.8rem 0.5rem;
        }

    td {
        height: 80px;
        outline: 1px #dad8d8 solid;
        -ms-flex-wrap: nowrap;
        flex-wrap: nowrap;
        cursor: pointer;
    }

    .no-style {
        outline: none;
        }
    
`
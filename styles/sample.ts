import styled from "styled-components";

export const Body = styled.div`
    @media screen and (max-width:900px) {
        overflow-x: scroll;
        overflow-y: visible;
        padding: 0;
        /* overflow: hidden; */
    }
`

export const Table = styled.table`
    width: 100%;
    height: 80vh;

    th, td {
        width: 12.5%;    
        outline: 1px solid #ccc;
    }

    th, .row-1 {
        background-color: #666;
    }

    .col-1 {
        background-color: red;
    }

    .col-2 {
        background-color: orange;
    }

    .col-3 {
        background-color: yellow;
    }

    .col-4 {
        background-color: green;
    }

    .col-5 {
        background-color: blue;
    }

    .col-6 {
        background-color: black;
    }

    .col-7 {
        background-color: purple;
    }

    @media screen and (max-width: 900px){
        /* table-layout: auto; */
        /* overflow: hidden; */
        width: 160%;
    }
    
`
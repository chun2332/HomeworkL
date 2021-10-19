import styled from "styled-components";

export const DateCard = styled.table`
    border-spacing: 0;
    border: 1px solid #ccc;
    color: #444444;
    width: 100%;
    /* margin: auto;    */
    text-align: center;

    .row1 > th {
        background-color: #f8f8f8;
    }

    .M-date {
        width: 100%;
    }
   
    .ticket-type {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
        position: relative
    }

    .ticket-coming, .ticket-back {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: horizontal;
        -webkit-box-direction: normal;
        -ms-flex-direction: rows;
        flex-direction: rows;
        -webkit-box-pack: end;
        -ms-flex-pack: end;
        justify-content: end;
    }

    .ticket-back {
        position: absolute;
        bottom: 0.6vh;
        right: 5px;
    }

    .ticket-coming {
        position: absolute;
        top: 5px;
        left: 3px;
    }

    .price {
        font-weight: 700;
    }

    th, td {
        height: 50px;
        border-top: 1px solid #ccc;
        border-right: 1px solid #ccc;
    }

    th {
        padding: 0;
        background-color: #eeecec;
    }



    /* 文字灰色 */
    .text-gray {
        color: #666;
    }

    /* 小字年份 */
    .year {
        margin-top: 10px;
        margin-left: 20px;
        color: #1c9b9e;
    }

    .remove-padding {
        margin-top: 15px;
    }

    /*  三角形 */
    .d-flex {
        margin-left: -2px;
        margin-top: -15px;
        display: flex;
    }
    .trangle {
        display: inline-block;
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 1.7rem 1.7rem 0 0;
        border-color: #fe8400 transparent;
    }
    .sale {
        color: #fe8400;
    }


    @media screen and (max-width: 760px) {
        overflow-x: scroll;
        overflow-y: visible;
        padding: 0;
    }
`
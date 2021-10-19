import styled from "styled-components";

export const Calendar = styled.table`
    border-spacing: 0;
    border: 1px #eeecec solid;
    width: 100%;
    text-align: center;
    /* table */
    th, td {
        width: 12.5%;
        text-align: center;
        height: 50px;
        outline: 1px #dad8d8 solid;
        -ms-flex-wrap: nowrap;
        flex-wrap: nowrap;
        }
    th {
        color: #3d3b3b;
        padding: 0.8rem 0.5rem;
        background-color: #eeecec;
        }

    /* 低價月曆 */
    .low-price-container {
        width: 100%;
        text-align: center;
    }
    .low-price {
        font-size: 1rem;
        text-align: right;
        background-color: #eeecec;
        color: #008cff;
        border-bottom: 2px solid white;
    }
    .row1 > th {
        background-color: #f8f8f8;
    }
    .Lowprice {
        width: 100%;
    }
   
    /* 回程 & 去程 */
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
    .ticket-back {
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
    .ticket-coming {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: horizontal;
        -webkit-box-direction: normal;
        -ms-flex-direction: rows;
        flex-direction: rows;
        -webkit-box-pack: start;
        -ms-flex-pack: start;
        justify-content: start;
    }
   

    /* 文字灰色 */
    .text-gray {
        font-weight: 900;
        color: #666;
    }

    /* 2018 */
    .year {
        margin-top: 10px;
        margin-left: 20px;
        color: #1c9b9e;
    }
    .remove-padding {
        margin-top: 15px;
    }

    /*  最便宜區塊 */
    .container-sale {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
        -webkit-box-pack: justify;
        -ms-flex-pack: justify;
        justify-content: space-between;
        padding-bottom: 1rem;
    }
    .container-sale-a {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
        -webkit-box-align: start;
        -ms-flex-align: start;
        align-items: flex-start;
        white-space: nowrap;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
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

    /*價格*/
    .days-up {
    white-space: nowrap;
    word-spacing: 3px;
    font-weight: 700;
    color: #3d3b3b;
    }
    .days-up::after {
    font-weight: 900;
    content: ' 起';
    font-size: 0.7rem;
    color: #666;
    }


    @media screen and (max-width: 760px) {
        table-layout: auto;
        overflow-x: scroll;
        overflow-y: visible;
        padding: 0;

        th, td {
            overflow: hidden;
        }

        .carousel-btn {
            height: 2.8rem;
            width: 1.3rem;
            background-color: #666;
            opacity: 0.5;
            position: absolute;
            z-index: 99;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-orient: horizontal;
            -webkit-box-direction: normal;
            -ms-flex-direction: row;
            flex-direction: row;
            text-align: center;
            -webkit-box-pack: center;
            -ms-flex-pack: center;
            justify-content: center;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
            color: white;
            font-weight: 900;
            cursor: pointer;
        }
        
         .first-col {
            position: -webkit-sticky;
            position: sticky;
            left: 0;
            top: auto;
            border-top-width: 1px;
            margin-top: -1px;
         }
    }
`
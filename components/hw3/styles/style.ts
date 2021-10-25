import styled from "styled-components";

export const Body = styled.div`
    @media (max-width: 900px) {
        overflow-x: scroll;
        overflow-y: visible;
        padding: 0;
    } 
`

export const Calendar = styled.table`
    border-spacing: 0;
    border: 1px #eeecec solid;
    width: 100%;

    .carousel-btn {
        display: none;
    }

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
    td {
        padding: 0;

        
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
        color: #24a07c;
    }
    .remove-padding {
       padding: 0 0.5rem;
    }
    .fix-padding {
        padding: 0.3rem 0.5rem;
    }
    .year-container {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
    }

    /*  最低價區塊 */
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

    /* 價格 */
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

    @media (max-width: 900px) {
        width: 200%;
        
        .carousel-btn {
            width: 100%;
            display: flex;
            justify-content: space-between;
            position: absolute;
            
        }

        .prev-btn {
            position: absolute;
            left: 25vw;
            top: 34.3vh;
            cursor: pointer;
            border: none;
        }

        .next-btn {
            position: absolute;
            right: 0;
            top: 34.3vh;
            cursor: pointer;
            border: none;
        }

        .next-btn, .prev-btn {
            color: #fff;
            background-color: #ababab;
            line-height: 40px;
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
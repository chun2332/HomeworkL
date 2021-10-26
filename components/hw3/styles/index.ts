import styled from "styled-components"

export const Body = styled.div`
  position: relative;
  margin-right: auto;
  margin-left: auto;
  font-size: 14px;
  color: #444;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;

  .carousel-btn {
      display: none;
    }
 
  @media (max-width: 900px) {
    .carousel-btn {
        display: block;
        width: 100%;
        display: flex;
        justify-content: space-between;
        position: absolute;
        z-index: 1000;
        cursor: pointer;  
    }

    .prev-btn {
        position: absolute;
        left: 7.2vw;
        top: 38.5vh;
        cursor: pointer;
        border: none;
        }

        .next-btn {
            position: absolute;
            right: 0;
            top: 38.5vh;
            cursor: pointer;
            border: none;
        }

        .next-btn, .prev-btn {
            color: #fff;
            background-color: #ababab;
            line-height: 40px;  
        }

  }
    
`

export const Table = styled.table`
  table-layout: fixed;
  color: #666;
  border-collapse: separate;
  border-spacing: 0;
  overflow: hidden;


  th {
    border: 1px solid #ccc;
  }

  .year {
        margin-top: 10px;
        margin-left: 20px;
        color: #24a07c;
    }
  
  .title2 {
  position: relative;
  border: #e1e2e4 solid 1px;
  background: #eaedf2;
  width: 80px;
  height: 40px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  padding: 5px;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  z-index: 1;
}

/* .title2 span:first-child {
  text-align: right;
} */

.title2 span:nth-child(2) {
  position: absolute;
  bottom: 5px;
}

/* tr {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
} */


  .date {
    /* position: relative; */
    border: #e1e2e4 solid 1px;
    background: #f1f1f1;
    width: 100px;
    line-height: 50px;
    z-index: 1;
  }

  .col {
    position: relative;
    border: 1px solid #e1e2e4;
    text-align: center;
    line-height: 50px;
    overflow: hidden;
  }

 
  .col.sN1 {
    width: 88vw;
  }

  .col.sN2 {
    width: 88vw;
  }

  .col.sN3 {
    width: 88vw;
  }

  .col.sN4 {
    width: 88vw;
  }

  .col.sN5 {
    width: 88vw;
  }

  .col.sN6 {
    width: 88vw;
  }

  .col.sN7 {
    width: 88vw;
  }

  .cheapest {
  position: absolute;
  height: 0;
  border-style: solid;
  border-width: 20px 20px 0 0;
  border-color: #fe8b88 transparent transparent transparent;
  top: 0px;
  left: -2px;
}

.cheapestw {
  position: absolute;
  color: #fe8b88;
  top: -10px;
  left: 20px;
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

    @media (max-width: 900px) {}

    
`
import styled from "styled-components";

export const Body = styled.div``;

export const CardHeader = styled.div`
  max-width: 1190px;
  margin: auto;
  border-radius: 3px;
  background-color: #3c3c3c;
  color: #fff;
  line-height: 50px;

  .w-165 {
    width: 165px;
  }
  .w-115 {
    width: 115px;
  }
  .w-110 {
    width: 110px;
  }
  .w-100 {
    width: 100px;
  }
  .w-80 {
    width: 80px;
  }
  .w-70 {
    width: 70px;
  }
  .w-60 {
    width: 60px;
  }

  @media screen and (max-width: 760px) {
    display: none;
  }
`;

export const Card = styled.div.attrs({
  className: "w-165 w-115 w-110 w-100 w-80 w-70 w-60",
})<{ status?: string }>`
  max-width: 1190px;
  margin: auto;
  border-bottom: 1px solid #ccc;
  text-align: center;
  :hover {
    border: ${(props) => (props.status === "取消訂單" ? "" : "1px solid #ccc")};
    border-radius: ${(props) => (props.status === "取消訂單" ? "" : "3px")};
    box-shadow: ${(props) =>
      props.status === "取消訂單"
        ? ""
        : "2px 2px 7px rgba(128, 125, 125, 0.7)"};
    box-shadow: ${(props) =>
      props.status === "取消訂單"
        ? ""
        : "-1px -1px 7px rgba(128, 125, 125, 0.7)"};
  }

  td .product {
    word-wrap: 140px;
    margin: auto;
  }
  td {
    color: ${(props) => (props.status === "取消訂單" ? "#ccc" : "")};
  }
  .colorB {
    color: ${(props) => (props.status === "取消訂單" ? "#ccc" : "#3ea5d9")};
  }

  .colorR {
    font-weight: bold;
    color: ${(props) => (props.status === "取消訂單" ? "#ccc" : "#f03742")};
  }

  a {
    border-bottom: ${(props) =>
      props.status === "取消訂單" ? "#ccc" : "1px dashed #000;"};
  }

  .w-165 {
    width: 165px;
    margin: auto;
    text-align: left;
  }
  .w-115 {
    width: 115px;
    margin: auto;
  }
  .w-110 {
    width: 110px;
    margin: auto;
  }
  .w-100 {
    width: 100px;
    margin: auto;
  }
  .w-80 {
    width: 80px;
    margin: auto;
  }
  .w-70 {
    width: 70px;
    margin: auto;
  }
  .w-60 {
    width: 60px;
    margin: auto;
  }

  .btn-WL {
    margin-bottom: 10px;
  }
  Button {
    visibility: ${(props) => (props.status === "取消訂單" ? "hidden" : "")};
  }
  @media only screen and (max-width: 760px),
    (min-device-width: 768px) and (max-device-width: 1024px) {
    margin-top: 20px;
    width: 360px;
    border: 1px solid #ccc;
    font-size: 16px;
    box-shadow: 2px 2px 7px rgba(128, 125, 125, 0.7);
    tbody {
      margin-top: 20px;
    }

    tbody > tr > .w-165,
    .w-115,
    .w-110,
    .w-100,
    .w-80,
    .w-70,
    .w-60 {
      width: 50%;
      text-align: left;
      color: black;
    }

    .colorR {
      color: #f03742;
    }

    tr {
      margin-left: 9%;
    }

    &:hover {
      box-shadow: 2px 2px 7px rgba(128, 125, 125, 0.7);
    }

    td {
    color: ${(props) => (props.status === "取消訂單" ? "#ccc" : "")};
  }
  a {
    border-bottom: ${(props) =>
      props.status === "取消訂單" ? "#ccc" : "1px dashed #000;"};
  }

    table,
    thead,
    tbody,
    th,
    td,
    tr {
      display: block;
      margin-top: 20px;
    }

    thead tr {
      position: absolute;
    }

    td {
      position: relative;
      font-weight: 350;
      margin-top: 5px;
    }

    td > .product {
      width: 210px;
    }

    .status {
      position: absolute;
      left: 120px;
      bottom: 0px;
    }

    .lion {
      width: 51px;
      position: absolute;
      bottom: 0px;
      left: 155px;
      border-bottom: 1px dashed black;
    }

    td:before {
      position: absolute;
      right: 100%;
      text-align: right;
      padding-right: 10px;
      white-space: nowrap;
      font-weight: 450;
    }

    td:nth-of-type(1):before {
      content: "訂單編號";
    }
    td:nth-of-type(2):before {
      content: "下單日期";
    }
    td:nth-of-type(3):before {
      content: "單別/來源";
    }
    td:nth-of-type(4):before {
      content: "同業業務";
    }
    td:nth-of-type(5):before {
      content: "出發日期";
    }
    td:nth-of-type(6):before {
      content: "產品名稱";
    }

    td:nth-of-type(7):before {
      content: "人數";
    }
    td:nth-of-type(8):before {
      content: "狀況";
      position: absolute;
      bottom: -3px;
      left: 78px;
    }
    td:nth-of-type(9):before {
      content: "證照進度";
    }
    td:nth-of-type(10):before {
      content: "雄獅業務";
      position: absolute;
      bottom: 0px;
      right: 11px;
    }
    td:nth-of-type(11):before {
      content: "行前資料";
    }
    td:nth-of-type(12):before {
      content: "總金額";
      color: black;
    }
    td:nth-of-type(13):before {
      content: "尚欠款";
      margin-right: -80px;
      color: #000;
    }

    Button {
      display: inline-block;
      margin-top: 20px;
      margin-bottom: 10px;
      width: 130px;
      font-size: 16px;
      line-height: 35px;
    }

    .btn {
      display: flex;
      margin-top: 20px;
      margin-left: -69px;
    }

    .btn-TT {
      margin-right: 5px;
    }

    .btn-WL {
      margin-left: 5px;
    }

    .d-flex {
      display: flex;
    }
  }
`;

export const Button = styled.button`
  width: 60px;
  background-color: #fff;
  border: 1px solid #f03742;
  border-radius: 5px;
  color: #f03742;
  text-align: center;
  line-height: 30px;
  margin: auto;
  margin-top: 10px;

  :disabled {
    color: #ccc;
    background-color: #fff;
    border: 1px solid #ccc;
    margin-top: 32px;
    margin-bottom: 32px;
  }
`


export default {};
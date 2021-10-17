import { CardHeader, Card, Button, Body } from "./styles/style";
import { v4 as uuidv4 } from 'uuid';
import Link from "next/link";
import Wlk from "./Ｗlk";
import Unwlk from "./Unwlk"

interface NameType {
  orderId: string;
  orderDate: string;
  source: string;
  source2?: string;
  accompany: string;
  goDate: string;
  product: string;
  totalPerson: string;
  status: string;
  schedule: string;
  lion: string;
  goData?: string;
  goData2: string;
  total: string;
  unpaid: Boolean;
  wlk: Boolean;
  unwlk: Boolean;
}

interface A_Name {
  props: Array<NameType>;
}

const Web: React.FC<A_Name> = ({ props }) => {

  // 此元件被呼叫時, 先印出props值
  console.log("input value = ", props);
  // 回傳元件
  return (
    <Body>
      <CardHeader>
        <thead>
          <tr>
            <th className="w-100">訂單編號</th>
            <th className="w-100">下單日期</th>
            <th className="w-100">單別/來源</th>
            <th className="w-60">同業業務</th>
            <th className="w-115">出發日期</th>
            <th className="w-165">產品名稱</th>
            <th className="w-60">人數</th>
            <th className="w-80">狀況</th>
            <th className="w-60">證照進度</th>
            <th className="w-70">雄獅業務</th>
            <th className="w-100">行前資料</th>
            <th className="w-70">總金額</th>
            <th className="w-110">尚欠款</th>
          </tr>
        </thead>
      </CardHeader>
      {
        // json format
        props.map((data) => {
          return (
              <Card status={data.status} key={uuidv4()} >
                <tbody>
                  <tr>
                    <td className="w-100 colorB">{data.orderId}</td>
                    <td className="w-100">{data.orderDate}</td>
                    <td className="w-100">
                      <div>{data.source}</div>
                      <Link href="/">
                        <a>{data.source2}</a>
                      </Link>
                    </td>
                    <td className="w-60">{data.accompany}</td>
                    <td className="w-115">{data.goDate}</td>
                    <td className="w-165 colorB">
                      <div className="product">{data.product}</div>
                    </td>
                    <td className="w-70">{data.totalPerson}</td>
                    <td className="w-80">
                      <Link href="/">
                        <a className="status">{data.status}</a>
                      </Link>
                    </td>
                    <td className="w-60">
                      <Link href="/">
                        <a>{data.schedule}</a>
                      </Link>
                    </td>
                    <td className="w-70">
                      <div className="lion">{data.lion}</div>
                    </td>
                    <td className="w-100">
                      <div className="d-flex">
                        <div className="colorB">{data.goData}</div>
                        <Link href="/">
                          <a>{data.goData2}</a>
                        </Link>
                      </div>
                    </td>
                    <td className="w-70 colorR">
                    {data.total }
                    {data.status !== "取消訂單" && ""
                    }
                    <div style={{fontSize:'9.8px'}}>
                    {data.wlk === true && <Wlk />}
                    {data.unwlk === true && <Unwlk />}
                    </div>
                    </td>
                    <td></td>
                    <td className="w-110">
                      {
                        // condition
                        data.unpaid === true ? (
                          // [IF] button style1
                          <div className="btn">
                            <div className="btn-TT">
                              <Button>T&T卡</Button>
                            </div>
                            <div className="btn-WL">
                              <Button>旺來卡</Button>
                            </div>
                          </div>
                        ) : (
                          // [ELSE] button style 2
                          <div className="btn-D">
                            <Button disabled={true}>已付清</Button>
                          </div>
                        )
                      }
                    </td>
                  </tr>
                </tbody>
              </Card>
          );
        })
      }
    </Body>
  );
};

export default Web;

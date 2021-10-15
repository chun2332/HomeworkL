import Web from "../components/hw2/Ｗeb";
// data
import sampledata from "../data";

function Hw2() {
  const { data } = sampledata; // 使用匯入的資料
  console.log("data", data);

  return (
    <div style={{ marginTop: "10px" }}>
      <Web props={data} />
    </div>
  );
}

export default Hw2;

import Index from "../components/hw2/Index";
// data
import sampledata from "../components/hw2/data";

function Hw2() {
  const { data } = sampledata; // 使用匯入的資料
  console.log("data", data);

  return (
    <div style={{ marginTop: "10px" }}>
      <Index props={data} />
    </div>
  );
}

export default Hw2;

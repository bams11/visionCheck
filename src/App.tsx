import {Dashboard} from "./component/Dashboard";
import {ProcessedImage} from "./component/ProcessedImage";
import {OriginImage} from "./component/OriginImage";
import {ImageInfo} from "./component/ImageInfo";
import hanmech from "./assets/hanmech.jpeg";
import {TiltedValue} from "./component/TiltedValue";
import {RecoilRoot} from "recoil";

function App() {
  return (
    <RecoilRoot>
      <div
        style={{
          display: "flex",
          flex: 1,
          backgroundColor: "grey",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div>
          <div
            style={{
              width: "400px",
              height: "100px",
              border: "2px solid black",
              display: "flex",
              justifyContent: "center",
              backgroundColor: "white",
            }}
          >
            <img
              src={hanmech}
              alt={"sampleInput"}
              style={{width: "100px", height: "100px"}}
            />
          </div>
          <OriginImage />
          <ImageInfo />
        </div>
        <div>
          <ProcessedImage />
          <div style={{display: "flex", flexDirection: "row"}}>
            <TiltedValue />
            <Dashboard />
          </div>
        </div>
      </div>
    </RecoilRoot>
  );
}

export default App;

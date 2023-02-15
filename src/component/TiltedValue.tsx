import {useRecoilValue} from "recoil";
import tiltedValue from "../assets/tilted_vector.jpeg";
import {selectedFileState} from "../recoil/state";
import {PanelBody, PanelTitle} from "../styles/themes";

export const TiltedValue = () => {
  const originFile = useRecoilValue<File | null>(selectedFileState);
  const sampleTiltedValue = "(0.173, 0.0419, -0.984)";

  return (
    <PanelBody>
      <PanelTitle>Tilted</PanelTitle>
      <div style={{width: "100%", display: "flex", justifyContent: "center"}}>
        {originFile ? (
          <img
            src={tiltedValue}
            alt={"sampleInput"}
            style={{width: "200px", height: "120px"}}
          />
        ) : (
          <div style={{width: "200px", height: "120px"}} />
        )}
      </div>
      <div
        style={{
          width: "100%",
          fontSize: "14px",
          marginTop: "10px",
          marginBottom: "10px",
          textAlign: "right",
        }}
      >
        {originFile ? "NORMAL VECTOR: " + sampleTiltedValue : ""}
      </div>
    </PanelBody>
  );
};

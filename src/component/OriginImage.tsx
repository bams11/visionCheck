import {useRef} from "react";
import {useRecoilState} from "recoil";
import {selectedFileState} from "../recoil/state";
import {OriginImageBody} from "../styles/themes";

export const OriginImage = () => {
  const fileInput = useRef<HTMLInputElement>(null);
  const [originFile, setOriginFile] = useRecoilState<File | null>(
    selectedFileState
  );
  const handleButtonClick = (e: any) => {
    if (fileInput.current !== null) {
      fileInput.current.click();
    }
  };

  const handleChange = (e: any) => {
    setOriginFile(e.target.files[0]);
  };

  return (
    <OriginImageBody>
      {originFile ? (
        <img
          src={URL.createObjectURL(originFile)}
          alt={"sampleInput"}
          style={{width: "400px", height: "300px"}}
        />
      ) : (
        <div
          style={{
            width: "400px",
            height: "300px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "lightgrey",
          }}
        >
          검사할 이미지를 업로드해주세요.
        </div>
      )}
      <div>
        <button onClick={handleButtonClick}>파일 업로드</button>
        <input
          type="file"
          ref={fileInput}
          onChange={handleChange}
          style={{display: "none"}}
        ></input>
      </div>
    </OriginImageBody>
  );
};

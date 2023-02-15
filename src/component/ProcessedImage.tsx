import {useEffect, useState} from "react";
import {useRecoilValue} from "recoil";
import samepleOutput from "../assets/Picture1.png";
import {selectedFileState} from "../recoil/state";
import {PanelTitle, ProcessedImageBody} from "../styles/themes";

export const ProcessedImage = () => {
  const originFile = useRecoilValue<File | null>(selectedFileState);
  const [processedImg, setProcessedImg] = useState<string>();

  useEffect(() => {
    const findTarget = (inputFile: File | null) => {
      /* To-do
       * By using Tensor-Flow
       * 1. make image processing logic
       * 2. pattern matching or contour finding logic
       *
       * or using Python server
       * 1. make Promise function to get processed image
       */
      let response = "";
      if (inputFile) {
        response = URL.createObjectURL(inputFile);
      }
      // just for testing -> will be deleted
      response = samepleOutput;

      return response;
    };

    const result = findTarget(originFile);
    setProcessedImg(result);
  }, [setProcessedImg, originFile]);

  return (
    <ProcessedImageBody>
      <PanelTitle>Result</PanelTitle>
      {originFile ? (
        <img
          src={processedImg}
          alt={"test"}
          style={{width: "550px", height: "350px", marginBottom: "50px"}}
        />
      ) : (
        <div
          style={{
            width: "550px",
            height: "350px",
            marginBottom: "50px",
            backgroundColor: "grey",
          }}
        />
      )}
    </ProcessedImageBody>
  );
};

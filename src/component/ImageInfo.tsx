import {useEffect, useState} from "react";
import {useRecoilValue} from "recoil";
import {selectedFileState} from "../recoil/state";
import {ImageInfoBody, PanelTitle} from "../styles/themes";

export const ImageInfo = () => {
  const originFile = useRecoilValue<File | null>(selectedFileState);
  const [fileContent, setFileContent] = useState<{
    name: string;
    size: number;
    type: string;
  }>({
    name: "please upload image file",
    size: 0,
    type: "please upload image file",
  });
  useEffect(() => {
    if (originFile) {
      const {name, size, type}: {name: string; size: number; type: string} =
        originFile as File;
      setFileContent({name, size, type});
    }
  }, [originFile]);
  return (
    <ImageInfoBody>
      <PanelTitle>Image Info</PanelTitle>
      Image: {fileContent.name}
      <br />
      Size : {fileContent.size}
      <br />
      Type : {fileContent.type}
    </ImageInfoBody>
  );
};

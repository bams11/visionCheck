import {useEffect, useState} from "react";
import {useRecoilValue} from "recoil";
import {selectedFileState} from "../recoil/state";
import {PanelBody, PanelTitle} from "../styles/themes";

export const Dashboard = () => {
  const originFile = useRecoilValue<File | null>(selectedFileState);
  interface CoorObject {
    x: number;
    y: number;
    z: number;
  }
  const [coorList, setCoorList] = useState<CoorObject[]>([]);

  useEffect(() => {
    const sampleCoorList: CoorObject[] = [
      {x: -143.98914, y: 31.087973, z: 990.2156},
      {x: -143.39475, y: 11.128023, z: 991.0394},
      {x: -104.69457, y: 31.216045, z: 997.1313},
      {x: -104.45871, y: 10.435298, z: 996.2874},
    ];
    if (originFile) {
      setCoorList(sampleCoorList);
    }
  }, [originFile, setCoorList]);
  return (
    <PanelBody>
      <PanelTitle>Coordinate</PanelTitle>
      {coorList.map((coor: CoorObject, index) => {
        return (
          <div
            key={index}
            style={{fontSize: 18, lineHeight: "30px", textAlign: "center"}}
          >
            Hole{index + 1} : (x: {coor.x}, y: {coor.y}, z: {coor.z})
          </div>
        );
      })}
    </PanelBody>
  );
};

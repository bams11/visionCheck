import {atom} from "recoil";

export const selectedFileState = atom<File | null>({
  key: "selectedFileState",
  default: null,
});

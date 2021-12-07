import { ChangeEvent, ChangeEventHandler } from "react";

interface returnValue {
  file: File;
  preview: string;
}

export const getFileData = (
  event: ChangeEvent<HTMLInputElement>
): Promise<returnValue> =>
  new Promise((resolve) => {
    const target = event.target;
    const reader = new FileReader();
    const file = target.files[0];
    reader.onloadend = () => {
      resolve({
        file: file,
        preview: reader.result.toString(),
      });
    };
    file && reader.readAsDataURL(file);
  });

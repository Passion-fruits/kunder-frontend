interface returnValue {
  file: File;
  preview: string;
}

export const getFileData = (event: Event): Promise<returnValue> =>
  new Promise((resolve) => {
    const target = event.target as HTMLInputElement;
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

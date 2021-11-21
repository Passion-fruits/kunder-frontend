export const textareaResizing = (element_id: string) => {
  const textarea = document.getElementById(element_id);
  textarea
    ? (textarea.style.height = textarea.scrollHeight.toString() + "px")
    : {};
};

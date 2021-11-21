export const IsScreenBottom = (): boolean => {
  const scrollHeight = Math.max(
    document.documentElement.scrollHeight,
    document.body.scrollHeight
  );
  const scrollTop = Math.max(
    document.documentElement.scrollTop,
    document.body.scrollTop
  );
  const clientHeight = document.documentElement.clientHeight;
  if (scrollTop + clientHeight == scrollHeight) {
    return true;
  } else {
    return false;
  }
};

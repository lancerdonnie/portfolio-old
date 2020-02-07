const rand = (windowHeight, windowWidth) => {
  const hei = Math.floor(Math.random() * (windowHeight - 60));
  const wid = Math.floor(Math.random() * (windowWidth - 60));
  return {
    hei,
    wid
  };
};
export default rand;

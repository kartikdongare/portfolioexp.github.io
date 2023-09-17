
// eslint-disable-next-line react/prop-types
const ThemeItem = ({ color, img, changeColor }) => {
  return (
    <img src={img} className="theme__img" onClick={() => changeColor(color)} />
  );
};

export default ThemeItem;


import Color from "./Color";

function Colors({ colors }) {
  return (
    <ul>
        {colors.map((color) => {
        return <Color key={color.id} id={color.id} name={color.name} />;
      })}
    </ul>
  );
}

export default Colors;

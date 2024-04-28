import "./styles/checkbox.css";

type fcn = {
  onChange: () => void;
 
};
export default function Chexkbox(props: fcn) {
  const handleChange = () => {
    setTimeout(props.onChange, 400);
  };
  return (
    <label className="custom-checkbox">
      <input name="dummy" onChange={handleChange} type="checkbox" />
      <span className="checkmark"></span>
    </label>
  );
}
export type {fcn};
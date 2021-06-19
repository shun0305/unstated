import React from "react";
import propsContainer from "./props-container";

const Form: React.FC = () => {
  const { props, updateProps } = propsContainer.useContainer();

  const [input, setInput] = React.useState("");

  const update = () => updateProps(input);

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) =>
    setInput(e.target.value);

  return (
    <div>
      <input type="text" value={input} onChange={onChangeInput} />
      <button onClick={update}>update</button>
      <h1>{props}</h1>
    </div>
  );
};

export default Form;

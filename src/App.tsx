import React from "react";
import propsContainer from "./props-container";

import Form from "./Form";

const App: React.FC = () => {
  return (
    <propsContainer.Provider initialState={"タイポ"}>
      <Form />
    </propsContainer.Provider>
  );
};

export default App;

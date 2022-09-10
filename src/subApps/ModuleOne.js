import React from "react";

const ModuleOne = (props) => {
  return (
    <h4>
      Rendered content is from Module One. Global theme set by container is{" "}
      {props.globalContext.misc.theme}
    </h4>
  );
};

export default ModuleOne;

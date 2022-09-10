import React from "react";

const ModuleTwo = (props) => {
  return (
    <h4>
      Rendered content is from Module Two. Global Font Size set by container is{" "}
      {props.globalContext.misc.fontSize}
    </h4>
  );
};

export default ModuleTwo;

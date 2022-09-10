import React, { Suspense } from "react";

const MountModules = (props) => {
  const ModuleOneInstance = React.lazy(() =>
    import(`../${props.MFData.module1.url}`)
  );
  const ModuleTwoInstance = React.lazy(() =>
    import(`../${props.MFData.module2.url}`)
  );

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ModuleOneInstance
        globalContext={props.globalContext}
      ></ModuleOneInstance>
      <ModuleTwoInstance
        globalContext={props.globalContext}
      ></ModuleTwoInstance>
    </Suspense>
  );
};

export default MountModules;

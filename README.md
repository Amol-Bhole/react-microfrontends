# React-Microfrontends

## Dummy implementation to show capabilities of microfrontends architecture using Reacts Lazy loading.

Seed Taken from create-react-app

### src/subApps

Created dummy suba apps. Please consider as independently bootstraped app instances for the demo.
src/subApps/ModuleOne
src/subApps/ModuleTwo

### src/components/MountModules

Component to take the metadata of micro apps as input and mount each sub app one by one with code splitting approach of React using React.lazy and React.Suspense

### src/utils

    getter functions to return globalContainerContext and MetaData of microfrontends Architecture.
    globalContext.js
    microFrontendsModulesMetaData.js

### src/App.js

    Imported globalContainerContext and microFrontendsModulesMetaData from Utils and rendered the subApps using MountModules component.

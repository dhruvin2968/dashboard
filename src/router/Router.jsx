import React from 'react';
import { useRoutes } from 'react-router-dom';

const Router = ({allRoutes}) => {// It takes a prop called `allRoutes`, 
                                 //which is an array of route definitions.

    const routes = useRoutes([...allRoutes])
    return routes;
     // The component returns the generated routes.
    // These routes will be rendered wherever this `Router` component is used.
};

export default Router;



// useRoutes Hook:
// The useRoutes hook is provided by libraries like React Router. It takes an array of route definitions (e.g., path and component mappings) and returns route elements that React can render.

// Spread Operator [...allRoutes]:
// The spread operator ensures that the allRoutes array is passed as individual elements to useRoutes, making a shallow copy of the array.

// Return Value:
// The routes returned from useRoutes are directly rendered by this component, so it acts as a wrapper around the route definitions provided to it.

// This component serves as a simple abstraction to render routes dynamically based on the allRoutes passed as a prop.







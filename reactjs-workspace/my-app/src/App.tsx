import React, { Suspense, useReducer, useState } from "react";

const RiverInformation = React.lazy(() => import("./component/RiverInformation/RiverInformation"));

export const App: React.FC = () => {
  const [river, setRiver] = useState("nile");
  const [show, toggle] = useReducer(state => !state, true);

  return (
    <React.Fragment>
      <h1>World's Longest Rivers</h1>
      <div>
        <button onClick={toggle}>Toggle Details</button>
      </div>
      <button onClick={() => setRiver('nile')}>Nile</button>
      <button onClick={() => setRiver('amazon')}>Amazon</button>
      <button onClick={() => setRiver('yangtze')}>Yangtze</button>
      <button onClick={() => setRiver('mississippi')}>Mississippi</button>
      <Suspense fallback={<div>Loading...</div>} >
        {show && <RiverInformation name={river} />}
      </Suspense>
    </React.Fragment>
  );
}

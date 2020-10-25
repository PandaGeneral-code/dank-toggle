import React from "react";

import useAppHooks from "../../AppHooks";

const StoreTester = () => {
  const { state, test } = useAppHooks();

  const handleTestClick = () => {
    test();
  };

  return (
    <div>
      <pre>{JSON.stringify({ state }, null, 2)}</pre>
      <button onClick={handleTestClick}>TEST</button>
    </div>
  );
};

export default StoreTester;

import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import { TEST } from "./state/app";

const useAppHooks = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.app);

  return {
    state,
    test: useCallback(() => dispatch({ type: TEST }), [dispatch]),
  };
};

export default useAppHooks;

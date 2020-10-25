import React, { useState } from "react";

import Wrapper, { Slider, ToggleLabel } from "./styled";

const DankToggle = () => {
  const [toggled, setToggled] = useState(false);

  return (
    <Wrapper>
      <ToggleLabel toggled={toggled}>
        <input
          onChange={(e) => setToggled(() => e.target.checked)}
          type="checkbox"
          value={toggled}
        />
        <Slider toggled={toggled} />
      </ToggleLabel>
    </Wrapper>
  );
};

export default DankToggle;

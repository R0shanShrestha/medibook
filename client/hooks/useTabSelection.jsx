import React, { useState } from "react";

const useTabSelection = () => {
  const [tab, setTab] = useState("");
  const tabHandler = (seltab) => {
    setTab(seltab);
  };

  return tab;
};

export default useTabSelection;

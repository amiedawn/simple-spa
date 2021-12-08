//conditional rendering example uses UserA and UserB components also

import React from "react";
import UserA from "./UserA";
import UserB from "./UserB";

const components = {
  usera: UserA,
  userb: UserB,
};

function DynamicComp(props) {
  const SelectUser = components[props.user];
  return <SelectUser />;
};

export default DynamicComp;

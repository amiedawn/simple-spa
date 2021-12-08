//conditional rendering example uses AboutUs and HomeComp components also

import React from "react";
import AboutUs from "./AboutUs";
import HomeComp from "./HomeComp";

const components = {
  aboutus: AboutUs,
  homecomp: HomeComp,
};

function MainComp(props) {
  const SelectPage = components[props.page];
  return <SelectPage />;
}

export default MainComp;

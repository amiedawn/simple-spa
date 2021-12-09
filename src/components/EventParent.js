// goes with EventChild to show child to parent prop sharing events

import Child from "./Child";

function Parent() {
  const childToParent = () => {
    alert("This is an alert from the Child Component");
  };
  return (
    <div>
      <div>
        <Child childToParent={childToParent} />
      </div>
    </div>
  );
}

export default Parent;

import React, { PropsWithChildren } from "react";

function Container({ children }: PropsWithChildren) {
  
  return (
    <div  className="grid grid-cols-[minmax(2rem,1fr)_minmax(min-content,75rem)_minmax(2rem,1fr)] min-h-fit">
      <div  className="col-start-2 col-end-3">{children}</div>
    </div>
  );
}

export default Container;
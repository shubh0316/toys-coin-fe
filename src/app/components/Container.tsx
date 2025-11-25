import React, { PropsWithChildren } from "react";

function Container({ children }: PropsWithChildren) {
  
  return (
    <div  className="grid grid-cols-[minmax(1rem,1fr)_minmax(min-content,75rem)_minmax(1rem,1fr)] md:grid-cols-[minmax(2rem,1fr)_minmax(min-content,76rem)_minmax(2rem,1fr)] lg:grid-cols-[minmax(4rem,1fr)_minmax(min-content,90rem)_minmax(4rem,1fr)] xl:grid-cols-[minmax(6rem,1fr)_minmax(min-content,100rem)_minmax(6rem,1fr)] min-h-fit">
      <div  className="col-start-2 col-end-3">{children}</div>
    </div>
  );
}

export default Container;
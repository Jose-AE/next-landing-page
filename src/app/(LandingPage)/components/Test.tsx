import React from "react";

export default function Test({ id }: { id: string }) {
  return (
    <div className=" w-full h-[1000px] bg-gray-400" id={id}>
      {id}
    </div>
  );
}

import React from "react";
import { instructorProps } from "./propstypes";

function Instructor(props: instructorProps) {
  return (
    <div>
      {props.instructorInfo.firstName} {props.instructorInfo.lastName}
    </div>
  );
}

export default Instructor;

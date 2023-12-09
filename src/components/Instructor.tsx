import React from "react";

type instructorProps = {
  instructorInfo: {
    firstName: string;
    lastName: string;
  };
};
function Instructor(props: instructorProps) {
  return (
    <div>
      {props.instructorInfo.firstName} {props.instructorInfo.lastName}
    </div>
  );
}

export default Instructor;

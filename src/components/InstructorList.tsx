import React from "react";

type instructorListType = {
  instructorList: {
    firstName: string;
    lastName: string;
  }[];
};

function InstructorList(props: instructorListType) {
  return (
    <div>
      {props.instructorList.map((item, index) => {
        return (
          <p key={index}>
            {item.firstName} {item.lastName}
          </p>
        );
      })}
    </div>
  );
}

export default InstructorList;

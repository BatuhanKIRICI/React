import React from "react";

type RequestProps = {
  status: "loading" | "success" | "error";
};

function Request(props: RequestProps) {
  let message = "";

  if (props.status === "loading") {
    message = "Loading...";
  } else if (props.status === "success") {
    message = "Success...";
  } else if (props.status === "error") {
    message = "Error...";
  }

  return <div>{message}</div>;
}

export default Request;

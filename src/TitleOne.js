import { useState } from "react";
import useTitle from "./useTitle";

function TitleOne() {
  const [num, setNum] = useState(0);

  //   useEffect(() => {
  //     document.title = `Number ${num}`;
  //   }, [num]);

  useTitle(num);

  return (
    <div>
      <button onClick={() => setNum((p) => p + 1)}>Number - {num}</button>
    </div>
  );
}

export default TitleOne;

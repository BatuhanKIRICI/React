import ImageItem from "./ImageItem";

function ImageList({ picture }) {
  return (
    <div style={{ columns: "300px 4", columnGap: "10px" }}>
      {picture.map((item, index) => {
        return <ImageItem key={index} photo={item} />;
      })}
    </div>
  );
}

export default ImageList;

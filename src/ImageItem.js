function ImageItem({ photo }) {
  return (
    <div>
      <img
        style={{ width: "100%", marginBottom: "10px" }}
        src={photo.urls.small}
        alt=""
      />
    </div>
  );
}

export default ImageItem;

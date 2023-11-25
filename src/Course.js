function Course({ title, description, image }) {
  return (
    <div>
      <div style={{ marginTop: "-10px" }} className="card">
        <div className="card-image">
          <figure style={{ height: "150px" }} className="image is-4by3">
            <img src={image} alt="" />
          </figure>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <p className="title is-4">{title}</p>
            </div>
          </div>
          <div className="content" style={{ marginTop: "-10px" }}>
            {description}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Course;

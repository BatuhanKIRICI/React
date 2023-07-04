function ProfileCard(props) {
  const { title, handle, image, description } = props;

  return (
    <div className="card">
      <div className="card-image">
        <figure className="image is-1by1">
          <img src={image} alt="Logos of pda" />
        </figure>
      </div>
      <div className="card-content">
        <div className="media-content" style={{ textAlign: "center" }}>
          <p className="title is-4">{title}</p>
          <p className="subtitle is-6">{handle}</p>
        </div>
        <div className="content" style={{ padding: "20px" }}>
          {description}
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;

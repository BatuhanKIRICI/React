function Course({ id, title, content, price, removeOneCourse }) {
  const handleDelete = () => {
    removeOneCourse(id);
  };

  return (
    <div className="card">
      <div className="cardTitlePrice">
        <h2 className="cardTitle">{title}</h2>
        <h4 className="cardPrice">{price}</h4>
      </div>
      <p>{content}</p>
      <button className="cardDeleteBtn" onClick={handleDelete}>
        Sil
      </button>
    </div>
  );
}

export default Course;

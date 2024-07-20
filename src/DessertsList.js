function DessertsList(props) {
  const filteredDesserts = props.data.filter(
    (dessert) => dessert.calories <= 500
  );

  const sortedDesserts = filteredDesserts.sort(
    (a, b) => a.calories - b.calories
  );

  const dessertItems = sortedDesserts.map((dessert) => (
    <li key={dessert.name}>
      {dessert.name} - {dessert.calories} cal
    </li>
  ));

  return <ul>{dessertItems}</ul>;
}

export default DessertsList;

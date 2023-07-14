import Card from "./Card";

function CreateCard(contact) {
  return (
    <div>
      <Card
        id={contact.id}
        key={contact.id}
        name={contact.name}
        img={contact.imgURL}
        tel={contact.tel}
        email={contact.email}
      />
    </div>
  );
}

export default CreateCard;

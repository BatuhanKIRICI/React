import useInput from "./useInput";

function PersonalInfo() {
  //   const [firstName, setFirstName] = useState("");
  //   const [lastName, setLastName] = useState("");

  const [firstName, resetFirstName, bindFirstName] = useInput("");
  const [lastName, resetLastName, bindLastName] = useInput("");

  const submitForm = (e) => {
    e.preventDefault();
    alert(`Hello ${firstName} ${lastName}`);
    resetFirstName();
    resetLastName();
  };

  return (
    <div>
      <form onSubmit={submitForm}>
        <div>
          <label>Name: </label>
          <input {...bindFirstName} />
        </div>
        <div>
          <label>Lastname: </label>
          <input {...bindLastName} />
        </div>
        <button>Save</button>
      </form>
    </div>
  );
}

export default PersonalInfo;

import "./App.css";
import { useState } from "react";

export default function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState({ value: "", isTouched: false });
  const [role, setRole] = useState("individual");

  const isPasswordValid = password.value.length >= 8;
  const shouldShowPasswordError = !isPasswordValid && password.isTouched;

  const validateEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const getIsFormValid = () => {
    return (
      firstName !== "" &&
      validateEmail(email) &&
      isPasswordValid &&
      (role === "individual" || role === "business")
    );
  };

  const clearForm = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword({ value: "", isTouched: false });
    setRole("individual");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (getIsFormValid()) {
      console.log("Form submitted successfully");
      clearForm();
    } else {
      console.log("Form is not valid");
    }
  };

  return (
    <div className="App">
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>First Name:</label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div>
          <label>Last Name:</label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password.value}
            onChange={(e) =>
              setPassword({ value: e.target.value, isTouched: true })
            }
          />
          {shouldShowPasswordError && <PasswordErrorMessage />}
        </div>
        <div>
          <label>Role:</label>
          <select value={role} onChange={(e) => setRole(e.target.value)}>
            <option value="individual">Individual</option>
            <option value="business">Business</option>
          </select>
        </div>
        <div>
          <button type="submit" disabled={!getIsFormValid()}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

function PasswordErrorMessage() {
  return <p className="error">Password must be at least 8 characters long.</p>;
}

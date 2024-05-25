// Szczegóły użytkownika: Po kliknięciu na wybranego użytkownika, użytkownik zostanie przekierowany 
//do strony ze szczegółowymi informacjami o tym użytkowniku, takimi jak imię, nazwisko, 
//adres e-mail, numer telefonu, itp.
import React, { useState } from "react";
import { useParams } from "react-router";
import Navigation from "../Navigation/Navigation";

type User = {
  firstName: string;
  lastName: string;
  email: string;
  telephone: string; // Changed to string for consistency with input type
};

const UserDetails = () => {
  const { userID } = useParams();
  const [user, setUser] = useState<User>({
    firstName: "",
    lastName: "",
    email: "",
    telephone: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await fetch(`https://dummyjson.com/${userID}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
      });
    } catch (error) {
      console.error('Error submitting the form:', error);
    }
  };

  return (
    <div>
      <Navigation />
      <h1>User Details</h1>
      <div className="user-details">
        <form onSubmit={handleSubmit}>
          <label htmlFor="first-name">
            First Name:
            <input
              type="text"
              id="first-name"
              value={user.firstName}
              name="firstName"
              onChange={handleChange}
            />
          </label>
          <label htmlFor="last-name">
            Last Name:
            <input
              type="text"
              id="last-name"
              value={user.lastName}
              name="lastName"
              onChange={handleChange}
            />
          </label>
          <label htmlFor="email">
            Email:
            <input
              type="text"
              id="email"
              value={user.email}
              name="email"
              onChange={handleChange}
            />
          </label>
          <label htmlFor="telephone">
            Phone number:
            <input
              type="text"
              id="telephone"
              value={user.telephone}
              name="telephone"
              onChange={handleChange}
            />
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default UserDetails;
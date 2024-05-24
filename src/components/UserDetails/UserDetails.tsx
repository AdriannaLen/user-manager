// Szczegóły użytkownika: Po kliknięciu na wybranego użytkownika, użytkownik zostanie przekierowany 
//do strony ze szczegółowymi informacjami o tym użytkowniku, takimi jak imię, nazwisko, 
//adres e-mail, numer telefonu, itp.

import Navigation from "../Navigation/Navigation";
const UserDetails = () => {
  return (
    <div>
   
   <Navigation />
      <h1>User Details</h1>
    
      <div className="user-details">
      <form>
        <label htmlFor="first-name">
        First Name:
            <input
              type="text"
              id="first-name"
              value=""
              name="first-name"
            />
        </label>
        <label htmlFor="first-name">
        Last Name:
            <input
              type="text"
              id="last-name"
              value=""
              name="last-name"
            />
        </label>
        <label htmlFor="email">
        Email:
            <input
              type="text"
              id="email"
              value=""
              name="email"
            />
        </label>
        <label htmlFor="email">
        Phone number:
            <input
              type="text"
              id="telephone"
              value=""
              name="telephone"
            />
        </label>
      </form>
      </div>

    </div>
  );
}

export default UserDetails;
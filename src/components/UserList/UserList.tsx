import Navigation from "../Navigation/Navigation";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

// interface User {
//     id: number,
//     firstName: string,
//     lastName: string;
// }

const UserList = () => {

    const [users, setUsers] = useState("");

    const fetchUserList = async () => {

        try {
            const response = await fetch ('https://dummyjson.com/users');

            if (!response.ok) throw new Error("Something goes wrong!");

            const users = await response.json();

            setUsers(users);
         
        }

         catch (error) {
            console.error("Error fetching users:", error);
          }
    }

    useEffect(() => {
        fetchUserList();
      }, []);

    return (

        <div>
            
      <Navigation />
            <h1>User List</h1>
            <ul className="users">
                {users.map((user) => (
                    <li key={user.id}>
                        <Link to={`/user-details/${user.id}`}>{user.firstName} {user.lastName}</Link>
                    </li>
                ))}

                </ul>
     
        </div>
    );
}

export default UserList;
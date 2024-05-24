import Navigation from "../Navigation/Navigation";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

// Define the User interface
interface User {
    id: number;
    firstName: string;
    lastName: string;
}

const UserList = () => {
    // Initialize users with an empty array of type User
    const [users, setUsers] = useState<User[]>([]);

    const fetchUserList = async () => {
        try {
            const response = await fetch('https://dummyjson.com/users');

            if (!response.ok) throw new Error("Something goes wrong!");

            const data = await response.json();

            setUsers(data.users); // Update this line to set the correct part of the response
        } catch (error) {
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
                        <Link to={`/userDetails/${user.id}`}>{user.firstName} {user.lastName}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default UserList;
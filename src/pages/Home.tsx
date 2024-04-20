import { useEffect } from "react";
import UserResults from "../components/users/UserResults";

const Home = () => {
    const fetchUsers = async () => {
        const response = await fetch(`${process.env.REACT_APP_GITHUB_URL}/users`);
        const data = await response.json();
        console.log(data);
    }
    useEffect(() => {
        fetchUsers();
    }, []);

    return (
        <div>
            <UserResults />
        </div>
    );
}
export default Home;
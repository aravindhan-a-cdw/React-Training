import "./App.css";
import "./components/MenuItem";
import SearchBar from "./components/SearchBar";
import MenuItem from "./components/MenuItem";
import UserCard from "./components/UserCard";
import { useState } from "react";
import users from "./data/users.json";

function App() {
	const [selectedMenu, setSelectedMenu] = useState(1);
	const [selectedCard, setSelectedCard] = useState(1);
	const USER_TYPES = [
		"Reputation",
		"New users",
		"Voters",
		"Editors",
		"Moderators",
	];

	return (
		<div className="holder">
			{/* This is the container to show the user list component */}
			<div className="users-page">
				{/* This is main container of the users list which consists of header and list of users */}
				<h1>Users</h1>
				<div className="list-header">
					{/* This container contains the search bar and menu items */}
					<SearchBar></SearchBar>
					<div className="menu-container">
						{USER_TYPES.map((type, index) => (
							<MenuItem
								key={index}
								selected={index == selectedMenu}
								onSelect={() => setSelectedMenu(index)}
							>
								{type}
							</MenuItem>
						))}
					</div>
				</div>
				<div className="users-container">
					{/* This container contains list of users */}
					{users.map((user) => (
						<UserCard
							key={user.id}
							data={user}
							onClick={() => setSelectedCard(user.id)}
							selected={user.id == selectedCard}
						></UserCard>
					))}
				</div>
			</div>
		</div>
	);
}

export default App;

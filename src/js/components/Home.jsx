import React from "react";
import TodoList from "./todolist";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className="container">
			<div className="row">
				<div className="list col-sm-6 justify-content-center mx-auto">
					<div className="d-flex justify-content-center pt-2">
						<h1>TODO LIST</h1>
					</div>
					<TodoList />
				</div>
			</div>


		</div>
	);
};

export default Home;
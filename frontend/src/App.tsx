import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import { Route, Routes } from "react-router-dom";
import Home from "./Home";

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<Routes>
				<Route path="/" element={<Home />} />
			</Routes>
		</>
	);
}

export default App;

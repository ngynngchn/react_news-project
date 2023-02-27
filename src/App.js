// style import
import "./App.css";

// comoponent import
import Header from "./components/header/Header";
import Content from "./components/content/Content";
import Footer from "./components/footer/Footer";

//librarys import
import { useState, useEffect } from "react";

function App() {
	const [searchTerm, setSearchTerm] = useState("Mensch");
	const [language, setLanguage] = useState("de");

	const handleLangEvent = (e) => {
		setLanguage(e.target.value);
	};

	const handleInputEvent = (e) => {
		setSearchTerm(e.target.value);
	};

	return (
		<div className="App">
			<Header
				handleInputEvent={handleInputEvent}
				handleLangEvent={handleLangEvent}
			/>
			<Content language={language} searchTerm={searchTerm} />
			<Footer />
		</div>
	);
}

export default App;

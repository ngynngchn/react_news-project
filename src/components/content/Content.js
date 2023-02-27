// component import
import Article from "../newsarticle/Article";

// library import
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

// style import
import "./Content.css";

// image import
// import searchicon from "../../img/search.svg";

const Content = ({ language, searchTerm }) => {
	const [articles, setArticles] = useState([]);
	// const [searchTerm, setSearchTerm] = useState("Mensch");
	// const [language, setLanguage] = useState("de");

	useEffect(() => {
		fetch(
			`https://newsapi.org/v2/everything?q=${searchTerm}&language=${language}&apiKey=222cbd6b5ad641d28c31e5377a808d3d`
		)
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
				setArticles(data.articles);
			});
	}, [language, searchTerm]);

	return (
		<div className="container">
			{/* 	<div className="filter">
				<select
					name="country"
					id="country"
					onChange={(e) => {
						setLanguage(e.target.value);
					}}>
					<option value="de">Germany</option>
					<option value="es">Spain</option>
					<option value="pt">Portugal</option>
					<option value="it">Italy</option>
					<option value="fr">France</option>
					<option value="en">United States</option>
				</select>
				<div className="search">
					<input
						type="search"
						name="keywords"
						id="keywords"
						onInput={(e) => {
							setSearchTerm(e.target.value);
						}}
					/>
					<label htmlFor="keywords">
						<img src={searchicon} alt="search icon" />
					</label>
				</div>
			</div> */}

			<main>
				{articles &&
					articles.map((article) => {
						return <Article {...article} key={uuidv4()} />;
					})}
			</main>
		</div>
	);
};

export default Content;

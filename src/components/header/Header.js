// style import
import "./Header.css";
// image import
import searchicon from "../../img/search.svg";

const Header = (props) => {
	return (
		<header>
			<h1>NEWS</h1>
			<div className="filter">
				<select
					name="country"
					id="country"
					onChange={props.handleLangEvent}
					value={props.language}>
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
						onInput={props.handleInputEvent}
						value={props.searchTerm}
					/>
					<label htmlFor="keywords">
						<img src={searchicon} alt="search icon" />
					</label>
				</div>
			</div>
		</header>
	);
};

export default Header;

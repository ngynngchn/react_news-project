// style import
import "./Footer.css";

// image import
import facebook from "../../img/facebook.svg";
import instagram from "../../img/instagram.svg";
import twitter from "../../img/twitter.svg";
import youtube from "../../img/yt.svg";

const Footer = () => {
	return (
		<footer>
			<button
				className="btn"
				type="button"
				onClick={() => {
					window.scrollTo(0, 0);
				}}>
				Back to top
			</button>
			<div className="socials">
				<a href="https://www.facebook.com/">
					<img src={facebook} alt="facebook icon" />
				</a>
				<a href="https://www.instagram.com/">
					<img src={instagram} alt="instagram icon" />
				</a>
				<a href="https://twitter.com/?lang=de">
					<img src={twitter} alt="twitter icon" />
				</a>
				<a href="https://www.youtube.com/">
					<img src={youtube} alt="youtube icon" />
				</a>
			</div>
		</footer>
	);
};

export default Footer;

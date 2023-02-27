// style import
import "./Article.css";

// image import
import notFound from "../../img/notfound.png";

const Article = ({
	author,
	title,
	description,
	url,
	urlToImage,
	publishedAt,
}) => {
	publishedAt = publishedAt.slice(0, 10);
	return (
		<section>
			<h4>Author: {author}</h4>
			<img src={!urlToImage ? notFound : urlToImage} alt="news" />

			<span>{publishedAt}</span>
			<article>
				<h3>{title}</h3>
				<p>{description}</p>
			</article>
			<a href={url} target="_blank" rel="noreferrer">
				Link to article
			</a>
		</section>
	);
};

export default Article;

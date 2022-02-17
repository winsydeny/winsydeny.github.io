import { markedParse } from "../core/transform";
interface HeaderProps {
  articles: Array<Article>;
  showArticle: Function;
}
interface Article {
  fileName: string;
  hash: string;
  content: string;
}
export function Header(props: HeaderProps) {
  const generateHtml = (content: string): string => {
    return markedParse(content);
  };
  return (
    <>
      {props.articles.map((article) => (
        <span
          style={{ display: "inline-block", padding: "20px" }}
          onClick={() => props.showArticle(generateHtml(article.content))}
          key={article.hash}
        >
          {article.fileName}
        </span>
      ))}
    </>
  );
}

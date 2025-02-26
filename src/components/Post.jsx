import criancaSoma from '../img/criancaSoma.jpg';

export default function Post({ title, author, children }) {
  return (
    <div className="post">
      <img src={criancaSoma} alt="Criança aprendendo matemática" />
      <h2>{title}</h2>
      <p><i>{author}</i></p>
      {children}
    </div>
  );
}
type CardProps = {
  title: string;
  content: string;
};

const Card = ({ title, content }: CardProps) => {
  return (
    <div className="card">
      <h4>{title}</h4>
      <p>{content}</p>
    </div>
  );
};

export default Card;
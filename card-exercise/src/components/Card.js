
import '../index.css'
const Card = ({question, select}) => {
  return (
    <div className={question.id===select ?'selected':''}>
      <p>{question.id === select? question.answer : question.question}</p>
    </div>
  );
}

export default Card
import Paragraph from "./Paragraph";

const Card = (props) => {
  return (
    <div className="card">
      <div className="icon-wrapper">
        <img src={props.cardIcon} alt="" className="card-icon" />
      </div>
      <h3 className="card-heading">{props.cardTitle}</h3>
      <Paragraph
        paragraphClasses={props.paragraphClasses}
        paragraphContent={props.paragraphContent}
      />
    </div>
  );
};

export default Card;

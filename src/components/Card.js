import Paragraph from "./Paragraph";

const Card = (props) => {
  return (
    <div>
      <img src="" alt="" className="" />
      <h3>{props.cardTitle}</h3>
      <Paragraph
        paragraphClasses={props.paragraphClasses}
        paragraphContent={props.paragraphContent}
      />
    </div>
  );
};

export default Card;

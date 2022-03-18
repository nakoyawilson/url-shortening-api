import { CopyToClipboard } from "react-copy-to-clipboard";

const ShortLinkContainer = (props) => {
  return (
    <div className="shortlink-container">
      <div className="original-link-wrapper">
        <p className="original-link">{props.originalLink}</p>
      </div>
      <div className="shortened-link-wrapper">
        <p className="shortened-link">{props.shortLink}</p>
        <CopyToClipboard text={props.shortLink}>
          <button className="copy-button">Copy</button>
        </CopyToClipboard>
      </div>
    </div>
  );
};

export default ShortLinkContainer;

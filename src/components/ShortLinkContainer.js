import { CopyToClipboard } from "react-copy-to-clipboard";

const ShortLinkContainer = (props) => {
  return (
    <div>
      <div>
        <p>{props.originalLink}</p>
      </div>
      <div>
        <p>{props.shortLink}</p>
        <CopyToClipboard text={props.shortLink}>
          <button>Copy</button>
        </CopyToClipboard>
      </div>
    </div>
  );
};

export default ShortLinkContainer;

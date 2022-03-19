import { useState, useEffect } from "react";
import axios from "axios";
import uuid from "react-uuid";
import Navbar from "./components/Navbar";
import ButtonLink from "./components/ButtonLink";
import Paragraph from "./components/Paragraph";
import Form from "./components/Form";
import ShortLinkContainer from "./components/ShortLinkContainer";
import Card from "./components/Card";
import Footer from "./components/Footer";
import illustrationWorking from "./images/illustration-working.svg";
import brandRecognition from "./images/icon-brand-recognition.svg";
import detailedRecords from "./images/icon-detailed-records.svg";
import fullyCustomizable from "./images/icon-fully-customizable.svg";
import "./App.css";

const App = () => {
  const [urlInput, setUrlInput] = useState("");
  const [shortenedLinks, setShortenedLinks] = useState(
    localStorage.getItem("nw-fem-url-shortening-api")
      ? JSON.parse(localStorage.getItem("nw-fem-url-shortening-api"))
      : []
  );

  const getShortenedLink = async (linkToShorten) => {
    try {
      const response = await axios.get(
        `https://api.shrtco.de/v2/shorten?url=${linkToShorten}`
      );
      const shortLink = response.data.result.full_short_link;
      const originalLink = response.data.result.original_link;
      const linkID = uuid();
      const newShortLink = {
        id: linkID,
        shortLink: shortLink,
        originalLink: originalLink,
      };
      const interimArray = [...shortenedLinks];
      interimArray.unshift(newShortLink);
      setShortenedLinks(interimArray);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    localStorage.setItem(
      "nw-fem-url-shortening-api",
      JSON.stringify(shortenedLinks)
    );
  }, [shortenedLinks]);

  const handleInputChange = (e) => {
    const { value } = e.target;
    setUrlInput(value);
  };

  const handleSubmit = (e) => {
    if (urlInput === "") {
      console.log("Please add a link");
    } else {
      getShortenedLink(urlInput);
      setUrlInput("");
    }
    e.preventDefault();
  };

  const displayShortLinks = (item) => {
    return (
      <ShortLinkContainer
        key={item.id}
        originalLink={item.originalLink}
        shortLink={item.shortLink}
      />
    );
  };

  return (
    <>
      <header className="header">
        <Navbar />
        <section className="hero">
          <div className="image-wrapper">
            <img src={illustrationWorking} alt="" className="hero-image" />
          </div>
          <div>
            <h1 className="main-heading">More than just shorter links</h1>
            <Paragraph
              paragraphClasses="paragraph"
              paragraphContent="Build your brand’s recognition and get detailed insights on how your
          links are performing."
            />
            <ButtonLink content="Get Started" />
          </div>
        </section>
      </header>
      <main className="main">
        <Form
          labelText="Shorten a link here..."
          buttonText="Shorten It!"
          inputValue={urlInput}
          handleInputChange={handleInputChange}
          handleSubmit={handleSubmit}
        />
        {shortenedLinks.length > 0 && (
          <div className="shortened-links-wrapper">
            {shortenedLinks.map(displayShortLinks)}
          </div>
        )}
        <section className="statistics">
          <h2 className="section-heading">Advanced Statistics</h2>
          <Paragraph
            paragraphClasses="paragraph"
            paragraphContent="Track how your links are performing across the web with our advanced
      statistics dashboard."
          />
          <div className="cards-wrapper">
            <Card
              cardTitle="Brand Recognition"
              cardIcon={brandRecognition}
              paragraphClasses="paragraph"
              paragraphContent="Boost your brand recognition with each click. Generic links don’t mean a
      thing. Branded links help instil confidence in your content."
            />
            <Card
              cardTitle="Detailed Records"
              cardIcon={detailedRecords}
              paragraphClasses="paragraph"
              paragraphContent="Gain insights into who is clicking your links. Knowing when and where
      people engage with your content helps inform better decisions."
            />
            <Card
              cardTitle="Fully Customizable"
              cardIcon={fullyCustomizable}
              paragraphClasses="paragraph"
              paragraphContent="Improve brand awareness and content discoverability through customizable
      links, supercharging audience engagement."
            />
          </div>
        </section>
        <section className="boost">
          <h2 className="section-heading">Boost your links today</h2>
          <ButtonLink content="Get Started" />
        </section>
      </main>
      <Footer />
    </>
  );
};

export default App;

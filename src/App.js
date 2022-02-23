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
    <div className="App">
      <header>
        <Navbar />
        <h1>More than just shorter links</h1>
        <Paragraph
          paragraphClasses=""
          paragraphContent="Build your brand’s recognition and get detailed insights on how your
          links are performing."
        />
        <ButtonLink content="Get Started" />
      </header>
      <main>
        <Form
          labelText="Shorten a link here..."
          buttonText="Shorten It!"
          inputValue={urlInput}
          handleInputChange={handleInputChange}
          handleSubmit={handleSubmit}
        />
        <div>
          {shortenedLinks.length > 0 && shortenedLinks.map(displayShortLinks)}
        </div>
        <section>
          <h2>Advanced Statistics</h2>
          <Paragraph
            paragraphClasses=""
            paragraphContent="Track how your links are performing across the web with our advanced
      statistics dashboard."
          />
          <Card
            cardTitle="Brand Recognition"
            cardIcon=""
            paragraphClasses=""
            paragraphContent="Boost your brand recognition with each click. Generic links don’t mean a
      thing. Branded links help instil confidence in your content."
          />
          <Card
            cardTitle="Detailed Records"
            cardIcon=""
            paragraphClasses=""
            paragraphContent="Gain insights into who is clicking your links. Knowing when and where
      people engage with your content helps inform better decisions."
          />
          <Card
            cardTitle="Fully Customizable"
            cardIcon=""
            paragraphClasses=""
            paragraphContent="Improve brand awareness and content discoverability through customizable
      links, supercharging audience engagement."
          />
        </section>
        <section>
          <h2>Boost your links today</h2>
          <ButtonLink content="Get Started" />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;

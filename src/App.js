import axios from "axios";
import Navbar from "./components/Navbar";
import ButtonLink from "./components/ButtonLink";
import Paragraph from "./components/Paragraph";
import Form from "./components/Form";
import Card from "./components/Card";
import Footer from "./components/Footer";
import "./App.css";

function App() {
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
        <Form labelText="Shorten a link here..." buttonText="Shorten It!" />
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
}

export default App;

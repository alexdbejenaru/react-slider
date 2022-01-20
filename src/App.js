import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import data from './data/db';
import { useEffect, useState } from "react";
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';

function App() {
  const people = data;
  const [ index, setIndex ] = useState(0);

  useEffect(() => {
    const lastIndex = people.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, people])

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1)
    }, 5000);
    return () => clearInterval(slider);
  }, [index]);

  return (
    <main className="app">
      <section className="app-container">
        <div className="slider">
          <div className="slider_btn">
            <GrFormPrevious onClick={() => setIndex(index - 1)} className="icon" />
          </div>
          <section className="card-container">
            {people.map((person, personIndex) => {
              const { id, image, name, quote, title } = person;
              let position = 'next-slide';
              if (personIndex === index) {
                position = 'active-slide';
              }
              if (personIndex === index - 1 || (index === 0 && personIndex === people.length -1)) {
                position = 'last-slide';
              }
              return (
              <div key={ id } className={ position + ' card'}>
                <img className="card_image" src={ image } alt="" />
                <h3 className="card_name">{ name }</h3>
                <h5 className="card_title">{ title }</h5>
                <div className="card_quote">
                  <FaQuoteRight className="quote-icon" />
                  <p className="quote">{ quote }</p>
                  <FaQuoteLeft className="quote-icon quote-right" />
                </div>
              </div>
            )})}
          </section>
          <div className="slider_btn">
            <GrFormNext className="icon" onClick={() => setIndex(index + 1)} />
            </div>
        </div>
      </section>
    </main>
  );
}

export default App;

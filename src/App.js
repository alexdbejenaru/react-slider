import { GrFormNext, GrFormPrevious } from "react-icons/gr";

function App() {
  return (
    <main className="app">
      <section className="app-container">
        <div className="slider">
          <div className="slider_btn"><GrFormPrevious className="icon" /></div>
          <section className="card-container">
            <div className="card last-slide">
              <img className="card_image" src="https://media.istockphoto.com/photos/beautiful-afro-woman-with-perfect-makeup-picture-id1287400143?b=1&k=20&m=1287400143&s=170667a&w=0&h=3qUJYtw24sAKs73Qv-iDodDnugx4Po-RYoNAPd_pJF4=" alt="" />
              <h3 className="card_name">Joanna</h3>
              <div className="card_quote">
                <img src="" className="quoteicon" alt="" />
                <p className="quote">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas incidunt explicabo molestias vel ea minus similique totam dolore dolores quam.</p>
              </div>
            </div>
            <div className="card active-slide">
              <img className="card_image" src="https://media.istockphoto.com/photos/beautiful-afro-woman-with-perfect-makeup-picture-id1287400143?b=1&k=20&m=1287400143&s=170667a&w=0&h=3qUJYtw24sAKs73Qv-iDodDnugx4Po-RYoNAPd_pJF4=" alt="" />
              <h3 className="card_name">Joanna</h3>
              <div className="card_quote">
                <img src="" className="quoteicon" alt="" />
                <p className="quote">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas incidunt explicabo molestias vel ea minus similique totam dolore dolores quam.</p>
              </div>
            </div>
            <div className="card next-slide">
              <img className="card_image" src="https://media.istockphoto.com/photos/beautiful-afro-woman-with-perfect-makeup-picture-id1287400143?b=1&k=20&m=1287400143&s=170667a&w=0&h=3qUJYtw24sAKs73Qv-iDodDnugx4Po-RYoNAPd_pJF4=" alt="" />
              <h3 className="card_name">Joanna</h3>
              <div className="card_quote">
                <img src="" className="quoteicon" alt="" />
                <p className="quote">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas incidunt explicabo molestias vel ea minus similique totam dolore dolores quam.</p>
              </div>
            </div>
          </section>
          <div className="slider_btn"><GrFormNext className="icon" /></div>
        </div>
      </section>
    </main>
  );
}

export default App;

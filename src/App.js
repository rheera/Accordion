import "./App.css";
import React, { useState } from "react";
import data from "./data";

function App() {
  const [shown, setShown] = useState([]);

  const showHide = (id) => {
    if (shown.includes(id)) {
      setShown(shown.filter((item) => item != id));
    } else {
      setShown([...shown, id]);
    }
  };

  return (
    <div className="App">
      <header className="App-header has-text-centered">
        <h1 className={"title"}>Accordion</h1>
      </header>
      <section className="section">
        <div className="container box">
          <div className="columns">
            <div className="column is-4">
              <h1 className={"title is-2 my-4 mx-4 has-text-centered"}>
                Questions and Answers About Login
              </h1>
            </div>
            <div className="column is-8">
              {data.map((question) => {
                return (
                  <div
                    key={question.id}
                    className={"box columns is-multiline my-4 mx-4"}
                  >
                    <div className={"column is-8"}>
                      <h2 className={"has-text-weight-bold"}>
                        {question.title}
                      </h2>
                    </div>
                    <div className={"column is-4"}>
                      <button onClick={() => showHide(question.id)}>+</button>
                    </div>
                    <div className={"column is-12"}>
                      <p>{shown.includes(question.id) && question.info}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;

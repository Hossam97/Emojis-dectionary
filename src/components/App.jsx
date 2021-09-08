import React from "react";
import emojipedia from "./emojipedia.js";
import Card from "./Card.jsx";
import Footer from "./Footer.jsx";

function createCard(term){
  return (
    <Card 
        key={term.id}
        emoji={term.emoji}
        name={term.name}
        description={term.meaning}
      />
  )
}

function App() {
  return (
    <div>
    
      <h1>
        <span>Emojipedia</span>
      </h1>
      <dl className="dictionary">
      {emojipedia.map(createCard)}
      
      </dl>
      <Footer />
      </div>
  )
}

export default App;

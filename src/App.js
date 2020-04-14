import React from 'react';
import Navbar from './components/Navbar';
import QuoteCard from './components/QuoteCard';
import axios from 'axios';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.getQuote = this.getQuote.bind(this);
    this.state = {
      quote: "Facts are meaningless. You could use facts to prove anything that's even remotely true.",
      character: "Homer Simpson",
      image: "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939",
    }
  }

  getQuote() {
    axios.get('https://thesimpsonsquoteapi.glitch.me/quotes')
      .then(response => response.data)
      .then(data => {
        this.setState({
          quote: data[0].quote,
          character: data[0].character,
          image: data[0].image,
        });
      });
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <QuoteCard
          quote={this.state.quote}
          character={this.state.character}
          image={this.state.image}
        />
        <button type="button" onClick={this.getQuote}>Show Citations</button>
      </div>
    );
  }
}

export default App;

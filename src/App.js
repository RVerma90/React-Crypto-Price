import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {

  constructor(props) {
		super(props);
		
		this.state = {
			cryptos: []
		};
  }

  componentDidMount() {
		axios.get('https://api.coinmarketcap.com/v1/ticker/?limit=10')
			.then(res => {
				const cryptos = res.data;
				console.log(cryptos);
				this.setState({cryptos: cryptos});
			})
			console.log(this.state.cryptos);
	}
  
  render() {
    return (
			<div className="App">
					<div id="crypto-title">
						<span className="title">CRYPTO WORLD BEST PLAYERS OF THE DAY</span>
					</div>
					<div id="crypto-container">
						<span className="left">RANK</span>
						<span className="prices">PLAYER NAME</span>
						<span className="prices">SCORE</span>
						<span className="prices">UNDERDOG SCORE</span>
						<span className="prices">ALL TIME WINS</span>
					</div>

				{Object.keys(this.state.cryptos).map((key) => (


					<div id="crypto-container">
						<span className="left">{this.state.cryptos[key].rank}</span>
						<span className="prices">{this.state.cryptos[key].symbol}</span>
						<span className="prices">{this.state.cryptos[key].market_cap_usd}</span>
						<span className="prices">{this.state.cryptos[key].total_supply}</span>
						<span className="prices">{this.state.cryptos[key].price_usd}</span>
						<button className="retroButton"><a href={"https://coinmarketcap.com/currencies/" + this.state.cryptos[key].id}>GET</a></button>
					</div>
				))}

			</div>
    );
  }
}
 
export default App;

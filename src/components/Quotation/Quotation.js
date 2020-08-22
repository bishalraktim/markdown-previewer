import React, { Component } from 'react';
import Aux from '../../hoc/Aux/Aux';
import classes from './Quotation.module.css';
import axios from '../../axios';
//import {Helmet} from 'react-helmet';

class Quotation extends Component {
  state = {
    quote: null,
    author: null,
    array: null,
    error: false,
    colors: ['#16a085', '#27ae60', '#2c3e50', '#f39c12',
    '#e74c3c', '#9b59b6', '#FB6964', '#342224', '#472E32',
    '#BDBB99', '#77B1A9', '#73A857'],
    background: null
  };


  clickHandler(){
    const lengths = this.state.array.length;
    const index = Math.floor(Math.random()*lengths);

    this.setState({
      quote: this.state.array[index]['quote'],
      author: this.state.array[index]['author'],
      background: this.state.colors[Math.floor(Math.random()*this.state.colors.length)]
    });
    document.body.style.backgroundColor = this.state.background;
  }

  componentDidMount(){
    axios.get('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json')
      .then(response => {
        const lengths = response.data['quotes'].length;
        const index = Math.floor(Math.random()*lengths);
        //console.log('response', response.data['quotes']);
        this.setState({
          quote: response.data['quotes'][index]['quote'],
          author: response.data['quotes'][index]['author'],
          array: response.data['quotes'],
          background: this.state.colors[Math.floor(Math.random()*this.state.colors.length)]
        });
      })
      .catch(error => {
        this.setState({error: true});
      });
  }

  componentDidUpdate(){
    document.body.style.backgroundColor = this.state.background;
  }

  render () {
    return (
      <Aux>
        <div className={classes.Quotation} id='quote-box'>
          <h2 style={{textAlign: 'justify', color: this.state.background}} id='text'>
            {<i className="fas fa-quote-left"></i>} {this.state.quote}
          </h2>
          <h3 style={{textAlign: 'right', color: this.state.background}} id='author'>{'- ' + this.state.author}</h3>
          <div className={classes.Display}>
            <div>
              <div>
                <a style={{marginRight: '25px', fontSize: '40px', color: this.state.background}} id='tweet-quote' rel='noopener noreferrer' href='https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=%22Twenty%20years%20from%20now%20you%20will%20be%20more%20disappointed%20by%20the%20things%20that%20you%20didn%E2%80%99t%20do%20than%20by%20the%20ones%20you%20did%20do%2C%20so%20throw%20off%20the%20bowlines%2C%20sail%20away%20from%20safe%20harbor%2C%20catch%20the%20trade%20winds%20in%20your%20sails.%20%20Explore%2C%20Dream%2C%20Discover.%22%20Mark%20Twain' target='_blank'>
                  <i className="fab fa-twitter"></i>
                </a>

                <a style={{fontSize: '40px', color: this.state.background}} rel='noopener noreferrer' href='https://www.tumblr.com/login?redirect_to=https%3A%2F%2Fwww.tumblr.com%2Fwidgets%2Fshare%2Ftool%3Fposttype%3Dquote%26tags%3Dquotes%252Cfreecodecamp%26caption%3DMark%2BTwain%26content%3DTwenty%2Byears%2Bfrom%2Bnow%2Byou%2Bwill%2Bbe%2Bmore%2Bdisappointed%2Bby%2Bthe%2Bthings%2Bthat%2Byou%2Bdidn%25E2%2580%2599t%2Bdo%2Bthan%2Bby%2Bthe%2Bones%2Byou%2Bdid%2Bdo%252C%2Bso%2Bthrow%2Boff%2Bthe%2Bbowlines%252C%2Bsail%2Baway%2Bfrom%2Bsafe%2Bharbor%252C%2Bcatch%2Bthe%2Btrade%2Bwinds%2Bin%2Byour%2Bsails.%2B%2BExplore%252C%2BDream%252C%2BDiscover.%26canonicalUrl%3Dhttps%253A%252F%252Fwww.tumblr.com%252Fbuttons%26shareSource%3Dtumblr_share_button' target='_blank'>
                  <i className="fab fa-tumblr"></i>
                </a>

              </div>
            </div>
            <div>
              <button style={{cursor: 'pointer', fontSize: '20px', padding: '12px',
                backgroundColor: this.state.background,
                outline: 'none', border: 'none', color: 'white'}} onClick={this.clickHandler.bind(this)} id='new-quote'>
                New quote
              </button>
            </div>
          </div>
        </div>

        <div className={classes.para}><p>Programmed by - Bishal Raktim</p></div>
      </Aux>
    );
  }
}

export default Quotation;

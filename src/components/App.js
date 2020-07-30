import './style.css';
import React from 'react';
import LiveData from './LiveData';
import LiveGlobal from './LiveGlobal';
import LiveProvinsi from './LiveProvinsi';
import icon from '../assets/logo/coronaicon1.png';

class App extends React.Component {
  render() {
    return (
      <body>
        <div className="ui fixed inverted menu">
          <div className="container">
            <a href="https://ekhel.github.io/kawal-corona" className="header item">
              <img className="logo" src={icon} alt="logo" />
              Kawal Corona 
            </a>
            <a href="#" className="item">Beranda</a>
            <div className="ui simple dropdown item">
              Live Data <i className="dropdown icon"></i>
              <div className="menu">
                <a className="item" href="#">Global</a>
                <a className="item" href="#">Indonesia</a>
                <a className="item" href="#">Papua</a>
              </div>
            </div>
          </div>
        </div>
        
        <p className="text container3">
          <center><strong> Live Data Global & Indonesia Coronavirus</strong></center>
        </p>
        <div className="ui divider"></div>
        <div className="ui main text container2">
          
          <div className="ui segment">
            <h3 className="ui header">
              <i className="globe icon"></i> Data Kasus Coronavirus (Covid 19) Global
            </h3>
            <LiveData />
          </div>
          <div className="ui divider"></div>
          <span></span>
          <span></span>
          <div className="ui segment">
            <h3 className="ui header">
              <i className="id flag"></i> Data Kasus Coronavirus di Indonesia Berdasarkan Provinsi
            </h3>
            <LiveProvinsi />
          </div>
          <div className="ui divider"></div>
          <span></span>
          <span></span>
          <div className="ui segment">
            <h3 className="ui header">
              <i className="globe icon"></i> Kasus Coronavirus Global (Data By JHU)
            </h3>
            <LiveGlobal />
          </div>
        </div>

        <div className="ui inverted vertical footer segment">
          <div className="ui center aligned container">
            <div className="ui stackable inverted divided grid">
              <div className="three wide column">
                <h4 class="ui inverted header">API Services</h4>
                  <div className="ui inverted link list">
                    <a href="http://api.kawalcorona.com" className="item" target="_blank">Global Data</a>
                    <a href="http://api.kawalcorona.com/positif/" className="item" target="_blank">Global Positif</a>
                    <a href="http://api.kawalcorona.com/meninggal" className="item" target="_blank">Global Meniggal</a>
                    <a href="http://api.kawalcorona.com/sembuh" className="item" target="_blank">Global Sembuh</a>
                    <a href="http://api.kawalcorona.com/indonesia" className="item" target="_blank">Data indonesia</a>
                    <a href="http://api.kawalcorona.com/indonesia/provinsi" className="item" target="_blank">Data indonesia (provinsi)</a>
                  </div>
              </div>
              <div class="three wide column">
                <h4 class="ui inverted header">Websait</h4>
                <div class="ui inverted link list">
                  <a href="https://kawalcorona.com" target="_blank" class="item">Kawal Corona</a>
                  <a href="https://hack.co.id/" target="_blank" class="item">Ethical Hacker Indonesia</a>
                  
                </div>
              </div>
              <div class="three wide column">
                <h4 class="ui inverted header">Hotline Corona</h4>
                <div class="ui inverted link list">
                  <a href="https://kawalcorona.com" className="item">021-5210-411</a>
                  <a href="https://kawalcorona.com" className="item">0812-1212-3119</a>
                </div>
              </div>
              <div class="seven wide column">
                <h4 class="ui inverted header"> Dev By</h4>
                <p>Michael.</p>
              </div>
              
            </div>
            <div class="ui inverted section divider"></div>
            <img src="assets/logo/coronaicon1.png" class="ui centered mini image" alt="logo" />
            <div class="ui horizontal inverted small divided link list">
              <a class="item" href="http://github.com/Ekhel/kawal-corona" target="_blank">Repository</a>
              <a class="item" href="https://badges.gitter.im/jayapura_dev/react.svg" target="_blank">Gitter</a>
            </div>
          </div>
        </div>
      </body>
    );
  }

}

export default App;
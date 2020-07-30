import React , {useState,useEffect} from 'react';
import { getInfoGlobalDeath, getInfoGlobalHealth, getInfoGlobalPositif, getInfoIndonesia } from '../api/kawalcorona'
import bersedih from '../assets/icon/bersedih.jpg';
import gembira from '../assets/icon/gembira.jpg';
import indonesiaImg from '../assets/icon/indonesia.jpg';
import menangis from '../assets/icon/menangis.jpg';

const LiveData = () => {
  const [positif,setPositif] = useState([])
  const [death,setDeath] = useState([])
  const [health,setHealth] = useState([])
  const [indonesia,setIndonesia] = useState([])

  
  useEffect(() => {
    globalDeath();
    globalPositif();
    globalHealth();
    infoIndonesia();
  },[])
    // state = ({ positif: [], meninggal: [], sembuh: [], indo: [] });

    // componentDidMount() {
    //     axios.get('https://api.kawalcorona.com/positif/').then(response => {
    //         console.log(response);
    //         this.setState({ positif: response.data });
    //     });

    //     axios.get('https://api.kawalcorona.com/meninggal/').then(response => {
    //         console.log(response);
    //         this.setState({ meninggal: response.data });
    //     });

    //     axios.get('https://api.kawalcorona.com/sembuh/').then(response => {
    //         console.log(response);
    //         this.setState({ sembuh: response.data });
    //     });

    //     axios.get('https://api.kawalcorona.com/indonesia/').then(response => {
    //         console.log(response);
    //         this.setState({ indo: response.data });
    //     });
    // }

    const globalPositif = () => {
      getInfoGlobalPositif().then((response) => {
          console.log("Info",response);
          console.log("data",response.data);
           setPositif(response.data)
      }).catch(err =>{  
          console.log(err)
      })
    }

    const globalDeath = () => {
      getInfoGlobalDeath().then((response) => {
          console.log("Info",response);
          console.log("data",response.data);
           setDeath(response.data)
      }).catch(err =>{  
          console.log(err)
      })
    }

    const globalHealth = () => {
      getInfoGlobalHealth().then((response) => {
          console.log("Info",response);
          console.log("data",response.data);
           setHealth(response.data)
      }).catch(err =>{  
          console.log(err)
      })
    }

    const infoIndonesia = () => {
      getInfoIndonesia().then((response) => {
          console.log("Info",response);
          console.log("data",response.data);
           setIndonesia(response.data)
      }).catch(err =>{  
          console.log(err)
      })
    }

    
        return (
            <div>
              <div className="ui grid">
                  <div className="three column row">
                          <div className="column ui fluid card">
                            <div className="image">
                              <img src={bersedih} alt="bersedih"/>
                            </div>
                            <div className="content">
                              <a href="t" className="header">{positif.name}</a>
                              <div className="description">
                                {positif.value} ORANG
                              </div>
                            </div>
                          </div>
                
                
                          <div className="column ui fluid card">
                            <div className="image">
                              <img src={gembira} alt="gembira"/>
                            </div>
                            <div className="content">
                              <a href="t" className="header center">{health.name}</a>
                              <div className="description">
                                {health.value} ORANG
                              </div>
                            </div>
                          </div>
               

              
                          <div className="column ui fluid card">
                            <div className="image">
                              <img src={menangis} alt="menangis"/>
                            </div>
                            <div className="content">
                              <a href="t" className="header">{death.name}</a>
                              <div className="description">
                                {death.value} ORANG
                              </div>
                            </div>
                          </div>
                  </div>
              
              
              
                  <div className="three column row">
                        <div className="column ui fluid card">
                          {/* <div className="image">
                            <img src={bersedih} alt="bersedih"/>
                          </div> */}
                          <div className="content">
                            <a href="t" className="header">{indonesia.map(indo =>(indo.name))}</a>
                            <div className="description">
                            Positif : {indonesia.map(indo =>(indo.positif))} Orang
                            </div>
                          </div>
                        </div>
                    
                 
                
                        <div className="column ui fluid card">
                          {/* <div className="image">
                            <img src={gembira} alt="gembira"/>
                          </div> */}
                          <div className="content">
                            <a href="t" className="header center">{indonesia.map(indo =>(indo.name))}</a>
                            <div className="description">
                            Sembuh : {indonesia.map(indo =>(indo.sembuh))} ORANG
                            </div>
                          </div>
                        </div>
                    

                
                        <div className="column ui fluid card">
                          {/* <div className="image">
                            <img src={menangis} alt="menangis"/>
                          </div> */}
                          <div className="content">
                            <a href="t" className="header">{indonesia.map(indo =>(indo.name))}</a>
                            <div className="description">
                            Death : {indonesia.map(indo =>(indo.meninggal))} ORANG
                            </div>
                          </div>
                        </div>
               

                    {/* <div className="ui fluid card">
                      <div className="image">
                        <img src={indonesiaImg} alt="indonesia"/>
                      </div>
                      <div className="content">
                        <a href="t" className="header">{indonesia.map(indo =>(indo.name))}</a>
                        <div className="description">
                          Positif : {indonesia.map(indo =>(indo.positif))} | 
                          Sembuh : {indonesia.map(indo =>(indo.sembuh))} | 
                          Death : {indonesia.map(indo =>(indo.meninggal))}
                        </div>
                      </div>
                    </div> */}
                  </div>
                </div>
            </div>
        );
}

export default LiveData;

// class LiveData extends React.Component {
//   state = ({ positif: [], meninggal: [], sembuh: [], indo: [] });

//   componentDidMount() {
//       axios.get('https://api.kawalcorona.com/positif/').then(response => {
//           console.log(response);
//           this.setState({ positif: response.data });
//       });

//       axios.get('https://api.kawalcorona.com/meninggal/').then(response => {
//           console.log(response);
//           this.setState({ meninggal: response.data });
//       });

//       axios.get('https://api.kawalcorona.com/sembuh/').then(response => {
//           console.log(response);
//           this.setState({ sembuh: response.data });
//       });

//       axios.get('https://api.kawalcorona.com/indonesia/').then(response => {
//           console.log(response);
//           this.setState({ indo: response.data });
//       });
//   }

import React , {useState,useEffect} from 'react';
import {getInfoProvinsi} from '../api/kawalcorona';

const LiveProvinsi = () => {
    // state = ({ provinsi: [] });

    // componentDidMount() {
    //     axios.get('https://api.kawalcorona.com/indonesia/provinsi/')
    //     .then(response => {
    //         console.log(response);
    //         this.setState({ provinsi: response.data });
    //     })
    // }

    const [provinsi,setProvinsi]=useState([])

    useEffect(() => {
      infoProvinsi();
     },[])

     const infoProvinsi = () => {
      getInfoProvinsi().then((response) => {
          console.log("list",response);
          console.log("data",response.data);
           setProvinsi(response.data)
      }).catch(err =>{  
          console.log(err)
      })
    }

        return (
            <div>
              <table className="ui pink table">
                 <thead>
                   <tr>
                      <th>NO</th>
                      <th>ID</th>
                      <th>Provinsi</th>
                      <th>Positif</th>
                      <th>Sembuh</th>
                      <th>Meninggal</th>
                   </tr>
                 </thead>
                 <tbody>
                    {provinsi.map((provinsi,index) => 
                        <tr>
                          <td>{index + 1}</td>
                          <td>{provinsi.attributes.Kode_Provi}</td>
                          <td>{provinsi.attributes.Provinsi}</td>
                          <td>{provinsi.attributes.Kasus_Posi}</td>
                          <td>{provinsi.attributes.Kasus_Semb}</td>
                          <td>{provinsi.attributes.Kasus_Meni}</td>
                        </tr>
                    )}
                 </tbody>
              </table>
            </div>
        )
}

export default LiveProvinsi;
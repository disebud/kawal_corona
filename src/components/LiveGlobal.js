import React, {useState , useEffect} from 'react';
import {getInfoGlobal} from '../api/kawalcorona';


const LiveGlobal = () => {
    const [list,setList] = useState([])

    useEffect(() => {
     infoGlobal();
    },[])

    // componentDidMount() {
    //     axios.get('https://api.kawalcorona.com/').then(response => {
    //         console.log(response);
    //         this.setState({ list: response.data });
    //     });
    // };

    const infoGlobal = () => {
      getInfoGlobal().then((response) => {
          console.log("list",response);
          console.log("data",response.data);
           setList(response.data)
      }).catch(err =>{  
          console.log(err)
      })
    }

        return (
            <div>
                <table className="ui purple table">
                  <thead>
                    <tr>
                      <th>NO</th>
                      <th>ID</th>
                      <th>Negara</th>
                      <th>Positif</th>
                      <th>Meninggal</th>
                      <th>Sembuh</th>
                    </tr>
                  </thead>
                  <tbody>
                    {list.map((list,index) => 
                      <tr>
                        <td data-label="NO">{index + 1}</td>
                        <td data-label="ID">{list.attributes.OBJECTID}</td>
                        <td data-label="Negara">{list.attributes.Country_Region}</td>
                        <td data-label="Positif">{list.attributes.Confirmed}</td>
                        <td data-label="Meninggal">{list.attributes.Deaths}</td>
                        <td data-label="Sembuh">{list.attributes.Recovered}</td>
                      </tr>
                    )}
                  </tbody>                   
                </table>
            </div>
        );
    };

export default LiveGlobal;
import axios from 'axios';

// export default axios.create({
//     baseURL : 'https://api.kawalcorona.com'
// })

// Live Data
const getInfoGlobalPositif = async () => {
    let info = await axios.get('https://api.kawalcorona.com/positif/')
        return info
    };

const getInfoGlobalDeath = async () => {
    let info = await axios.get('https://api.kawalcorona.com/meninggal/')
       return info
    }

const getInfoGlobalHealth = async () => {
    let info = await axios.get('https://api.kawalcorona.com/sembuh/')
    return info
    };

const getInfoIndonesia = async () => {
    let info = await axios.get('https://api.kawalcorona.com/indonesia/')
    return info
};

// Live Global

const getInfoGlobal= async () => {
    let info = await axios.get('https://api.kawalcorona.com/')
    return info
};

// live Provinsi Indonesia

const getInfoProvinsi = async () => {
    let info = await axios.get('https://api.kawalcorona.com/indonesia/provinsi/')
    return info
};



export { getInfoGlobalDeath, getInfoGlobalHealth, getInfoGlobalPositif, getInfoIndonesia , getInfoGlobal , getInfoProvinsi };
    

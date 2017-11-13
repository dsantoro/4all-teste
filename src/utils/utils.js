import axios from 'axios';

export default function APIRequest(url){
    return axios.get(url).then(function (res) {
        if(res.data.cod && res.data.message) {
            throw new Error(res.data.message);
        } else {
            return res.data;
        }
    }, function (res){
        throw new Error(res.data.message);
    });
}
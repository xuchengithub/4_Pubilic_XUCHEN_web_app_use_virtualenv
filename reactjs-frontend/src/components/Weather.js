// import React from 'react';

// const Weather = () => {

//     return (
//         <div style={WeatherStyle}>
//             <h2>Weather</h2>
//         </div>
//     )
// } 

// const WeatherStyle = {
//     border: "1px solid steelblue",
//     textAlign: 'center',
//     minHeight: "300px",
// }
// export default Weather
import React from 'react';
import axios from "axios";

const API_ENDPOINT = 'http://api.openweathermap.org/data/2.5/forecast';

export default class Weather extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            apiKey : 'd4ffb244a4e634f6af57f2e75ac95098',
            requestCity: 'Tokyo',         //  ex. 'Tokyo,jp'
            city: '',
            response : []
        };
        this.handleGetWeather();

    }
    handleGetWeather(){
        axios
            .get(API_ENDPOINT, {
                params: {
                    q: "Tokyo,jp",
                    lang: 'ja',
                    appid: this.state.apiKey,
                    
                } })
            .then(res => {
                this.setState({
                    response: res.data.list,
                    city: res.data.city.name
                });
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    render() {
        // console.log(this.state.response);
        // console.log()?
        return (
            <div style={WeatherStyle}>
                <h1>Weather</h1>
                {Object.keys(this.state.response).map(key => (
                    
                    <li key={key}>
                        <img alt="noimage" src={'http://openweathermap.org/img/w/'+this.state.response[key].weather[0].icon+'.png'} />
                        {this.state.response[key].dt_txt.slice(0,10)}
                        東京
                        {this.state.response[key].weather[0].main}
                        {Math.round(this.state.response[key].main.temp-273.15)}℃
                        
                    </li>
                )).filter((key)=>{ let result =((key.key%8)===0) 
                //     console.log((key.key))
                // console.log((key%8))
                // console.log(result) 
                return (result)})}
            </div>
        );
    }
}
const WeatherStyle = {
    border: "1px solid steelblue",
    textAlign: 'center',
    minHeight: "300px",
}
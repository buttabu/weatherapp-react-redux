import axios from 'axios';


export function fetchWeather(location){
	return function(dispatch){
		axios.get('http://api.wunderground.com/api/f2ddb48f1b30b80f/conditions/q/'+location.state+'/'+location.city+'.json')
		.then((response) => {
			dispatch({type: "FETCH_WEATHER_FULFILLED", payload: response.data})
		})
		.catch ((err) => {
			dispatch({type: "FETCh_WEATHER_REJECTED", payload: err})
		})
	}
}
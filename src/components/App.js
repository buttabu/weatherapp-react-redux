import React from "react";
import Weather from "./Weather";
import LocationForm from "./LocationForm";
import {connect} from 'react-redux';
import {fetchWeather} from '../actions/weatherAction';

@connect((store) => {
	return {
		weather: store.weather.weather,
	}
})
export default class AppComponent extends React.Component{
	componentWillMount(){
		this.props.dispatch(fetchWeather({city:'New York', state:'NY'}));
	}
	render() {
		const {weather} = this.props;
		return (
			<div className="container">
			<div className="row">
			<div className="text-center col-md-6 col-md-offset-3">
						<h1>Weather Check</h1>
						<Weather weather={weather}/>
						<br />
						<LocationForm onLocationChange={this.onLocationChange.bind(this)}/>
					</div>
				</div>
			</div>
			)
	}
	onLocationChange(location){
		this.props.dispatch(fetchWeather({city:location.city, state:location.state}));
	}
}
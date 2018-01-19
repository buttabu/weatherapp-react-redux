import React from "react";


export default class LocationForm extends React.Component{
	render() {
		return (
			<div>
				<h3>Change Location</h3>
				<form onSubmit={this.changeLocation.bind(this)}>
				<div className="form-group">
					<input type="text" className="form-control" ref="city" placeholder="Enter City" />
				</div>
					<br />
				<div className="form-group">
					<input type="text" className="form-control" ref="state" placeholder="Enter State" />
				</div>
					<br />
					<input className="btn btn-primary btn-block" type="submit" value="Submit" />
			
				</form>
			</div>
			)
	}


changeLocation(e){
e.preventDefault();
let location = {
	city: this.refs.city.value,
	state: this.refs.state.value
}
this.props.onLocationChange(location);
return false;
}
}
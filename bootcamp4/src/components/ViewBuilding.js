import React from 'react';

class ViewBuilding extends React.Component {
	
	render() {
		const { selectedBuilding, data } = this.props;
		
		// For when the building has an address
		if (data[selectedBuilding-1].address) {
			return (
				<div>
					<p>
						{' '}
						<i>Click on a name to view more information</i>
					</p>
					<h4>Name: {data[selectedBuilding-1].name}</h4>
					<h4>Code: {data[selectedBuilding-1].code}</h4>
					<h4>Address: {data[selectedBuilding-1].address}</h4>
					<h4>Latitude: {data[selectedBuilding-1].coordinates.latitude}</h4>
					<h4>Longitude: {data[selectedBuilding-1].coordinates.longitude}</h4>
				</div>
			);
		}
		// For when the building has no address
		return (
			<div>
				<p>
					{' '}
					<i>Click on a name to view more information</i>
				</p>
				<h4>Name: {data[selectedBuilding-1].name}</h4>
				<h4>Code: {data[selectedBuilding-1].code}</h4>
			</div>
		);
	}
}
export default ViewBuilding;

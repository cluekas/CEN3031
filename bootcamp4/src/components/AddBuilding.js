import React from 'react';

class AddBuilding extends React.Component {

    //Prevents form from refreshing page
    afterSubmission(event) {
        event.preventDefault();
    }
   
    
    render() {

        const { createBuilding } = this.props;

        return (
          <div>
              <form onSubmit = {this.afterSubmission}>
                <input
                    type="text"
                    placeholder="Name (Required)"
                    ref={input => this.name = input}
                />
                <input
                    type="text"
                    placeholder="Code (Required)"
                    ref={input => this.code = input}
                />
                <input
                    type="text"
                    placeholder="Address"
                    ref={input => this.address = input}
                />
                <input
                    type="text"
                    placeholder="Latitude"
                    ref={input => this.lat = input}
                />
                <input
                    type="text"
                    placeholder="Longitude"
                    ref={input => this.long = input}
                />
                <button 
                    onClick={() => createBuilding({ 
                            name: this.name.value, 
                            code: this.code.value, 
                            address: this.address.value,
                            coordinates: {latitude: this.lat.value, longitude: this.lat.value}
                        })}
                >
                    Click to add building
                </button>
            </form>
          </div>  
        );
    }
}
export default AddBuilding;

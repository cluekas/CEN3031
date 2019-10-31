import React from 'react';

class AddBuilding extends React.Component {


    render() {
        return (
          <div>
              <form className="form-inline">
                <input
                    type="text"
                    className="form-control "
                    placeholder="Name"
                    ref={input => this.name = input}
                />
                <input
                    type="text"
                    className="form-control"
                    placeholder="Code"
                    ref={input => this.age = input}
                />
                <button 
                    
                >
                    Click to add building
                </button>
            </form>
          </div>  
        );
    }
}
export default AddBuilding;

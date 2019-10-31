import React from 'react';


class RemoveBuilding extends React.Component {

    render() {
        
        const { selectedBuilding, deleteBuilding } = this.props;

        return (
            <div>
                <button
                    onClick={() => deleteBuilding(selectedBuilding)}
                >
                    Click to remove building
                </button>
            </div>
        );
    }
}
export default RemoveBuilding;
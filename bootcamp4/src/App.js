import React from 'react';
import Search from './components/Search';
import ViewBuilding from './components/ViewBuilding';
import BuildingList from './components/BuildingList';
import Credit from './components/Credit';
import RemoveBuilding from './components/RemoveBuilding';
import AddBuilding from './components/AddBuilding';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      selectedBuilding: 1,
      data: this.props.data
    };
  }

  filterUpdate(value) {
    //Here you will need to set the filterText property of state to the value passed into this function
    this.setState({
      filterText: value
    })
  }

  selectedUpdate(id) {
    //Here you will need to update the selectedBuilding property of state to the id passed into this function
    this.setState({
      selectedBuilding: id
    })
  }

  //Removes building
  deleteBuilding(id) {
    const newData = this.state.data.filter(data => {return data.id !== id});
    const newBuildingID = 1;
    this.setState({
        data: newData,
        selectedBuilding: newBuildingID
    })
  }

  //Adds building to state
  createBuilding(building) {

    const newData = this.state.data
    // Finds the highest available id then adds one
    building.id = newData.reduce((max, newData) => newData.id > max ? newData.id : max, newData[0].id) + 1
    newData.push(building)
    this.setState({
      data: newData
    })
  }

  render() {
    
    return (
      <div className="bg">
        <div className="row">
          <h1>UF Directory App</h1>
        </div>

        <Search
          filterText={this.state.filterText}
          filterUpdate={this.filterUpdate.bind(this)}
        />
        <main>
          <div className="row">
            <div className="column1">
              <div className="tableWrapper">
                <table className="table table-striped table-hover">
                  <tr>
                    <td>
                      <b>Code Building</b>
                    </td>
                  </tr>
                  <BuildingList
                    data={this.state.data}
                    selectedUpdate={this.selectedUpdate.bind(this)}
                    filterText={this.state.filterText}
                  />
                </table>
              </div>
            </div>
            <div className="column2">
              <ViewBuilding 
                selectedBuilding={this.state.selectedBuilding}
                data={this.state.data}
              />
              <RemoveBuilding
                selectedBuilding={this.state.selectedBuilding}
                deleteBuilding={this.deleteBuilding.bind(this)}
              />
              <AddBuilding
                createBuilding={this.createBuilding.bind(this)}
              />
            </div>
          </div>
          <Credit />
        </main>
      </div>
    );
  }
}

export default App;

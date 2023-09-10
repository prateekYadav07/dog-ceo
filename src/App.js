import { Component } from "react";
import "./App.css";
import CardList from "./components/card-list/CardList.component";
import { SearchBox } from "./components/searchbox/SearchBox.component";
import { fetchDogCollectionAsync } from "./redux/dog/dog.actions";
import { connect } from "react-redux";
import Dropdown from "./components/dropdown/Dropdown.components";

class App extends Component {
  componentDidMount() {
    this.props.dogCollectionFetchStartAsync();
  }

  // handleChange = (e) => {
  //   this.setState({ searchField: e.target.value });
  // };

  render() {
    return (
      <div className="App">
        <h1>Dog CEO</h1>
        {/* <SearchBox
          placeholder="search monsters"
          // handleChange={this.handleChange}
        /> */}
        {/* <Dropdown breeds={['a','b','c']}/> */}

        <CardList />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  dogCollectionFetchStartAsync: () => {
    dispatch(fetchDogCollectionAsync());
  },
});

export default connect(mapDispatchToProps)(App);

import { Component } from "react";
import "./App.css";
import {
  fetchBreedsAsync,
  fetchDogCollectionAsync,
} from "./redux/dog/dog.actions";
import { connect } from "react-redux";
import Dropdown from "./components/dropdown/Dropdown.components";
import CardListContainer from "./components/card-list/card-list.container";

class App extends Component {
  componentDidMount() {
    const { dogCollectionFetchStartAsync, breedsFetchAsync } = this.props;
    dogCollectionFetchStartAsync();
    breedsFetchAsync();
  }

  // handleChange = (e) => {
  //   this.setState({ searchField: e.target.value });
  // };

  render() {
    return (
      <div className="App">
        <h1>Dog CEO</h1>
        {/* <Dropdown breeds={["a", "b", "c"]} /> */}
        <CardListContainer />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  dogCollectionFetchStartAsync: () => {
    dispatch(fetchDogCollectionAsync());
  },
  breedsFetchAsync: () => {
    dispatch(fetchBreedsAsync());
  },
});

export default connect(null, mapDispatchToProps)(App);

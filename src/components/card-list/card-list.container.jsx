import { connect } from "react-redux";
import CardList from "./CardList.component";
import { createStructuredSelector } from "reselect";
import { selectIsDogCollectionLoading } from "../../redux/dog/dog.selector";
import { compose } from "redux";
import WithSpinner from "../withSpinner/withspinner.components";

const mapStateToProps = createStructuredSelector({
    isLoading: selectIsDogCollectionLoading
})

const CardListContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CardList)

export default CardListContainer
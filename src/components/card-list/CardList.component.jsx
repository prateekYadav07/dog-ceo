import './card-list.styles.css'
import { Card } from '../card/Card.components'
import { createStructuredSelector } from 'reselect';
import { selectDogsCollections } from '../../redux/dog/dog.selector';
import { connect } from 'react-redux';

const CardList = ({ dogCollection }) => {
    // props.children is innerHTML inside this component
    console.log('sdvdsvds',dogCollection);
    return (
        <div className='card-list'>
            {
                dogCollection.map((item) => {
                    return (
                        <Card />
                    )
                })
            }
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    dogCollection: selectDogsCollections
})

export default connect(mapStateToProps)(CardList)
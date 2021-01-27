import React from 'react';
import { connect } from 'react-redux';
import { fetchStreams } from '../../actions';

class StreamList extends React.Component {
    componentDidMount() {
        this.props.fetchStreams();
    }

    renderList = () => {
        return this.props.streams.map(stream => {
            return (
                <div className = "item" key = "{stream.id}">
                    <i className = 'small middle aligned icon camera'></i>
                    <div className = 'content'>
                        {stream.title}
                        <div className = 'description'>{stream.description}</div>
                    </div>
                </div>
            )
        })
    }
    render() {
        // console.log(this.props.streams);
        return (
            <div> 
                <h2>Streams</h2>
                <div className = 'ui segment'>
                    <div className = 'ui relaxed divided list'>{this.renderList()}</div>
                </div>
                
            </div>
        )
    }
}

const mapStateToProps = ( state ) => {
    // converting streams object in state into an array by using Object.values, to render them on to component, 
    return { streams: Object.values(state.streams)}
}

export default connect(mapStateToProps, { fetchStreams })(StreamList);
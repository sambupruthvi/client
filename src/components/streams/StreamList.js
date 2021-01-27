import React from 'react';
import { connect } from 'react-redux';
import { fetchStreams } from '../../actions';
import { Link } from 'react-router-dom';

class StreamList extends React.Component {
    componentDidMount() {
        this.props.fetchStreams();
    }

    // Edit and delete buttons visibility if the user is signedIn or user gets to edit or delete his own stream
    renderAdmin = (stream) => {
        if (stream.userId === this.props.currentUserId) {
            return (
                // converting them into link tags to make URL based selection for editing a record
                <div className = 'right floated content'>
                    <Link className = 'ui button primary' to = {`/streams/edit/${stream.id}`}>Edit</Link>
                    <Link className = 'ui button negative' to = {`/streams/delete/${stream.id}`}>Delete</Link>
                </div>
            )
        }
    }

    // function to check if the user is signed in, if signed in allow them to create a new stream
    renderCreate = () => {
        if (this.props.isSignedIn) {
            return (
                <div style = {{textAlign : 'right'}}>
                    <Link to = '/streams/new' className = 'ui button primary'>Create Stream</Link>
                </div>
            )
        }
    }

    renderList = () => {
        return this.props.streams.map(stream => {
            return (
                <div className = "item" key = {stream.id}>
                    {this.renderAdmin(stream)}
                    <i className = 'small middle aligned icon camera'></i>
                    <div className = 'content'>
                        <div className = 'header'>{stream.title}</div>
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
                {this.renderCreate()}
            </div>
        )
    }
}

const mapStateToProps = ( state ) => {
    // converting streams object in state into an array by using Object.values, to render them on to component, 
    return { 
        streams: Object.values(state.streams),
        currentUserId: state.auth.userId,
        isSignedIn: state.auth.isSignedIn
    }
}

export default connect(mapStateToProps, { fetchStreams })(StreamList);
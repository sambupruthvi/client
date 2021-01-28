import React from 'react';
import Modal from '../Modal';
import history from '../../history';
import { fetchStream, deleteStream } from '../../actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


class StreamDelete extends React.Component {
    // Action creator to attempt and fetchStream with an id
    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id);
    }

    renderActions = () =>{
        return (
            <React.Fragment>
                <div className = 'ui button negative' onClick = {() => this.props.deleteStream(this.props.match.params.id)}>Delete</div>
                <Link className = 'ui button' to = '/'>Cancel</Link>
            </React.Fragment>
        );
    }

    renderContent = () => {
        if (!this.props.stream) {
            return 'Are you sure you want to delete this stream';
        } 
        return `Are you sure you want to delete this stream with title:  ${this.props.stream.title}`;
    }

    render() {
        return (
            <React.Fragment>
                <Modal title = 'Delete Stream' content = {this.renderContent()} actions = {this.renderActions()} onDismiss = {() =>  history.push('/')}/>
            </React.Fragment>
        );
    }
    
}

const mapStateToProps = (state, ownProps) => {
    return {stream : state.streams[ownProps.match.params.id]}
}

export default connect(mapStateToProps, { fetchStream, deleteStream })(StreamDelete);
import React from 'react';
import { connect } from 'react-redux';
import { fetchStream } from '../../actions';

// Router passes history obj as a prop to all its components
class StreamEdit extends React.Component{
    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id);
    }

    render() {
        if (!this.props.stream) {
            return <div>Loading ... </div>
        }
        return (
            <div>{this.props.stream.title}</div>
        )
    }
}

// here ownProps is the same props that our component receives from Router
// ownProps is a reference to props object that shows up in StreamEdit component
const mapStateToProps = (state, ownProps) => {
    return {stream : state.streams[ownProps.match.params.id]}
}

export default connect(mapStateToProps, {fetchStream})(StreamEdit);
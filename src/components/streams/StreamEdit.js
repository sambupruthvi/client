import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { fetchStream, editStream } from '../../actions';
import StreamForm from './StreamForm';

// Router passes history obj as a prop to all its components
class StreamEdit extends React.Component{
    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id);
    }

    onSubmit = (formValues) => {
        this.props.editStream(this.props.match.params.id, formValues);
    }

    render() {
        if (!this.props.stream) {
            return <div>Loading ... </div>
        }
        return (
            <div>
                <h3>Stream Edit</h3>
                {/* Initial value props down to StreamForm, redux form helper sees this prop of initial values as an obj with title and description properties */}
                {/* <StreamForm initialValues = {this.props.stream} onSubmit = {this.onSubmit} /> */}
                <StreamForm initialValues = {_.pick(this.props.stream, 'title', 'description')} onSubmit = {this.onSubmit} />
                {/* Since we are using a json-server for our db it doesn't matter if we send entire stream as an initial value, because in real case senarios we cannot update an id and userid of a field since they can be primary value fields */}
            </div>
        )
    }
}

// here ownProps is the same props that our component receives from Router
// ownProps is a reference to props object that shows up in StreamEdit component
const mapStateToProps = (state, ownProps) => {
    return {stream : state.streams[ownProps.match.params.id]}
}

export default connect(mapStateToProps, {fetchStream, editStream})(StreamEdit);
import React from 'react';
import { connect } from 'react-redux';
import { createStream } from '../../actions';
import StreamForm from './StreamForm';

class StreamCreate extends React.Component {
    onSubmit = (formValues) => {
        this.props.createStream(formValues);
    }

    render(){
        // when we log this.prop we get a ton of properties from reduxForm that we can use
        return (
            <div>
                <h3>Create Form</h3>
                <StreamForm onSubmit = {this.onSubmit} />
            </div>
        )
    };
}


export default connect(null, { createStream })(StreamCreate);
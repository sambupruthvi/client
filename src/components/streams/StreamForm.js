import React from 'react';
import { Field, reduxForm } from 'redux-form';

class StreamForm extends React.Component {
    renderError({touched, error}) {
        if (touched && error) {
            return (
                <div className = 'ui error message'>
                    <div className = 'header'>{error}</div>
                </div>
            )
        }
    }
    renderInput = ({ input, label, meta }) => {
        // console.log(meta);
        const className = `field ${meta.error && meta.touched ? 'error': ''}`
        return (
            <div className = {className}>
                <label>{label}</label>
                <input {...input}/> 
                {this.renderError(meta)}
            </div>
        )
    }
    onSubmit = (formValues) => {
        this.props.onSubmit(formValues);
    }
    render(){
        // when we log this.prop we get a ton of properties from reduxForm that we can use
        return (
            <form onSubmit = {this.props.handleSubmit(this.onSubmit)} className = 'ui form error'>
                <Field name = 'title' component = {this.renderInput} label = "Enter Title"/>
                <Field name = 'description' component = {this.renderInput} label = "Enter Description"/>
                <button className = 'ui button primary'>Submit</button>
            </form>
        )
    };
}

const validate = (formValues) => {
    const error = {};
    if (!formValues.title) {
        error.title = "You must enter a title"
    }
    if (!formValues.description) {
        error.description = "You must enter a description"
    }
    return error;
}


// reduxForms receives a single obj/ configuration as an argument and it is similar to connect function.
export default reduxForm({
    form : 'streamForm',
    validate
})(StreamForm); //reduxForm returns a function and we are immediately calling this function with StreamCreate.
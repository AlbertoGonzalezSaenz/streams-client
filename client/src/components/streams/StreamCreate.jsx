import React from 'react';
import { Field, reduxForm } from 'redux-form'

import Form from '../Form';


const StreamCreate = ({handleSubmit}) => {

    const renderInput = ({input, label, meta}) => {
        return <Form input={input} label={label} meta={meta}/>
    }

    const onSubmit = (formValues) => {
        console.log(formValues)
    }

    // console.log(props)

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="ui form error" >
            <Field 
                name="title" 
                component={renderInput} 
                label="Enter Title"
            />
            <Field 
                name="description" 
                component={renderInput} 
                label="Enter Description"
            />
            <button className="ui button primary">Submit</button>        
        </form>
    );
}

const validate = (formValues) => {
    const errors = {}

    if(!formValues.title){
        errors.title = 'You must enter a title'
    }

    if(!formValues.description){
        errors.description = 'You must enter a description'
    }

    return errors
}

export default reduxForm({
    form: 'streamCreate',
    validate
})(StreamCreate);
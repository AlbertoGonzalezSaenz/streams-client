import React from 'react';

const Form = ({input, label, meta}) => {

    const renderError = ({error, touched}) => {
        if(touched && error){
            return (
                <div className="ui error message">
                    <div className="header">
                        {error}
                    </div>
                </div>)
        }
    }

    const className=`field ${meta.error && meta.touched ?'error' : ''}`

    return (
        <div className={className}>
            <label>{label}</label>
            <input {...input}/>
            {renderError(meta)}
        </div>
    );
}

export default Form;
import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import * as actions from '../../actions';
import { connect } from 'react-redux';

class Signin extends Component {
    handleFormSubmit(values, dispatch, props) {
        const { email, password } = values;
        dispatch(actions.signinUser({email, password}));
    }

    renderField = ({ input, placeholder }) => (
        <div>
            <input {...input} placeholder={placeholder}/>
        </div>
    )

    render() {
        const { handleSubmit } = this.props;
        const { renderField, handleFormSubmit, submmiting } = this;
        return (
            <form onSubmit={handleSubmit(handleFormSubmit)}>
                <Field name="email" component={renderField} placeholder="email"/>
                <Field name="password" component={renderField} placeholder="password"/>
                <button type="submit" className="btn btn-primary" disabled={submmiting}>
                    Sign in
                </button>
            </form>
        )
    }
}

export default reduxForm({
    form: 'signin',
})(Signin)
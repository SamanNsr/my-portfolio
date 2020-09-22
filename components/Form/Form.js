import React, { useState } from 'react';
import Router from 'next/router';

import Input from '../UI/Input/Input';
import Button from '../UI/Button/Button';
import Spinner from '../UI/Spinner/Spinner';
import { updateObject, checkValidity } from '../../shared/utility';

const contact = (props) => {
  const [form, setForm] = useState({
    name: {
      elementType: 'input',
      elementConfig: {
        type: 'text',
        placeholder: 'Your Name',
      },
      value: '',
      validation: {
        required: true,
      },
      valid: false,
      touched: false,
    },
    email: {
      elementType: 'input',
      elementConfig: {
        type: 'email',
        placeholder: 'Your E-Mail',
      },
      value: '',
      validation: {
        required: true,
        isEmail: true,
      },
      valid: false,
      touched: false,
    },
    message: {
      elementType: 'textarea',
      elementConfig: {
        type: 'text',
        placeholder: 'Message',
      },
      value: '',
      validation: {
        required: true,
      },
      valid: false,
      touched: false,
    },
  });
  const [formIsValid, setFormIsValid] = useState(false);

  const formHandler = (event) => {
    event.preventDefault();

    const formData = {};
    for (let formElementIdentifier in form) {
      formData[formElementIdentifier] = form[formElementIdentifier].value;
    }
    props.sendReq(formData);
  };

  const inputChangedHandler = (event, inputIdentifier) => {
    const updatedFormElement = updateObject(form[inputIdentifier], {
      value: event.target.value,
      valid: checkValidity(
        event.target.value,
        form[inputIdentifier].validation
      ),
      touched: true,
    });
    const updatedform = updateObject(form, {
      [inputIdentifier]: updatedFormElement,
    });

    let formIsValid = true;
    for (let inputIdentifier in updatedform) {
      formIsValid = updatedform[inputIdentifier].valid && formIsValid;
    }
    setForm(updatedform);
    setFormIsValid(formIsValid);
  };
  const formElementsArray = [];
  for (let key in form) {
    formElementsArray.push({
      id: key,
      config: form[key],
    });
  }

  let sendButton = (
    <Button Success click={formHandler}>
      {props.loading ? <Spinner loading={props.loading} /> : 'Send'}
    </Button>
  );

  if (!formIsValid) {
    sendButton = (
      <Button disabled click={(event) => event.preventDefault()}>
        Send
      </Button>
    );
  }

  let formOutput = (
    <form className="mt-8">
      <div className="mx-auto max-w-lg ">
        {formElementsArray.map((formElement) => (
          <Input
            key={formElement.id}
            elementType={formElement.config.elementType}
            elementConfig={formElement.config.elementConfig}
            value={formElement.config.value}
            invalid={!formElement.config.valid}
            shouldValidate={formElement.config.validation}
            touched={formElement.config.touched}
            changed={(event) => inputChangedHandler(event, formElement.id)}
          />
        ))}
        {sendButton}
        <Button Danger click={() => Router.push('/')}>
          Back
        </Button>
      </div>
    </form>
  );

  return <div>{formOutput}</div>;
};

export default contact;

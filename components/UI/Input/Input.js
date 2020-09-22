import React from 'react';

const Input = (props) => {
  let inputElement = null;
  const inputClasses = [
    'text-md',
    'block',
    'px-3',
    'py-2',
    'rounded-lg',
    'w-full',
    'bg-white',
    'border-2',
    'border-gray-300',
    'placeholder-gray-600',
    'shadow-md',
    'focus:placeholder-gray-500',
    'focus:bg-white',
    'focus:border-gray-600',
    'focus:outline-none',
  ];
  if (props.invalid && props.shouldValidate && props.touched) {
    inputClasses.push('border-red-300');
  }
  switch (props.elementType) {
    case 'input':
      inputElement = (
        <input
          className={inputClasses.join(' ')}
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
        />
      );
      break;
    case 'textarea':
      inputElement = (
        <textarea
          className={inputClasses.join(' ')}
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
        />
      );
      break;
    default:
      inputElement = (
        <input
          className={inputClasses.join(' ')}
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
        />
      );
  }
  return (
    <div className="py-1">
      <span className="px-1 text-sm text-gray-600">{props.label}</span>
      {inputElement}
    </div>
  );
};

export default Input;

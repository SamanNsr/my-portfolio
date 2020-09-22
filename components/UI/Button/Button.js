import React from 'react';

function Button(props) {
  let buttonClass = [
    'mt-3',
    'text-lg',
    'font-semibold',
    'w-full',
    'text-white',
    'rounded-lg',
    'px-6',
    ' py-3',
    'block',
    'shadow-xl',
    'hover:text-white',
  ];
  if (props.Success) {
    buttonClass.push('bg-gray-800', 'hover:bg-gray-900');
  }
  if (props.Danger) {
    buttonClass.push('bg-red-500', 'hover:bg-red-800');
  }
  if (props.disabled) {
    buttonClass.push('bg-gray-500', 'cursor-not-allowed');
  }
  return (
    <div>
      <button className={buttonClass.join(' ')} onClick={props.click}>
        {props.children}
      </button>
    </div>
  );
}

export default Button;

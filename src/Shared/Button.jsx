import React from 'react';

function Button(props) {
  return (
    <button className='rounded border-[1px] bg-transparent py-2 px-3 outline-none hover:bg-zinc-900 hover:text-white'>
      {props.name}
    </button>
  );
}

export default Button;

import React from 'react';

function Button(props) {
  return (
    <button className='rounded border-[1px] border-zinc-300 bg-transparent p-2 text-sm outline-none hover:bg-zinc-900 hover:text-white'>
      {props.name}
    </button>
  );
}

export default Button;

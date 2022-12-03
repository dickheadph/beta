import React from 'react';

function Button(props) {
  return (
    <button className='rounded border-[1px] border-zinc-300 bg-transparent p-2 outline-none hover:bg-zinc-900 hover:text-white text-sm'>
      {props.name}
    </button>
  );
}

export default Button;

import React from 'react';

function Button(props) {
  return (
    <button className='rounded border-[1px] border-zinc-300 bg-zinc-900 p-2 text-sm text-white outline-none'>
      {props.name}
    </button>
  );
}

export default Button;

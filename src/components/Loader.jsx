import React from 'react';
import { InfinitySpin } from 'react-loader-spinner';

const Loader = () => {
  return (
    <div className='loader'>
        <InfinitySpin color='var(--clr-grey-4)'/>
    </div>
  )
}

export default Loader;
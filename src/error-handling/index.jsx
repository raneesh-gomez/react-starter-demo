import { useState } from 'react';

const SampleError = () => {
    const [count, setCount] = useState(0);

    const incrementCount = () => {
        setCount(count + 1);
    }
    

    if (count > 0) {
        throw new Error('This is a render error!');
    }

    return (
        <div className='body justify-content-center'>
            <h5 className='mt-3 mb-3'>The current count is: <b>{count}</b></h5>
            <button className='btn btn-danger col-2' onClick={incrementCount}>Increment</button>
        </div>
        
    )
};

export default SampleError;
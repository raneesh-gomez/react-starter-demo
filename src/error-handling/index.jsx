import { useState } from 'react';

const SampleError = () => {
    const [count, setCount] = useState(0);

    const incrementCount = () => {
        setCount(count + 1);
    }
    

    if (count > 0) {
        throw new Error('This is a render error!');
    }
    return <button onClick={incrementCount}>Increment</button>
};

export default SampleError;
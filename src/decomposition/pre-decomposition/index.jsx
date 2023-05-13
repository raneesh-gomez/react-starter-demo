import { useState } from 'react';

const PreDecomposition = () => {
    const [count, setCount] = useState(0);

    return (
        <div>
            <div className='header'>
                <h1>Header</h1>
            </div>
            <div className='body'>
                <h2>Body</h2>
                <h5 className='mt-3 mb-3'>The current count is: <b>{count}</b></h5>
                <button className='btn btn-primary col-2' onClick={() => setCount(count + 1)}>Increment</button>
            </div>
            <div className='footer'>
                <h5 className='mt-3 mb-3'>Footer</h5>
                <span>Copyright &copy; 2023</span>
            </div>
        </div>
    )
}

export default PreDecomposition;
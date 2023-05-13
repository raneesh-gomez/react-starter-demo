import { useState } from 'react';

const PreDecomposition = () => {
    const [count, setCount] = useState(0);

    return (
        <div>
            <div className='header'>
                <h1>My App</h1>
            </div>
            <div className='body'>
                <h2>Main Content</h2>
                <p>This is the main content of my app. The current count is: {count}</p>
                <button onClick={() => setCount(count + 1)}>Increment</button>
            </div>
            <div className='footer'>
                <span>Copyright &copy; 2023</span>
            </div>
        </div>
    )
}

export default PreDecomposition;
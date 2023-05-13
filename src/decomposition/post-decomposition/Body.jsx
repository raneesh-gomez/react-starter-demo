const Body = ({ count, setCount }) => {
    return (
        <div className='body'>
            <h2>Main Content</h2>
            <p>This is the main content of my app. The current count is: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
};

export default Body;
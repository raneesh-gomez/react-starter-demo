const Body = ({ count, setCount }) => {
    return (
        <div className='body'>
            <h2>Body</h2>
            <h5 className='mt-3 mb-3'>The current count is: <b>{count}</b></h5>
            <button className='btn btn-primary col-2' onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
};

export default Body;
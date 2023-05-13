import { useState } from 'react';

import Header from './Header';
import Body from './Body';
import Footer from './Footer';

const PostDecomposition = () => {
    const [count, setCount] = useState(0);

    return (
        <div>
            <Header />
            <Body count={count} setCount={setCount} />
            <Footer />
        </div>
    );    
};

export default PostDecomposition;
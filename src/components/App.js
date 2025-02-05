import React from 'react';
import Form from './form';

const App = () => {
    const [data, setData] = useState(null);

    return (
        <div>
            <Form setData={setData} />
        </div>
    );
};

export default App;
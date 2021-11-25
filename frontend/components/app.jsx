import React from 'react';
import { Route } from 'react-router-dom';

import { Signup } from './temp/signup';

const App = () => {
    return (
        <div>
            <Route path="/signup" component={Signup} />
        </div>
    )
}

export default App;
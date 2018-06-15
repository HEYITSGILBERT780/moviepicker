import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MovieApp from './MovieApp';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<MovieApp />, document.getElementById('root'));
registerServiceWorker();

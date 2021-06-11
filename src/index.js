import React from 'react'; //importing whole react module
import ReactDOM from 'react-dom'; //importing reactDOM module. Virtual DOM renders actual react components
import './index.css';
import App from './App'; // import App so it can be used in render method
import registerServiceWorker from './registerServiceWorker'; //vitals?

ReactDOM.render(<App />, document.getElementById('root')); //this is what actually renders. 2 parameters first is what you want to render second where--div with ID of "root"
registerServiceWorker();

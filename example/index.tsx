import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
// the importing location is automatically `dist` folder
import { Thing, Button } from '../.';
const App = () => {
  return (
    <div>
      <Thing />
      <Button text="test" />
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById('root'));

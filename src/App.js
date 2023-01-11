import { PureComponent } from 'react';
import Calculator from './components/calculator';

class App extends PureComponent {
  render() {
    return (
      <div className="App">
        <Calculator />
      </div>
    );
  }
}

export default App;

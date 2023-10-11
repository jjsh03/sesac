import CssModuleComponents from './CssModuleComponents';
import SassComponents from './SassComponent';
import StyledComponent from './StyledComponent';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <h1>React Styling</h1>

      <h2>CSS Module</h2>
      <CssModuleComponents />

      <h2>SASS Module</h2>
      <SassComponents />

      <h2>Styled Component</h2>
      <StyledComponent />
    </div>
  );
}

export default App;

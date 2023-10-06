import Faq from './Components/Faq';
import UseCallbackEx from './Components/UseCallbackEx';
import UseCallbackEx2 from './Components/UseCallbackEx2';
import UseMemoEx from './Components/UseMemoEx';
import UseReducerEx from './Components/UseReducerEx';
import useTitle from './hooks/useTitle';

function App() {
  useTitle('React Hooks 연습중입니당');
  return (
    <div className="App">
      <UseMemoEx />
      <hr />

      <UseCallbackEx />
      <hr />

      <UseCallbackEx2 postId={7} />
      <hr />

      <UseReducerEx />
      <hr />

      <Faq />
    </div>
  );
}

export default App;
import LifeCycleClass from './LifeCycleClass';
import LifeCycleFunc from './LifeCycleFunc';
import RefSample1 from './RefSample1';
import RefSample2 from './RefSample2';
import RefSample3 from './RefSample3';
import RefSample4 from './RefSample4';

function App() {
  return (
    <div className="App" style={{ marginBottom: '400px' }}>
      {/* 함수형 컴포넌트: userRef()로 DOM 요소에 직접 접근 */}
      <RefSample1 />
      <hr />

      {/* 함수형 컴포넌트: userRef()로 로컬변수 사용 */}
      <RefSample2 />
      <hr />

      {/* 클래스형 컴포넌트: ref 사용방법 1. 콜백함수 */}
      <RefSample3 />
      <hr />

      {/* 클래스형 컴포넌트: ref 사용방법 2. createRef() */}
      <RefSample4 />
      <hr />

      <LifeCycleFunc />
      <hr />

      <LifeCycleClass />
    </div>
  );
}

export default App;

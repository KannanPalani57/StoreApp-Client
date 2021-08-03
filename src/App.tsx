
import './App.css';
import Header from './common/Header/Header'

import Main from './common/Main/Main'

 
function App() {
  const color1 = "rgb(234 234 234);";
  const color2 = "#ffffff";
  return (
    <div 
    style={{ 
      background: `linear-gradient(${color1} 100%,${color2} 100%)`}}>
      <Header  />
      <Main/>

    </div>
  );
}

export default App;

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderBar from './components/HeaderBar';

function App() {
  return (
    <div className="App">
      <HeaderBar />
      <h1>
        Covid Maps
      </h1>
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <iframe src="https://public.domo.com/cards/dG1jy" width="100%" height="600" marginheight="0" marginwidth="0" frameborder="0"></iframe>
          </div>
          <div class="col-lg-6">
          <iframe src="https://public.domo.com/cards/axpDJ" width="100%" height="600" marginheight="0" marginwidth="0" frameborder="0"></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

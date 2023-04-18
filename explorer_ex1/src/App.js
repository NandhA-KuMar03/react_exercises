import './App.css';
import './css/styles.css';

import HeaderFunction from './components/headerComponent';
import PromoExploreFunction from './components/promoExploreComponent';
import DestinationComponent from './components/destinationsComponent';

function App() {
  return (
    <div className="App">
      <HeaderFunction/>
      <PromoExploreFunction/>
      <DestinationComponent/>
    </div>
  );
}

export default App;

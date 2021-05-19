import Header from './components/Header'
import Hashtitle from './components/Hashtitle'
import Weather from './components/Weather'

import Map from './components/Map'
import Scraping from './components/Scraping'
import CMSnews from './components/CMSnews'

function App() {
  // const name="xuchen"
  return (
    <div className="container">
      <Header />
      <Hashtitle />
      <Weather/>
      <Map/>
      <Scraping/>
      <CMSnews/>

    </div>

  );
}


export default App;

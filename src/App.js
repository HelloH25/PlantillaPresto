import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import "./Style/bootstrap.css"
import "./Style/fonts.css"
import "./Style/style.css"
import Rutas from './Routes/rutas';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTwitter, faFontAwesome, faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faMap } from '@fortawesome/free-solid-svg-icons';

library.add(faTwitter, faFontAwesome, faFacebook, faMap)

function App() {
  return (
    <div>
      <Rutas/>

      {/* <div className="ie-panel">
        <a href="http://windows.microsoft.com/en-US/internet-explorer/">
          <img src="images/ie8-panel/warning_bar_0000_us.jpg" height="42" width="820" alt="You are using an outdated browser. For a faster, safer browsing experience, upgrade for free today." />
        </a>
      </div>
      <div className="preloader">
        <div className="preloader-body">
          <div className="cssload-container">
            <div className="cssload-speeding-wheel"></div>
          </div>
          <p>Loading...</p>
        </div>
      </div> */}

    </div>
  );
}



export default App;

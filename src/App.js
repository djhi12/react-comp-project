import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './components/header/Header.css';
import './App.css';

import componentImage from './img/components.png';
import stateImage from './img/state.png';
import eventImage from './img/events.png';
// import keyConcepts from './img/key-concepts.png';

import Concepts from './components/concepts/Concepts';
import Header from './components/header/Header';


const concepts = [
  {
    title: 'Components',
    image: componentImage,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean elementum risus quis quam rhoncus, ac viverra nibh porttitor.'
  },
  {
    title: 'State',
    image: stateImage,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean elementum risus quis quam rhoncus, ac viverra nibh porttitor.'
  },
  {
    title: 'Events',
    image: eventImage,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean elementum risus quis quam rhoncus, ac viverra nibh porttitor.'
  },

];

function App() {
  return (
    <div className="App">
      {/* Header */}
      <Header />

      {/* Card */}
      <div className="container container-border">
        <div class="row row-border">
          <div class="col-sm concept">
            <Concepts
              title={concepts[0].title}
              image={concepts[0].image}
              description={concepts[0].description}
            />
          </div>
          <div class="col-sm concept">
            <Concepts
              title={concepts[1].title}
              image={concepts[1].image}
              description={concepts[1].description}
            />
          </div>
          <div class="col-sm concept">
            <Concepts
              title={concepts[2].title}
              image={concepts[2].image}
              description={concepts[2].description}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

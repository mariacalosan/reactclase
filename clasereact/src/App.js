// app es el componente padre que le hereda a su hijo el componente NavBar
// importe el componente de NavBar 
import Detail from './Detail';
import NavBar from './NavBar';
import Pet from './pet';


function App() {
  return (
    <div className="App">
      <NavBar title="PetApp"></NavBar>
      <Pet name="luna" animal="dog" breed="havanese"/>
      <Pet name="pepper" animal="bird" breed="cockatiel"/>
      <Detail id="44895939"/>
    </div>
  );
}

export default App;

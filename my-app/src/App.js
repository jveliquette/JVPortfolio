import logo from './pic-1.png';
import './App.css';
import Header from './Header.js'

function App() {
  return (
    <div className="App">
      <Header />
      <body>
        <nav></nav>
        <section id="profile"></section>
        <section id="about"></section>
        <section id="experience"></section>
        <section id="projects"></section>
        <section id="contact"></section>
        <div className="photos"></div>
      </body>
      <footer></footer>
    </div>
  );
}

export default App;

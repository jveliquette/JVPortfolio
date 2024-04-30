import logo from './pic-1.png';

function Header () {
    return (
        <header className="App-header">
        <p>Hello, I'm</p>
        <h1>Julia Veliquette</h1>
        <p>Software Developer</p>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    )
}

export default Header;

import '../header/Header.css';
import keyConcepts from '/Users/djidorot/Documents/GitHub/react-comp-project/src/img/key-concepts.png';

function Header() {

    return (
        <header className="header bg-warning">
            <div class="sub-header">
                <img className="img-header" src={keyConcepts} alt="Medal Badge with Star" />
                <h5>Key React Components</h5>
                <p>Selected key React concepts you should know about.</p>
            </div>
        </header>
    );
}

export default Header;
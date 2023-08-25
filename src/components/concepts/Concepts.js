import '../concepts/Concepts.css'

function Concepts(props) {

    return (
        <div>
            <div class="card">
                <div class="card-body">
                    <img className="img-concepts" src={props.image} alt="Component" />
                    <h2>{props.title}</h2>
                    <p>{props.description}</p>
                </div>
            </div>
        </div>
    );
}

export default Concepts;
import Title from '../Title';
import Form from '../Form';
import './container.css';

export default function Container() {
    return (
        <div className="container">
            <Title text="Contato" />
            <Form />
        </div>
    );
}


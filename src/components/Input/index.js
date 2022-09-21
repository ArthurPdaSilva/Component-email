import './input.css';

export default function Input({ type, placeholder, state, value}) {
    return <input type={type} placeholder={placeholder} onChange={(e) => state(e.target.value)} value={value} />;
}


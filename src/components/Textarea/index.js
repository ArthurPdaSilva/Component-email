import './textarea.css';

export default function Textarea({ placeholder, state, value }) {
    return <textarea placeholder={placeholder} onChange={(e) => state(e.target.value)} value={value} />;
}


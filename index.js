import { useState } from 'react';
import ReactMarkdown from 'react-markdown';

export default function MarkdownEditor() {
    const [markdown, setMarkdown] = useState('type markdown here');

    const handleChange = (e) => {
        setMarkdown(e.target.value);
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <textarea
                value={markdown}
                onChange={handleChange}
                style={{ width: '50%', height: '200px', marginBottom: '20px' }}
            />
            <div style={{ width: '50%', border: '1px solid #ddd', padding: '10px' }}>
                <ReactMarkdown>{markdown}</ReactMarkdown>
            </div>
        </div>
    );
}
function reverseSentence(sentence) {
    return sentence
        .split(' ')
        .reverse()
        .join(' ')
        .replace(/^\w/, (c) => c.toUpperCase());
}

console.log(reverseSentence("hello world from github copilot"));

data.forEach(group => {
    group.forEach(person => {
        console.log(`${person.name} is ${person.age} years old.`);
    });
});
const data = [
    [
        { name: 'John', age: 30 },
        { name: 'Jane', age: 25 }
    ],
    [
        { name: 'Bob', age: 35 }
    ]
];

const names = data.flatMap(group => group.map(person => person.name));
console.log(names); // ['John', 'Jane', 'Bob']
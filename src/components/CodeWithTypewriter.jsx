import React, { useState, useEffect } from 'react';
import Prism from 'prismjs';
import 'prismjs/themes/prism-okaidia.css'; // Choose the theme you like

// Custom hook for typewriter effect
const useTypewriter = (code) => {
    const [typedCode, setTypedCode] = useState('');

    useEffect(() => {
        if (code && code.length > 0) {
            const timeoutId = setTimeout(() => {
                setTypedCode((prev) => code.substring(0, prev.length + 1));
            }, 5); // Adjust typing speed

            return () => clearTimeout(timeoutId);
        }
    }, [code, typedCode]);

    return typedCode;
};

const CodeWithTypewriter = ({ code }) => {
    const typedCode = useTypewriter(code);

    useEffect(() => {
        Prism.highlightAll();
    }, [typedCode]);

    return (
        <pre className="bg-gray-800! rounded-lg overflow-auto text-left bg-semi-dark-grey">
            <code className="language-html">{typedCode}</code>
        </pre>
    );
};

export default CodeWithTypewriter;

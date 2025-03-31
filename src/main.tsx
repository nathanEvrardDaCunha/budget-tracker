import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './app';

try {
    const rootElement = document.getElementById('root');

    if (rootElement === null) {
        throw new Error('Html root element should never be null !');
    }

    createRoot(rootElement).render(
        <StrictMode>
            <App />
        </StrictMode>
    );
} catch (error) {
    console.error(error);
}

//
// Main Goal : Clean the codebase before continuing
// => There is too much technical debt so refactor / abstract / remove some part to make it easier / shorter / flexible
// => The bare minimum is to follow the TODO and IDEA comments if they are still relevant
//

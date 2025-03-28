import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './app';

const rootElement = document.getElementById('root');

if (rootElement === null) {
    throw new Error('Html root element should never be null !');
}

createRoot(rootElement).render(
    <StrictMode>
        <App />
    </StrictMode>
);

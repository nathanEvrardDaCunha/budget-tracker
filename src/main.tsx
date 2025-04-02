import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './app';

try {
    const rootElement = document.getElementById('root');

    if (!rootElement) {
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

import React from 'react';
import { hot } from 'react-hot-loader';
import Container from './Container'
import ErrorBoundary from './ErrorBoundary'

const App = () => (
    <ErrorBoundary>
        <Container />
    </ErrorBoundary>
);

export default App;
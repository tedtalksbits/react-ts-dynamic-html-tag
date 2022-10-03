import React from 'react';
import './App.css';
import Card from './component/Card';
import { Container } from './component/styled-components/Container';

function App() {
    const [elements = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6']] =
        React.useState<Array<keyof React.ReactHTML>>();

    return (
        <div className='App'>
            <Container>
                {elements.map((element) => (
                    <Card
                        title='Title'
                        titleElement={element}
                        body='lorem Ipsum'
                    />
                ))}
            </Container>
        </div>
    );
}

export default App;

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('Get homepage title', () => {
  const { getByText } = render(<App />);
  getByText(/Women's World Cup Players/i);
  });

test('Find a player card', () => {
  const {getByTestId} = render(<App />);
  getByTestId('player-card');
});

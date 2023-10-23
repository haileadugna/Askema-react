import React from 'react'
import image1 from '../../Assets/brake.jpg'
import CardRotator from './services';

const cards = [
  { image: {image1}, title: 'Item 1', description: 'Description for Item 1' },
  { image: {image1}, title: 'Item 2', description: 'Description for Item 2' },
  { image: {image1}, title: 'Item 3', description: 'Description for Item 3' },
  { image: {image1}, title: 'Item 4', description: 'Description for Item 4' },
  { image: {image1}, title: 'Item 5', description: 'Description for Item 5' },
];

function App() {
  return (
    <div className="App">
      <CardRotator cards={cards} />
    </div>
  );
}

export default App;

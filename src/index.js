import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyDWxQmnqZ-vZ9QuH_M79kOlH3JUEGeVeog';

//create a component that creates/produces html
const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
};

// take generated html and apply to DOM
ReactDOM.render(<App />, document.querySelector('.container'));

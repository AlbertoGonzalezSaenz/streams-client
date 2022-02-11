import React from 'react'
import  { Route } from 'react-router-dom'


import Header from './components/Header';
import StreamList from './components/streams/StreamList';
import StreamShow from './components/streams/StreamShow';
import StreamCreate from './components/streams/StreamCreate';
import StreamEdit from './components/streams/StreamEdit';
import StreamDelete from './components/streams/StreamDelete';

const App = () => {
  return (
    <div className="ui container">
      <Header/>
        <div>
          <Route path="/" exact component={StreamList} />
          <Route path="/streams/new" exact component={StreamCreate} />
          <Route path="/streams/edit" exact component={StreamEdit} />
          <Route path="/streams/delete" exact component={StreamDelete} />
          <Route path="/streams/show" exact component={StreamShow} />
        </div>
    </div>
  );
}

export default App;

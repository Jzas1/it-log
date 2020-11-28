import React, { Fragment, useEffect} from 'react';
import SearchBar from './components/layout/SearchBar'
import Logs from './components/Logs/Logs'
import AddBtn from './components/layout/AddBtn'
import AddLogModal from './components/Logs/AddLogModal'
import EditLogModal from './components/Logs/EditLogModal'

import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css/dist/js/materialize.min.js'
import './App.css';

const App = () =>  {
  useEffect(() => {
    M.AutoInit()
  })
  return <Fragment>
    <SearchBar />

    <div className='container'>
      <AddBtn />
      <Logs />
      <AddLogModal />
      <EditLogModal />
    </div>
  </Fragment>
}

export default App;

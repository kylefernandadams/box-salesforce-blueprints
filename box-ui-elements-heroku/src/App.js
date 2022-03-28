

import React from 'react';
import { BrowserRouter as Router , Switch, Route } from "react-router-dom";

import './App.css';
import 'box-ui-elements/es/styles/base.scss';
import ContentExplorer from './components/ContentExplorer';
import ContentExplorerRecents from './components/ContentExplorerRecents';
import ContentPicker from './components/ContentPicker';
import ContentUploader from './components/ContentUploader';
import ContentPreview from './components/ContentPreview';

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route exact path="/" render={() => <ContentExplorer  folderId={'0'}/>}/>
          <Route exact path="/explorer/:folderId" render={(props) => <ContentExplorer folderId={props.match.params.folderId}/>}/>
          <Route exact path="/recents/:userId" render={(props) => <ContentExplorerRecents userId={props.match.params.userId}/>}/>
          <Route exact path="/picker/:folderId" render={(props) => <ContentPicker  folderId={props.match.params.folderId}/>}/>
          <Route exact path="/uploader/:folderId" render={(props) => <ContentUploader  folderId={props.match.params.folderId}/>}/>
          <Route exact path="/preview/:fileId" render={(props) => <ContentPreview  fileId={props.match.params.fileId}/>}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

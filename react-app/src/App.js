import './App.css';
import TOC from './components/TOC';
import Content from './components/Content';
import Subject from './components/Subject';

import { Component } from 'react';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      subject:{title:'WEB_S', sub:'World Wide Web_Sub'},
      content:[
        {id:1, title='HTML', desc='HTML is Good'},
        {id:2, title='CSS', desc='CSS is for design'},
        {id:3, title='JavaScript', desc='JavaScript is difficult'}
      ]
    }
  }

  render() {
    return (
      <div className="App">
        <Subject 
        title={this.state.subject.title} 
        sub={this.state.subject.sub}>
        </Subject>
        <TOC></TOC>
        <Content title="HTMLL" desc="HTML is HyperText Markup Language.."></Content>
      </div>
    );
  }
}

export default App;

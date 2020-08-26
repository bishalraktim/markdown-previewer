import React, {Component} from 'react';
import Aux from '../../hoc/Aux/Aux';
import classes from './Editor.module.css';
import Previewer from '../Previewer/Previewer';
import MarkdownPreview from '@uiw/react-markdown-preview';
import Button from '../Button/Button';
import Button2 from '../Button2/Button2';

class Editor extends Component {
  state = {
    input: `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbererd lists too.
1. Use just 1s if you want!
1. But the list goes on...
- Even if you use dashes or asterisks.
* And last but not least, let's not forget embedded images:

![React Logo w/ Text](https://goo.gl/Umyytc)
`,
    click1: false,
    click2: false
  }

  changeHandler = (e) => {
    this.setState({
      input: e.target.value
    });
  }


  clickHandler1 = () => {
    this.setState({
      click1: !this.state.click1
    });
  }

  clickHandler2 = () => {
    this.setState({
      click2: !this.state.click2
    });
  }

  render(){
    let styles;
    let preview;
    let button1 = (<Button click1={this.clickHandler1.bind(this)} clicks={this.state.click1} />);
    let button2 = (<Button2 click2={this.clickHandler2.bind(this)} clicks={this.state.click2} />);

    if(this.state.click1){
      styles = classes.editorMax;
      preview = null;
      button2 = null;
    }
    else {
      styles = classes.editor;
      preview = (
        <Previewer class={this.state.click2}>
          <MarkdownPreview source={this.state.input} />
        </Previewer>
      );
    }

    if(this.state.click2){
      styles = classes.display;
      button1 = null;
    }

    return(
      <Aux>
        <div className={classes.center}>
          {button1}
          <textarea className={styles}
            onChange={this.changeHandler.bind(this)}
            value={this.state.input} id='editor' />
        </div>
        {button2}
        {preview}
      </Aux>
    );
  }
}

export default Editor;

import React from 'react';
import Aux from '../../hoc/Aux/Aux';
import classes from './Previewer.module.css';

const Previewer = (props) => {
  let styles = classes.preview;

  if(props.class){
    styles = classes.previewMax;
  }

  return(
    <Aux>
      <div className={styles} id='preview'>
        {props.children}
      </div>
    </Aux>
  );
}

export default Previewer;
 

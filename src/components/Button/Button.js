import React from 'react';
import Aux from '../../hoc/Aux/Aux';
import classes from './Button.module.css';

const Button = (props) => {
  let display;
  let show = null;

  if(props.clicks){
    display = classes.displayMax;
    show = (<i className="fas fa-compress-alt"></i>);
  } else {
    display = classes.display;
    show = (<i className="fa fa-arrows-alt"></i>);
  }

  return(
    <Aux>
      <div className={display}>
        <div>
          <i className="fab fa-free-code-camp" title='no-stack-dub-sack'
            style={{margin: '0 10px', fontSize: '18px'}}>
          </i>
          Editor
        </div>
        <div className={classes.Button} onClick={props.click1 || props.click2}>
          {show}
        </div>
      </div>
    </Aux>
  );
}

export default Button;

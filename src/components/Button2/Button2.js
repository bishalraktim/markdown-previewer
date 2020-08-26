import React from 'react';
import Aux from '../../hoc/Aux/Aux';
import classes from './Button2.module.css';

const Button2 = (props) => {
  let show;
  let display;
  if(props.clicks){
    display = [classes.display, classes.width].join(' ');
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
          Previewer
        </div>
        <div className={classes.Button} onClick={props.click2}>
        {show}
        </div>
      </div>
    </Aux>
  );
}

export default Button2;

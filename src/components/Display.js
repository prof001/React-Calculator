import React from 'react';

const Display = props => {
  return (
    <div>
      <input
        type='text'
        id='display2'
        className='form-control'
        style={{ margin: 0 }}
        value={props.showExpression}
        disabled
      />
      <input
        type='text'
        id='display1'
        className='form-control'
        style={{ margin: 0 }}
        value={props.showAnswer === 0 ? props.currentNumber : props.showAnswer}
        disabled
      />
    </div>
  );
};

export default Display;

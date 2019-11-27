import React from 'react';

const Keypad = props => {
  const recieveNumber = e => {
    props.displayNumber(e.target.value);
    // console.log(e.target.value);
  };

  return (
    <div>
      <div className='button-row'>
        <button
          className='btn btn-default'
          id='controlButtons'
          onClick={props.onClearAll}
        >
          CE
        </button>
        <button
          className='btn btn-default'
          onClick={props.onClear}
          id='controlButtons'
        >
          C
        </button>
        <button
          className='btn btn-nums'
          onClick={props.onDelete}
          id='controlButtons'
        >
          &larr;
        </button>
        <button
          className='btn btn-nums'
          onClick={props.onDivide}
          id='controlButtons'
        >
          &divide;
        </button>
      </div>
      <div className='button-row'>
        <button
          className='btn btn-default'
          id='numButtons'
          value='7'
          onClick={recieveNumber}
        >
          7
        </button>
        <button
          className='btn btn-default'
          value='8'
          onClick={recieveNumber}
          id='numButtons'
        >
          8
        </button>
        <button
          className='btn btn-nums'
          value='9'
          onClick={recieveNumber}
          id='numButtons'
        >
          9
        </button>
        <button
          className='btn btn-nums'
          onClick={props.onTimes}
          id='controlButtons'
        >
          &times;
        </button>
      </div>
      <div className='button-row'>
        <button
          className='btn btn-default'
          value='4'
          onClick={recieveNumber}
          id='numButtons'
        >
          4
        </button>
        <button
          className='btn btn-default'
          value='5'
          onClick={recieveNumber}
          id='numButtons'
        >
          5
        </button>
        <button
          className='btn btn-nums'
          value='6'
          onClick={recieveNumber}
          id='numButtons'
        >
          6
        </button>
        <button
          className='btn btn-nums'
          onClick={props.onMinus}
          id='controlButtons'
        >
          &minus;
        </button>
      </div>

      <div className='button-row'>
        <button
          className='btn btn-default'
          value='1'
          onClick={recieveNumber}
          id='numButtons'
        >
          1
        </button>
        <button
          className='btn btn-default'
          value='2'
          onClick={recieveNumber}
          id='numButtons'
        >
          2
        </button>
        <button
          className='btn btn-default'
          value='3'
          onClick={recieveNumber}
          id='numButtons'
        >
          3
        </button>
        <button className='btn' onClick={props.onPlus} id='controlButtons'>
          +
        </button>
      </div>

      <div className='button-row'>
        <button className='btn btn-default' id='numButtons'>
          &plusmn;
        </button>
        <button
          className='btn btn-default'
          value='0'
          onClick={recieveNumber}
          id='numButtons'
        >
          0
        </button>
        <button className='btn btn-nums' onClick={props.onDot} id='numButtons'>
          .
        </button>
        <button
          className='btn btn-nums'
          id='controlButtons'
          onClick={props.onEquals}
          style={{ color: 'green' }}
        >
          =
        </button>
      </div>
    </div>
  );
};

export default Keypad;

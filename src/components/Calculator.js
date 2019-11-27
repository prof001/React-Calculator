import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHistory } from '@fortawesome/free-solid-svg-icons';

import Display from './Display';
import Keypads from './Keypads';
import History from './History';

class Calculator extends React.Component {
  state = {
    currentNumber: 0,
    expression: '',
    currentAnswer: 0,
    showHistory: false,
    history: [],
    hasHistory: false
  };

  displayNumber = num => {
    if (this.state.currentNumber === 0 || this.state.currentNumber === '') {
      this.setState(() => ({
        currentAnswer: 0,
        currentNumber: num
      }));
    } else {
      this.setState(prevState => ({
        currentAnswer: 0,
        currentNumber: prevState.currentNumber + num
      }));
    }
  };

  onTimes = () => {
    if (this.state.expression === '') {
      this.setState(() => ({
        expression: ' * ' + this.state.currentNumber,
        currentNumber: ''
      }));
    } else {
      this.setState(prevState => ({
        expression: ' * ' + this.state.currentNumber + prevState.expression,
        currentNumber: ''
      }));
    }
  };

  onPlus = () => {
    if (this.state.expression === '') {
      this.setState(() => ({
        expression: ' + ' + this.state.currentNumber,
        currentNumber: ''
      }));
    } else {
      this.setState(prevState => ({
        expression: ' + ' + this.state.currentNumber + prevState.expression,
        currentNumber: ''
      }));
    }
  };

  onMinus = () => {
    if (this.state.expression === '') {
      this.setState(() => ({
        expression: ' - ' + this.state.currentNumber,
        currentNumber: ''
      }));
    } else {
      this.setState(prevState => ({
        expression: ' - ' + this.state.currentNumber + prevState.expression,
        currentNumber: ''
      }));
    }
  };

  onDivide = () => {
    if (this.state.expression === '') {
      this.setState(() => ({
        expression: ' / ' + this.state.currentNumber,
        currentNumber: ''
      }));
    } else {
      this.setState(prevState => ({
        expression: ' / ' + this.state.currentNumber + prevState.expression,
        currentNumber: ''
      }));
    }
  };

  onDelete = () => {
    if (this.state.currentNumber !== 0 || this.state.currentNumber !== '') {
      let value = this.state.currentNumber;
      this.setState(() => ({
        currentNumber: value.substr(0, value.length - 1)
      }));
    }
  };

  onClear = () => {
    this.setState(() => ({
      currentNumber: ''
    }));
  };

  onClearAll = () => {
    this.setState(() => ({
      currentNumber: '',
      expression: ''
    }));
  };

  onDot = () => {
    if (!this.state.currentNumber.includes('.')) {
      this.setState(prevState => ({
        currentNumber: prevState.currentNumber + '.'
      }));
    }
  };

  onEquals = () => {
    let value = this.state.expression.split(' ');
    value[0] = this.state.currentNumber;
    value.reverse();
    let answer = eval(value.join(' '));

    this.setState(prevState => ({
      currentAnswer: answer,
      currentNumber: '',
      expression: ''
    }));

    /* history: prevState.history.unshift({
        expr: value.join(' ').concat(' = '),
        answer: answer
      })*/
    console.log(this.state.history);
    // console.log(value.join(' ').concat(' = '));
  };

  toggleHistory = () => {
    this.setState(prevState => ({
      showHistory: !prevState.showHistory
    }));
  };

  render() {
    return (
      <div>
        <div id='calculator'>
          <Display
            currentNumber={this.state.currentNumber}
            showExpression={this.state.expression}
            showAnswer={this.state.currentAnswer}
          />
          <div id='historyDiv' onClick={this.toggleHistory}>
            <FontAwesomeIcon icon={faHistory} size='2x' color='#868e96' />
          </div>
          {this.state.showHistory ? (
            <History />
          ) : (
            <Keypads
              displayNumber={this.displayNumber}
              onTimes={this.onTimes}
              onPlus={this.onPlus}
              onMinus={this.onMinus}
              onDivide={this.onDivide}
              onClear={this.onClear}
              onClearAll={this.onClearAll}
              onDelete={this.onDelete}
              onDot={this.onDot}
              onEquals={this.onEquals}
            />
          )}
        </div>
      </div>
    );
  }
}

export default Calculator;

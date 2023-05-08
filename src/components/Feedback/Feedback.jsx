import React from 'react';
import { OptionsToRend } from './FeedbackOptions/FeedbackOptions';
import { StatsToRend } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';
class FeedbackStats extends React.Component {
  static defaultProps = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {
    const total = Object.values(this.state).reduce((previousValue, number) => {
      return previousValue + number;
    });
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    const summ = (this.state.good * 100) / this.countTotalFeedback();
    return Math.round(summ);
  };

  onLeaveFeedback = evt => {
    this.setState({ [evt]: this.state[evt] + 1 });
  };

  render() {
    const options = Object.keys(this.state);
    const { good, neutral, bad } = this.state;
    return (
      <>
        <OptionsToRend
          options={options}
          onLeaveFeedback={this.onLeaveFeedback}
        />
        {this.countTotalFeedback() !== 0 ? (
          <StatsToRend
            positivePercentage={this.countPositiveFeedbackPercentage()}
            good={good}
            bad={bad}
            neutral={neutral}
            total={this.countTotalFeedback()}
          />
        ) : (
          <Notification />
        )}
      </>
    );
  }
}
export { FeedbackStats };

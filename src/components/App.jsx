import { Component } from 'react';
import Feedback from './Feedback/Feedback';
import Statistics from './Notifications/Statistics/Statistics';
import Section from './Section/Section';
import Notification from './Notifications/Notification';
export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  updateFeedback = type => {
    this.setState(prevState => ({
      [type]: prevState[type] + 1,
    }));
  };
  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };
  countPositivePercentage = () => {
    const total = this.countTotalFeedback();
    return total === 0 ? 0 : Math.round((this.state.good / total) * 100);
  };
  render() {
    const total = this.countTotalFeedback();
    const percentage = this.countPositivePercentage();
    console.log(total);
    return (
      <div>
        <Section title="Please leave feedback">
          <Feedback
            options={Object.keys(this.state)}
            updateFeedback={this.updateFeedback}
          />
        </Section>

        {total === 0 ? (
          <Section title="Statistics">
            <Notification message={'There is no feedback yet'} />
          </Section>
        ) : (
          <Section title="Statistics">
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={total}
              percentage={percentage}
            />
          </Section>
        )}
      </div>
    );
  }
}

import ScheduleSelector from 'react-schedule-selector';
import React from 'react';
import NavBar from '../components/navigationBar/NavBar';

class TimeSample extends React.Component {
  state = { schedule: [] };

  handleChange = (newSchedule) => {
    this.setState({ schedule: newSchedule });
  };

  render() {
    return (
      <div>
        <div className="App">
          <NavBar></NavBar>
        </div>
        <ScheduleSelector
          selection={this.state.schedule}
          startDate={new Date(2000, 10, 11)}
          numDays={7}
          minTime={8}
          maxTime={22}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}
export default TimeSample;

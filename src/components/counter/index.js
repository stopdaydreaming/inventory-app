import React from 'react';
// import {Bar} from 'react-chartjs-2';

class BarChart extends React.Component {
  constructor(props) {
    super(props);
    this.chartRef = React.createRef();
  }

  componentDidUpdate() {}

  componentDidMount() {}

  render() {
    return (
      // <Bar />
      <p>node chart goes here</p>
    );
  }
}

export default BarChart;

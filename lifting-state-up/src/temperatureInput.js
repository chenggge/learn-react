import React from 'react';
//import BoilingVerdict from './boilingVerdict';


//demo2
const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
  };
  
//   class TemperatureInput extends React.Component {
//     constructor(props) {
//       super(props);
//       this.handleChange = this.handleChange.bind(this);
//       this.state = {temperature: ''};
//     }
  
//     handleChange(e) {
//       this.setState({temperature: e.target.value});
//     }
  
//     render() {
//       const temperature = this.state.temperature;
//       const scale = this.props.scale;
//       return (
//         <fieldset>
//             <legend>Enter temperature in {scaleNames[scale]}:</legend>
//             <input value={temperature}
//                  onChange={this.handleChange} />

//             <BoilingVerdict celsius={parseFloat(temperature)} />
//         </fieldset>
//       );
//     }
//   }


//demo3
class TemperatureInput extends React.Component {
    constructor(props) {
      super(props);
      this.handleChange = this.handleChange.bind(this);
    }
  
    handleChange(e) {
      this.props.onTemperatureChange(e.target.value);
    }
  
    render() {
      const temperature = this.props.temperature;
      const scale = this.props.scale;
      return (
        <fieldset>
          <legend>Enter temperature in {scaleNames[scale]}:</legend>
          <input value={temperature}
                 onChange={this.handleChange} />
        </fieldset>
      );
    }
  }

  export default TemperatureInput;
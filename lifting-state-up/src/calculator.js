import React from 'react';

//demo1
// import BoilingVerdict from './boilingVerdict';

// class Calculator extends React.Component {
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
//       return (
//         <fieldset>
//           <legend>Enter temperature in Celsius:</legend>
//           <input
//             value={temperature}
//             onChange={this.handleChange} />
  
//           <BoilingVerdict
//             celsius={parseFloat(temperature)} />
  
//         </fieldset>
//       );
//     }
//   }


//demo2
// import TemperatureInput from './temperatureInput';

// class Calculator extends React.Component {
// render() {
//     return (
//     <div>
//         <TemperatureInput scale="c" />
//         <TemperatureInput scale="f" />
//     </div>
//     );
// }
// }

//demo3
import {tryConvert,toCelsius,toFahrenheit} from './converFn';
import TemperatureInput from './temperatureInput';
import BoilingVerdict from './boilingVerdict';

class Calculator extends React.Component {
    constructor(props) {
      super(props);
      this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
      this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
      this.state = {temperature: '', scale: 'c'};
    }
  
    handleCelsiusChange(temperature) {
      this.setState({scale: 'c', temperature});
    }
  
    handleFahrenheitChange(temperature) {
      this.setState({scale: 'f', temperature});
    }
  
    render() {
      const scale = this.state.scale;
      const temperature = this.state.temperature;
      const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
      const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;
  
      return (
        <div>
          <TemperatureInput
            scale="c"
            temperature={celsius}
            onTemperatureChange={this.handleCelsiusChange} />

            <BoilingVerdict
            celsius={parseFloat(celsius)} />
  
          <TemperatureInput
            scale="f"
            temperature={fahrenheit}
            onTemperatureChange={this.handleFahrenheitChange} />

            <BoilingVerdict
            celsius={parseFloat(fahrenheit)} />
  
        </div>
      );
    }
  }

export default Calculator;
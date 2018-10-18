import React, { Component } from 'react';
import Header from './Header';
import Formulario from './Formulario';
import Error from "./Error";
import Clima from './Clima';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      consulta: {},
      error: false,
      resultado: {}
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.consulta !== this.state.consulta) {
      this.consultarApi();
    }
  }
  consultarClima = (iobResponse) => {
    if (iobResponse.clima === "" || iobResponse.ciudad === "") {
      this.setState({
        error: true
      });

    } else {
      this.setState({
        consulta: iobResponse,
        error: false
      });
    }
  }

  consultarApi = () => {
    const ciudad = this.state.consulta.ciudad,
      pais = this.state.consulta.pais,
      nuKey = "3766a02d6b5c9fbb4a811f96f02a3f26",
      url = `http://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${nuKey}`;
    if (!ciudad || !pais) return;

    console.log(url)
    //query con fetch api
    fetch(url).then(response => {
      return response.json();
    }).then(datos => {
      this.setState({
        resultado: datos
      })
    })
      .catch(error => {
        console.log(error);
      });
  }
  render() {
    const error = this.state.error,
      resultado = error ? <Error mensaje="ambos campos son requeridos" /> : <Clima resultado={this.state.resultado} />;

    return (
      <div className="app">
        <Header
          titulo="clima React"
        />
        <Formulario
          clima={this.consultarClima}
        />
        {resultado}
      </div>
    );
  }
}

export default App;

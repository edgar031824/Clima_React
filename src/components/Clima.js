import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Clima extends Component {

    mostrarResultado = () => {
        const { name, weather, main } = this.props.resultado;

        if (!name || !weather || !main) {
            return;
        }

        return (
            <div className="row">
                <div className="resultado col s12 m8 l6 offset-m2 offset-l3">
                    <div className="card-panel light-blue align-center">
                        <span className="white-text">
                            <h2>Resultado de clima de: {name} </h2>
                            <p className="temperatura">
                                {(main.temp - 273.17).toFixed(2)}
                            </p>
                            <p>Max: {(main.temp_max - 273.17)}</p>
                            <p>Max: {(main.temp_min - 273.17)}</p>
                        </span>
                    </div>
                </div>
            </div>

        )
    }
    render() {
        return (
            <div className="container">
                {this.mostrarResultado()}
            </div>
        );
    }
}

Clima.propTypes = {
 resultado:PropTypes.object.isRequired
};

export default Clima;
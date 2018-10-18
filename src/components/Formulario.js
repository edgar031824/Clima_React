import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Formulario extends Component {

    constructor(props) {
        super(props)
        this.state = {}
    }
    ciudadRef = React.createRef();
    paisRef = React.createRef();

    buscarClima = (e) => {

        e.preventDefault();

        //leer datos y crear objetos
        const repuesta = {
            ciudad: this.ciudadRef.current.value,
            pais: this.paisRef.current.value
        }
        //enviar al padre por medio de props
        this.props.clima(repuesta);
        //resetear form  

    }

    render() {
        return (
            <div className="contenedor-form">
                <div className="container"></div>
                <div className="row">
                    <form onSubmit={this.buscarClima}>
                        <div className="input-field col s12 m8 l4 offset-m2">
                            <input ref={this.ciudadRef} type="text" name="" id="ciudad" />
                            <label htmlFor="ciudad">Ciudad:</label>
                        </div>
                        <div className="input-field col s12 m8 l4 offset-m2">
                            <select ref={this.paisRef} name="" id="pais">
                                <option value="" defaultValue>"Elige un país"</option>
                                <option value="AR">Argentina</option>
                                <option value="CO">Colombia</option>
                                <option value="CR">Costa rica</option>
                                <option value="ES">España</option>
                                <option value="US">Estados unidos</option>
                                <option value="MX">Mexico</option>
                                <option value="PE">Perú</option>
                            </select>
                            <label htmlFor="pais">Pais:</label>
                        </div>
                        <div className="input-field col s12 m8 l4 offset-2 buscador">
                            <input type="submit" value="Buscar..." />
                        </div>
                    </form>
                </div>
            </div>


        );
    }
}

Formulario.propTypes = {
    clima: PropTypes.func.isRequired
};

export default Formulario;
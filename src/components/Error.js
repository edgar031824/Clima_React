import React from 'react';
import PropTypes from 'prop-types';

const Error = (props) => {
    return (
        <div className="contenedor">
            <div className="row">
                <div className="col s12 m8 l4 offset-m3">
                    <div className="card-panel red darken-4 error">
                        {props.mensaje}
                    </div>
                </div>
            </div>
        </div>
    );

}

Error.propTypes = {
    mensaje: PropTypes.string.isRequired
};

export default Error;
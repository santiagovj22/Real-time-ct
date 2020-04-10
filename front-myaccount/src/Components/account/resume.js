import React, { Component } from 'react';
import { isMobile } from 'react-device-detect'

class Resume extends Component {
    constructor(props) {
        super(props)

        this.state = {
            ByAnswer: 0,

        }
    }

    render() {



        if (isMobile) {
            return (
                <div>
                    hols siymobillprro
                </div>
            )
        }
        else {
            return (
                <div className="quest-public">
                    <h2>Resumen</h2>
                    <div className="quest-public_questions">
                        <p>
                            <i className="fas fa-comments"></i> Preguntas
                    </p>
                    </div>
                    <div style={{ marginTop: '10px' }}>
                        <div className='foranswer'>{this.state.ByAnswer > 0 ? 'mayor' : 0}</div>
                        <p>por responder</p>
                    </div>
                    <div className="quest-public_publications">
                        <p>
                            <i className="fas fa-clipboard-check"></i> Publicaciones
                    </p>
                    </div>
                    <div style={{ marginTop: '25px' }}>
                        <div className='foranswer'>0</div>
                        <p>Activas</p>
                    </div>
                    <div className='quest-public_Inactives'>
                        <div className='foranswer'>0</div>
                        <p>Inactivas</p>
                    </div>
                </div>
            )
        }
    }
}
export default Resume
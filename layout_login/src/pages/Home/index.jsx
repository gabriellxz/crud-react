import React from "react";
import LOGO from '../../assets/img/NEWAFSLOGO.png'
import { Link } from 'react-router-dom'
import '../Home/index.css'

function Home() {

    const logo = {
        width: '50%'
    }

    return (
        <div>
            <div className="container--home">
                <div className="container-logo-afs">
                    <img src={LOGO} alt="logo afs" style={logo} />
                </div>

                <div className="container-button">
                    <div className="button">
                        <Link to='/login'>Login</Link>
                    </div>
                    <div className="button">
                        <Link to='/cadastro'>Cadastro</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;
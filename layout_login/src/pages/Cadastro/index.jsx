import React from 'react';
import { Link } from 'react-router-dom';
import '../Cadastro/index.css'
import { useState } from 'react'

function Cadastro() {

    const [msg] = useState(
        {
            mensagem: 'ERROR: site de cadastro em manutenção!'
        }
    )

    const mensagem = () => {
        alert(msg.mensagem);
    }

    return (
        <div>
            <div className="container">
                <h1>Cadastro</h1>

                <form onClick={mensagem}>
                    <div className="box">
                        <div className="container-label">
                            <label>Nome</label>
                        </div>
                        <div className="container-input">
                            <input type='text' name='nome' placeholder='Digite seu nome' />
                        </div>
                    </div>
                    <div className="box">
                        <div className="container-label">
                            <label>Email</label>
                        </div>
                        <div className="container-input">
                            <input type='text' name='email' placeholder='Digite seu email' />
                        </div>
                    </div>
                    <div className="box">
                        <div className="container-label">
                            <label>Senha</label>
                        </div>
                        <div className="container-input">
                            <input type='password' name='password' placeholder='Digite sua senha' />
                            <button type='submit' id='btn-cad' onClick={mensagem}>Cadastrar-se</button>
                        </div>
                    </div>
                </form>
                <div className="text-cad">
                    <span>Já tem uma conta? <Link to='/login'>Entrar</Link></span>
                </div>
            </div>
        </div>
    )
}

export default Cadastro;
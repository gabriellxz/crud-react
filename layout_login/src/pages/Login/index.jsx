import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import api from '../../config/configApi';
import '../Login/index.css';

function Login() {

    const navigate = useNavigate();

    const [user, setUser] = useState({
        email: '',
        password: ''
    })

    const [status, setStatus] = useState({
        type: '',
        mensagem: '',
        loading: false
    })

    const valorInput = e => setUser({ ...user, [e.target.name]: e.target.value });

    const loginSubmit = async e => {
        e.preventDefault();
        //console.log(user.email);
        //console.log(user.password);
        setStatus({
            loading: true
        })

        const headers = {
            'Content-Type': 'application/json'
        }

        await api.post('/login', user, { headers })
            .then((response) => {
                //console.log(response)
                setStatus({
                    type: 'sucesso',
                    mensagem: response.data.mensagem,
                    loading: false
                })
                //localStorage.setItem('token', JSON.stringify(response.data.token));
                navigate('/dashboard')
            }).catch((err) => {
                if (err.response) {
                    setStatus({
                        type: 'error',
                        mensagem: err.response.data.mensagem,
                        loading: false
                    })
                } else {
                    setStatus({
                        type: 'error',
                        mensagem: 'Erro: tente mais tarde!',
                        loading: false
                    })
                }
            })
    }


    return (
        <div>
            <div className="container">
                <h1>Login</h1>
                <div className='error'>
                    {status.type === 'error' ? <p>{status.mensagem}</p> : ""}
                </div>
                <div className="sucesso">
                    {status.type === 'sucesso' ? <p>{status.mensagem}</p> : ""}
                </div>
                <div className='loading'>
                    {status.loading ? <p>Acessando...</p> : ""}
                </div>
                <form onSubmit={loginSubmit}>
                    <div className="box">
                        <div className="container-label">
                            <label>Email</label>
                        </div>
                        <div className="container-input">
                            <input type='text' name='email' placeholder='Digite seu email' onChange={valorInput} />
                        </div>
                    </div>
                    <div className="box">
                        <div className="container-label">
                            <label>Senha</label>
                        </div>
                        <div className="container-input">
                            <input type='password' name='password' placeholder='Digite sua senha' autoComplete='on' onChange={valorInput} />
                            <button type='submit'>Entrar</button>
                        </div>
                    </div>

                </form>
                <div className="text-cad">
                    <span>Não tem conta? <Link to='/cadastro'>Criar</Link></span>
                </div>
            </div>
        </div>
    )
}

export default Login;
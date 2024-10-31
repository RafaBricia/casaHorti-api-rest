<<<<<<< HEAD
import { useNavigate } from 'react-router-dom';
import './LoginStyle.css';
import { useState } from 'react';
import fundo from "../assets/fundo-image.png";


const Login = () => {
    const navigation = useNavigate();
    const [email, setEmail] = useState({ value: '', dirty: false });
    const [password, setPassword] = useState({ value: '', dirty: false });

    const handleErrorEmail = () => {
        if (!email.value && email.dirty) {
            return <label className="error">Campo Obrigatório</label>;
        }
    };

    const handleErrorPassword = () => {
        if (!password.value && password.dirty) {
            return <label className="error">Campo Obrigatório</label>;
        }
    };

    return (
        <div id="tela-cheia">
            <div className="logo-centro-mobile">
                <img src="assets/LOGO COMPLETA COLORIDA.png" alt="Logotipo Casa Horti" />
            </div>
            <div className="foto">
                <img src={fundo} alt="Background frutas e verduras com logotipo da Casa Horti" />
            </div>
            <form className="formulario">
                <div className="conteudo-formulario">
                    <h2>Acesse o Gerenciador</h2>
                    <h5>Com Email e Senha para entrar</h5>

                    <div className="input">
                        <label htmlFor="email">Digite seu Email</label>
                        <input
                            value={email.value}
                            onChange={(event) => setEmail({ value: event.target.value, dirty: true })}
                            name="email"
                            type="email"
                        />
                        {handleErrorEmail()}
                    </div>

                    <div className="input">
                        <label htmlFor="password">Digite sua Senha</label>
                        <input
                            value={password.value}
                            onChange={(event) => setPassword({ value: event.target.value, dirty: true })}
                            name="password"
                            type="password"
                        />
                        {handleErrorPassword()}
                    </div>

                    <div className="esqueci-senha">
                        <a href="forgotPassword">Esqueceu sua senha?</a>

                    </div>

                    <div className="botoes">
                        <button className="cadastrar" >Cadastrar</button>
                        <button className="acessar" onClick={() => { navigation('home') }}>Acessar</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Login;
=======
import { useNavigate } from 'react-router-dom';
import './LoginStyle.css';
import { useState } from 'react';
import fundo from "../assets/fundo-image.png";


const Login = () => {
    const navigation = useNavigate();
    const [email, setEmail] = useState({ value: '', dirty: false });
    const [password, setPassword] = useState({ value: '', dirty: false });

    const handleErrorEmail = () => {
        if (!email.value && email.dirty) {
            return <label className="error">Campo Obrigatório</label>;
        }
    };

    const handleErrorPassword = () => {
        if (!password.value && password.dirty) {
            return <label className="error">Campo Obrigatório</label>;
        }
    };

    return (
        <div id="tela-cheia">
            <div className="logo-centro-mobile">
                <img src="assets/LOGO COMPLETA COLORIDA.png" alt="Logotipo Casa Horti" />
            </div>
            <div className="foto">
                <img src={fundo} alt="Background frutas e verduras com logotipo da Casa Horti" />
            </div>
            <form className="formulario">
                <div className="conteudo-formulario">
                    <h2>Acesse o Gerenciador</h2>
                    <h5>Com Email e Senha para entrar</h5>

                    <div className="input">
                        <label htmlFor="email">Digite seu Email</label>
                        <input
                            value={email.value}
                            onChange={(event) => setEmail({ value: event.target.value, dirty: true })}
                            name="email"
                            type="email"
                        />
                        {handleErrorEmail()}
                    </div>

                    <div className="input">
                        <label htmlFor="password">Digite sua Senha</label>
                        <input
                            value={password.value}
                            onChange={(event) => setPassword({ value: event.target.value, dirty: true })}
                            name="password"
                            type="password"
                        />
                        {handleErrorPassword()}
                    </div>

                    <div className="esqueci-senha">
                        <a href="forgotPassword">Esqueceu sua senha?</a>

                    </div>

                    <div className="botoes">
                        <button className="cadastrar" >Cadastrar</button>
                        <button className="acessar" onClick={() => { navigation('home') }}>Acessar</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Login;
>>>>>>> 3ff392d49a97a376984e70f007ce512cc738b7e3

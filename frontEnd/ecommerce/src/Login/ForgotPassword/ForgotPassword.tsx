import { useNavigate } from 'react-router-dom';
import './ForgotPasswordStyle.css';
import fundo from "../../assets/fundo-image.png";



const ForgotPassword = () => {
    const navigation = useNavigate();

    return (
        <div id="tela-cheia">
            <div className="logo-centro-mobile">
                <img src="assets/LOGO COMPLETA COLORIDA.png" alt="Logotipo Casa Horti" />
            </div>

            <div className="foto">
                <img src={fundo} alt="Background frutas e verduras com logotipo da Casa Horti" />
            </div>

            <div className="formulario">
                <div className="conteudo-formulario">
                    <h2>Recuperar Senha</h2>
                    
                    <div className="input">
                        <label htmlFor="cpf">Digite seu CPF</label>
                        <input type="text" placeholder="CPF" name="cpf" />
                    </div>

                    <div className="input">
                        <label htmlFor="newPassword">Digite sua Nova Senha</label>
                        <input type="password" placeholder="Nova Senha" name="newPassword" />
                    </div>

                    <div className="input">
                        <label htmlFor="confirmPassword">Confirme a Senha</label>
                        <input type="password" placeholder="Nova Senha" name="confirmPassword" />
                    </div>

                    <div className="botoes">
                        <button className="lembrei" onClick={() => navigation('Login')}>
                            Lembrei a Senha
                        </button>
                        <button className="cadastrar" onClick={() => navigation('Login')}>
                            Cadastrar Nova Senha
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ForgotPassword;

import { useNavigate } from 'react-router-dom';
import './ForgotPasswordStyle.css';
const ForgotPassword = () => {
    const navigation = useNavigate()
    return (
        <div id="forgotPasswordContainer">
            <form >
                <h3>Preencha corretamente seu dados</h3>
                <label htmlFor="email"> Email</label>
                <input name="email" type="email" />

                <label htmlFor="email"> Repetir Email</label>
                <input name="email" type="email" />

                <label htmlFor="cpf"> Digite seu CPF</label>
                <input name="cpf" type="text" />

                <button onClick={() => { navigation('Login') }}>Enviar</button>
            </form>
        </div>
    )
}

export default ForgotPassword
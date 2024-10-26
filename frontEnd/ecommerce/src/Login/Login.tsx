import { useNavigate } from 'react-router-dom';
import './LoginStyle.css'; // Caminho para o arquivo CSS
import { useState } from 'react';
const Login = () => {
    const navigation = useNavigate()
    let [email, setEmail] = useState({value:'' , dirty: false});
    let [password, setPassword] = useState({value: '', dirty:false});
    const handleErrorEmail= () =>{

        if(!email.value && email.dirty){
        return (<label className='error'>Campo Obrigatório</label>)
        } 
        /*else if(rexemail.value){
        return (<label>Campo Obrigatório</label>)


        }*/
    }

    const handleErrorPassword=()=>{
        if(!password.value && password.dirty){
            return (<label className='error'>Campo Obrigatório</label>)
            } 
            /*else if(rexemail.value){
            return (<label>Campo Obrigatório</label>)
    
    
            }*/
    }

    return (
        <div id="logincontainer">
                <h1 className='titulo'>CasaHorti</h1>
            <form >
                <h1>Login</h1>
                <p>Preencha corretamente seu dados</p>
                <label htmlFor=""> Email</label>
                <input value={email.value} onChange={(event)=> setEmail({value: event.target.value, dirty: true})} /*placeholder="Digite seu Email"*/ name="email" type="email" />
                {handleErrorEmail()}
               

                <label htmlFor=""> Password</label>
                <input value={password.value} onChange={(event)=>setPassword({value: event.target.value, dirty:true})}/*placeholder="Digite sua senha"*/ name="password" type="password" />
                {handleErrorPassword()}
                <a href="forgotPassword">Esqueceu sua senha?</a>
                <button onClick={() => {navigation('home')}}>Entrar</button>
            </form>
        </div>
    )
}

export default Login
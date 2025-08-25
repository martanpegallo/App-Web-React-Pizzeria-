import { useState } from 'react';

function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('false');

    const validarDatos = (e) => {
        e.preventDefault();
        if (email === '' || password === '' || confirmPassword === '') {
            alert('Todos los campos son obligatorios');
            setError(true);
            return;
        }
        if (password.length < 6) {
            alert('La contraseña debe tener al menos 6 caracteres');
            setError(true);
            return;
        }
        if (password !== confirmPassword) {
            alert('Las contraseñas no coinciden');
            setError(true);
            return;
        }
        alert('Usuario registrado exitosamente');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
        setError(false);
    }
    return (
        <form className="formulario container m-3 p-5 border border-2 rounded shadow bg-success text-dark"
            onSubmit={validarDatos}>
            
            <h2 className="text-center mb-4">Registrate como un nuevo usuario</h2>
            <div className="form-group mb-3">
                <label for="exampleInputEmail1" className="form-label">Correo electronico</label>
                <input 
                type="email"
                name='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)} 
                className="form-control w-50 align-middle"  
                placeholder='nombre@mail.com'>
                </input>
            </div>
            <div className="form-group mb-3">
                <label for="exampleInputPassword1" className="form-label">Contraseña</label>
                <input 
                type="text"
                name='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)} 
                className="form-control w-50" 
                placeholder='minimo 6 caracteres'>
                </input>
            </div>
            <div className="form-group mb-3">
                <label for="exampleInputPassword2" className="form-label">Confirmar Contraseña</label>
                <input 
                type="text"
                name='confirmPassword'
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)} 
                className="form-control w-50">
                </input>
            </div>
            <button type="submit" className="btn btn-dark m-3 shadow">
                Registrarse
            </button>
        </form>
    )
}

export default Register;
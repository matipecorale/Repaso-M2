import { useState } from 'react'

export const Registro = () => {

    const [values, setValues] = useState({
        user: '',
        password: '',
        email: ''
    });
    const [showPassword, setPassword] = useState(false);

    const handleChange = (ev) => {
        setValues({
            ...values,
            [ev.target.name]: ev.target.value
        })
    }
    const handleSubmit = (ev) => {
        ev.preventDefault();
        setValues({
            user: '',
            password: '',
            email: ''
        })
    }

    const handlePassword = () => {
        setPassword(!showPassword)
    }

    const passwordValidation = {
        length: values.password.length >= 8,
        special: /^(\w*[!@#$%^&*()]\w*)+$/.test(values.password),
        uppercase: /.*[A-Z].*/.test(values.password)
    }

    return (
        <>
            <form onSubmit={handleSubmit} >
                <label>
                    User
                    <input name='user' type="text" onChange={handleChange} value={values.user} />
                </label>

                <label>
                    Password
                    <input name='password' type={showPassword ? 'text' : 'password'} onChange={handleChange} value={values.password} />
                </label>
                <button type='button' onClick={handlePassword}>
                    {showPassword ? 'Ocultar' : 'Mostrar'}
                </button>

                <label>
                    Email
                    <input name='email' type='email' onChange={handleChange} value={values.email} />
                </label>
                <button>Send</button>
            </form>

            <div>
                <ul>
                    <li>{passwordValidation.length ? '✔' : '😢'} Debe tener 8 caracteres como minimo</li>
                    <li>{passwordValidation.special ? '✔' : '😢'}Debe tener un caracter especial</li>
                    <li>{passwordValidation.uppercase ? '✔' : '😢'}Debe tener una letra mayuscula al menos</li>
                </ul>
            </div>

            <p>user: {values.user}</p>
            <p>password: {values.password}</p>
            <p>email: {values.email}</p>
        </>
    )
}
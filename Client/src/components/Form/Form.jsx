import { useState } from "react";
import validation from "../Validation/Validation";
import './Form.css';

const Form = ({ login }) => {
    const [errors, setErrors] = useState({});
    const [userData, setUserData] = useState({
        email: '',
        password: ''
    });

    const handleChange = (event) => {
        setUserData({
            ...userData,
            [event.target.name]: event.target.value
        })

        setErrors(validation({
            ...userData,
            [event.target.name]: event.target.value
        }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        login(userData);
    }

    return(
<form onSubmit={handleSubmit}>
    <div className="form-group">
        <img src="https://media.tenor.com/3hIpHNbcVf4AAAAC/rick-and-morty-rick.gif" alt="Imagen de fondo"></img>
            <label htmlFor="email">Email: </label>
        <input type="email" name='email' value={userData.email} onChange={handleChange}/>
        {errors.email && <p>{errors.email}</p>}
        <label htmlFor="password">Password:</label>
        <input type="text" name="password" value={userData.password} onChange={handleChange}/>
        {errors.password && <p>{errors.password}</p>}           
        <button className="btn-submit">Entrar</button>
    </div>           
</form>
    )
}

export default Form;
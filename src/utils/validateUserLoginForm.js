export const validateUserLoginForm = (values) => {
    const errors = {};

    if(!values.username){
        errors.username = 'Requerido';
    } else if (values.username.length < 3){
        errors.username = 'El username tiene que tener por los menos 3 caracteres.'
    }

    const regex = /^(?=.*[a-zA-Z])(?=.*\d).+$/;
    
    if(!values.password){
        errors.password = 'Requerido';
    } else if (!regex.test(values.password)){
        errors.password = 'La clave tiene que contener ambos letras y numeros.'
    } else if (values.password.length < 8){
        errors.password = 'Su clave tiene que tener por lo menos 8 caracteres.'
    }
    
    return errors;
};

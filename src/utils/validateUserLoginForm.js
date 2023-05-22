export const validateUserLoginForm = (values) => {
    const errors = {};

    if(!values.firstName){
        errors.firstName = 'Requerido';
    } else if (values.firstName.length < 2){
        errors.firstName = 'Tiene que ser mayor de 2 caracteres.';
    } else if (values.firstName.length > 15){
        errors.firstName = 'Tiene que ser menos de 15 caracteres.'
    }

    if(!values.lastName){
        errors.lastName = 'Requerido';
    } else if (values.lastName.length < 2){
        errors.lastName = 'Tiene que ser mayor de 2 caracteres.';
    } else if (values.lastName.length > 15){
        errors.lastName = 'Tiene que ser menos de 15 caracteres.'
    }

    if(!values.username){
        errors.username = 'Requerido';
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

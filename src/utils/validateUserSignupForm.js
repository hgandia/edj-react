export const validateUserSignupForm = (values) => {
    const errors = {};

    if(!values.firstname){
        errors.firstname = 'Requerido';
    } else if (values.firstname.length < 3){
        errors.firstname = 'Tiene que ser mayor de 2 caracteres.';
    } else if (values.firstname.length > 15){
        errors.firstname = 'Tiene que ser menos de 15 caracteres.'
    }

    if(!values.lastname){
        errors.lastname = 'Requerido';
    } else if (values.lastname.length < 2){
        errors.lastname = 'Tiene que ser mayor de 2 caracteres.';
    } else if (values.lastname.length > 15){
        errors.lastname = 'Tiene que ser menos de 15 caracteres.'
    }

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

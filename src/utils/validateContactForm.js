export const validateContactForm = (values) => {
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

    const reg = /^\d+$/;
   // const reg = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/; <----- This regular expression receives multiple phone number formats.
   
    if(!reg.test(values.phoneNum)){
        errors.phoneNum = 'El numero de telefono debe de contener solo numeros.';       
    } else if(values.phoneNum.length != 10){
        errors.phoneNum = 'El numero de telefono debe de ser de 10 digitos'
    }

    if(!values.email.includes('@')){
        errors.email = 'La dirreción de correro electornico debe contener un careacter de: @';
    }

    return errors;
};
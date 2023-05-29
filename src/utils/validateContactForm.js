export const validateContactForm = (values) => {
    const errors = {};

    if(!values.firstname){
        errors.firstname = 'Requerido';
    } else if (values.firstname.length < 2){
        errors.firstname = 'Tiene que ser mayor de 2 caracteres.';
    } else if (values.firstname.length > 15){
        errors.firstName = 'Tiene que ser menos de 15 caracteres.'
    }

    if(!values.lastname){
        errors.lastname = 'Requerido';
    } else if (values.lastname.length < 2){
        errors.lastname = 'Tiene que ser mayor de 2 caracteres.';
    } else if (values.lastname.length > 15){
        errors.lastname = 'Tiene que ser menos de 15 caracteres.'
    }

    const reg = /^\d+$/;
    //const reg = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/; //<----- This regular expression receives multiple phone number formats.
   
    if(!reg.test(values.phoneNum)){
        errors.phoneNum = 'El numero de telefono debe de contener solo numeros.';       
    } else if(values.phoneNum.length !== 10){
        errors.phoneNum = 'El numero de telefono debe de ser de 10 digitos'
    }

    if(!values.email.includes('@')){
        errors.email = 'La dirreción de correro electornico debe contener un careacter de: @';
    }

    return errors;
};
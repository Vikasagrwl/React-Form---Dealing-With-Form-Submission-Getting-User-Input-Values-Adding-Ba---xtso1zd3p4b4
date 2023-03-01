
export const  Validation = (details)=>{
    const error = {
    };

    if(details.username.length==0){
        error.username="name is compulsory";
    }
    else if(details.username.length<4 || details.username.length > 10){
        error.username="length of name should be minimum 4 char and maximum 10 char"
    }

    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if(details.email.length==0){
        error.email="email is compulsory";
    }
    else if(!emailRegex.test(details.email)){
        error.email="email is not valid";
    }

    if(details.password.length==0){
        error.password="password is compulsory";
    }
    else if(details.password.length<4){
        error.password="password should be minimum 4 char long";
    }
    if(details.contactNo.length===0){
        error.contactNo="contact number is needed";
    }
    else if(details.contactNo.length!=10){
      error.contactNo="not a valid number";
    }   

    return error;
}

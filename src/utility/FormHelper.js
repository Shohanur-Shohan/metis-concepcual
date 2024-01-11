import toast from "react-hot-toast";
let EmailRegx = /\S+@\S+\.\S+/;


export const IsEmpty = (value) => value.length === 0;

export const IsEmail = (value) => !EmailRegx.test(value);

export const  ErrorToast = (msg) =>  toast.error(msg);

export const SuccessToast = (msg) => toast.success(msg);

// class FormHelper {

//     IsEmpty(value){
//         return value.length === 0;
//     }
//     IsEmail(value){
//         return !EmailRegx.test(value);
//     }
//     ErrorToast(msg){
//         toast.error(msg);
//     }
//     SuccessToast(msg){
//         toast.success(msg);
//     }
// }

// export const { IsEmpty, IsEmail, ErrorToast, SuccessToast } = new FormHelper();


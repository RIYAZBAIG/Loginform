import * as Yup from "yup"

export const Registerschema=Yup.object({
   name:Yup.string().min(2).max(10).required("Please Enter Your Name"),
   email:Yup.string().email().required("Please Enter Your Email"),
   phone:Yup.string().min(5).max(10).required("Please Enter Your Number"),
   username:Yup.string().min(2).max(10).required("Please Enter Your Username"),
   password:Yup.string().min(2).max(10).required("Please Enter Your Password"),
   confirmpassword:Yup.string().required().oneOf([Yup.ref("password"),null],"Password Must Matched")
})
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

export const useProductForm = (defaultValues = {}) => {
 
  const schema = yup.object().shape({
    username: yup.string().required("نام را وارد کنید"),
    password: yup.string().min(6,"رمز حداقل می بایست 6 کاراکتر باشد").required(),
    repeatPassword: yup.string().oneOf([yup.ref("password")] , "تکرار رمز اشتباه است").required()
  });


  const form = useForm({
    resolver: yupResolver(schema),
    defaultValues
  });

  return form;
};
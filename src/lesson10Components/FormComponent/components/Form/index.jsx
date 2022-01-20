import { useState } from "react";
import { formData, formValidators, initialFormCurrentData } from "../../data";
import FormGroup from "../FormGroup";
import { Button } from "react-bootstrap";

const FormCont = () => {
    const [formCurrentData, setFormCurrentData] = useState(initialFormCurrentData);
    const [err, setErr] = useState([]);

    const getErrorsAfterValidation = (value, validators) => {
        const errors = [];
        validators.forEach(validator => {
            const error = validator(value);
            if (error) {
                errors.push(error);   
            }
        });
        setErr(errors);
        return errors;
    }
    const getValidationValues = (name, value) => {
        const validationValues = { value };
        // validationValues["touched"] = formCurrentData.name.touched;
        if (name === "confirmPassword")
            validationValues["password"] = formCurrentData.password.value;
        
        return validationValues;
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        const validators = formValidators[name];
        const validationValues = getValidationValues(name, value);

        const error = getErrorsAfterValidation(validationValues, validators);

        setFormCurrentData(prev => {
            return {
                ...prev,           
                [name]: {
                    touched: true,
                    error,
                    value
                }
            }
        });
    }

    // const getErrors = (data) => {
    //     const keys = Object.keys(formCurrentData);
    //     const errorArr = [];
    //     keys.forEach((key) =>{
    //         const validationValues = getValidationValues(key, key.value);
    //         errorArr = getErrorsAfterValidation(validationValues, formValidators[key]);
    //     });

    //     return errorArr;
    // }

    const handleSubmit = (e) => {
        const {name,email,phone,password,confirmPassword} = formCurrentData;
        
        // const errors = getErrors();
         
        if(!err.length){
            const newArr = {
                name : name.value,
                email : email.value,
                phone : phone.value,
                password : password.value,
                confirmPassword : confirmPassword.value
            }
            localStorage.setItem('item',JSON.stringify(newArr));
            // console.log(errors);
        }else{
            // console.log(errors);
        }
    }
    return (
        <form className="form">
            {formData.map(data => {
                return (
                    <FormGroup
                        {...data}
                        key={data.id}
                        onChange={handleInputChange}
                        input={formCurrentData[data.name]}
                    />
                )
            })}
            
            <Button onClick={handleSubmit} variant="warning">Click</Button>

        </form>
    )
}

export default FormCont;
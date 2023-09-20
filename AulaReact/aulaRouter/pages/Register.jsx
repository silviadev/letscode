import {useForm} from 'react-hook-form';

export default function Register() {
        const {
        register,
        handleSubmit,
        watch,
        formState: {errors},

    } = useForm();

    const onSubmit = (data) => console.log(data);

    console.log(watch("example"));

    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            <input defaultValue= ""
            {...register("example")} />

            <input {...register("exampleRequired",
            {required: true})} />

            {errors.exampleRequired &&
            <span>Esse campo é obrigatório</span>}

            <input type = "submit" />
        </form>
    );
}

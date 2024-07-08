import { useForm } from "react-hook-form";
import Input from "./forms/Input";
import { DevTool } from '@hookform/devtools';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";


const schema = yup.object({
    username: yup.string().required("Username is required"),
    email: yup.string().email("Email format is not valid").required("Email is required"),
    channel: yup.string().required("Channel is required"),
})

type formValues = {
    username: string,
    email: string,
    channel: string
}

const YupYoutubeForm = () => {
    const form = useForm<formValues>({
        defaultValues: {
            username: "",
            email: "",
            channel: "",
        },
        resolver: yupResolver(schema)
    });
    const { register, control, handleSubmit, formState } = form;
    const { errors } = formState;

    const onSubmit = (data: formValues) => {
        console.log("form submitted", data);
    }
    return (
        <div className="flex flex-col gap-5">
            <div className="text-4xl font-semibold">Youtube Form with yup integration </div>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5 items-center" noValidate>
                <Input labelValue="username" type="text" id="username" name="username" register={register} errors={errors} />
                <Input labelValue="email" type="text" id="email" name="email" register={register} errors={errors} />
                <Input labelValue="channel" type="text" id="channel" name="channel" register={register} errors={errors} />

                <button className="px-10 py-2 border rounded-lg text-center w-fit order-last">Submit</button>
            </form>
            <DevTool control={control} /> {/* set up the dev tool */}
        </div>
    )
}

export default YupYoutubeForm
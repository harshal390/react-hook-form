import { useForm } from "react-hook-form";
import Input from "./forms/Input";
import { DevTool } from "@hookform/devtools";
let renderCount = 0;

type formValues = {
    username: string,
    email: string,
    channel: string
}
const YoutubeForm = () => {

    const form = useForm<formValues>(
        {
            defaultValues: async () => {
                const res = await fetch("https://jsonplaceholder.typicode.com/users/1");
                const data = await res.json();
                return {
                    username: "restartmyself21",
                    email: data.email,
                    channel: ""
                }
            }

        }
    );
    const { register, control, handleSubmit, formState } = form;
    const { errors } = formState;
    const onSubmit = (data: formValues) => {
        console.log("form submitted", data);
    }
    renderCount++;
    return (
        <div className="flex flex-col gap-5">
            <div className="text-4xl font-semibold">Youtube Form {renderCount / 2} </div>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5 items-center" noValidate>
                <Input labelValue="username" type="text" id="username" name="username" register={register} errors={errors} />
                <Input labelValue="email" type="text" id="email" name="email" register={register} errors={errors} />
                <Input labelValue="channel" type="text" id="channel" name="channel" register={register} errors={errors} />
                <button className="px-10 py-2 border rounded-lg text-center w-fit">Submit</button>
            </form>
            <DevTool control={control} /> {/* set up the dev tool */}
        </div>
    )
}

export default YoutubeForm;
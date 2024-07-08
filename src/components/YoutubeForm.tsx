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

    const form = useForm<formValues>();
    const { register, control, handleSubmit } = form;
    const onSubmit = (data: formValues) => {
        console.log("form submitted", data);
    }
    renderCount++;
    return (
        <div className="flex flex-col gap-5">
            <div className="text-4xl font-semibold">Youtube Form {renderCount / 2} </div>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5 items-center" noValidate>
                <Input labelValue="username" type="text" id="username" name="username" register={register} />
                <Input labelValue="email" type="text" id="email" name="email" register={register} />
                <Input labelValue="channel" type="text" id="channel" name="channel" register={register} />
                <button className="px-10 py-2 border rounded-lg text-center w-fit">Submit</button>
            </form>
            <DevTool control={control} /> {/* set up the dev tool */}
        </div>
    )
}

export default YoutubeForm;
import { useFieldArray, useForm } from "react-hook-form";
import Input from "./forms/Input";
import { DevTool } from "@hookform/devtools";
import { useEffect } from "react";
let renderCount = 0;

type formValues = {
    username: string,
    email: string,
    channel: string,
    social: {
        x: string,
        facebook: string
    },
    phoneNumbers: string[],
    nickNames: [{
        name: string
    }],
    age: number,
    dob: Date,
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
                    channel: "",
                    social: {
                        x: "",
                        facebook: ""
                    },
                    phoneNumbers: ["", ""],
                    nickNames: [{ name: "" }],
                    age: 0,
                    dob: new Date()
                }
            }

        }
    );
    const { register, control, handleSubmit, formState, watch, getValues } = form;
    const { errors } = formState;

    const { fields, append, remove } = useFieldArray({
        name: "nickNames",
        control
    })
    const onSubmit = (data: formValues) => {
        console.log("form submitted", data);
    }
    renderCount++;

    useEffect(() => {
        const subscription = watch(value => {
            console.log(value);
        });
        return () => subscription.unsubscribe();
    }, [watch])
    return (
        <div className="flex flex-col gap-5">
            <div className="text-4xl font-semibold">Youtube Form {renderCount / 2} </div>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5 items-center" noValidate>
                <Input labelValue="username" type="text" id="username" name="username" register={register} errors={errors} />
                <Input labelValue="email" type="text" id="email" name="email" register={register} errors={errors} />
                <Input labelValue="channel" type="text" id="channel" name="channel" register={register} errors={errors} />
                <Input labelValue="x" type="text" id="x" name="social.x" register={register} />
                <Input labelValue="facebook" type="text" id="facebook" name="social.facebook" register={register} />
                <Input labelValue="primary-phone" type="text" id="primary-phone" name="phoneNumbers.0" register={register} />
                <Input labelValue="secondary-phone" type="text" id="secondary-phone" name="phoneNumbers.1" register={register} />
                <Input labelValue="age" type="text" id="age" name="age" register={register} />
                <Input labelValue="dob" type="date" id="dob" name="dob" register={register} />
                <div className="flex flex-col gap-3 w-full">
                    {
                        fields.map((field, i) => {
                            return <div key={field.id} className="flex items-center gap-5"><Input type="text" name={`nickNames.${i}.name`} register={register} />
                                {i > 0 && <button onClick={() => { remove(i) }} type="button" className="px-10 py-2 border rounded-lg text-center w-fit">Remove</button>}
                            </div>
                        })
                    }
                    <button onClick={() => { append({ name: "" }) }} type="button" className="px-10 py-2 border rounded-lg text-center w-fit">Add</button>
                </div>
                <button className="px-10 py-2 border rounded-lg text-center w-fit">Submit</button>
            </form>
            <DevTool control={control} /> {/* set up the dev tool */}
        </div>
    )
}

export default YoutubeForm;
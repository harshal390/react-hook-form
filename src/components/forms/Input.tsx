const Input = ({ labelValue, type, name, id, register, errors }: any) => {

    const validation: any = {
        username: { required: "Username is required" },
        email: {
            required: "Email is Required",
            pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "invalid email address"
            }
        },
        channel: {
            required: "Channel is required",
        }
    }
    return (
        <div className="grid grid-cols-12 gap-x-5 gap-y-2 items-center w-full">
            <label htmlFor={labelValue} className="capitalize col-span-1 text-start">{labelValue}</label>
            <input type={type} name={name} id={id} {...register(name, validation[name])} className="border-0 outline-none rounded-lg p-2 col-span-11" />
            <div className="col-span-1"></div>
            <p className="col-span-11 text-sm text-red-600 capitalize text-start">{errors[name]?.message}</p>
        </div>
    )
}

export default Input
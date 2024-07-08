const Input = ({ labelValue, type, name, id, register, errors }: any) => {

    const validation: any = {
        username: { required: "Username is required" },
        email: {
            required: "Email is Required",
            pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "invalid email address"
            },
            validate: {
                notAdmin: (fieldValue: string) => {
                    return fieldValue !== "admin@gmail.com" || "don't use admin email address."
                },
                notBlackListed: (fieldValue: string) => {
                    return fieldValue !== "black@gmail.com" || "email should not black listed."
                },
            }
        },
        channel: {
            required: "Channel is required",
        }
    }
    return (
        <div className="grid grid-cols-12 gap-x-5 gap-y-2 items-center w-full">
            <label htmlFor={labelValue} className="capitalize col-span-2 text-start">{labelValue}</label>
            <input type={type} name={name} id={id} {...register(name, validation[name])} className="border-0 outline-none rounded-lg p-2 col-span-10" />
            <div className="col-span-2"></div>
            {errors && <p className="col-span-10 text-sm text-red-600 capitalize text-start">{errors[name]?.message}</p>}
        </div>
    )
}

export default Input
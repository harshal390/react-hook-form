const Input = ({ labelValue, type, name, id, register }: any) => {
    return (
        <div className="grid grid-cols-12 gap-5 items-center w-full">
            <label htmlFor={labelValue} className="capitalize col-span-1 text-start">{labelValue}</label>
            <input type={type} name={name} id={id} {...register(name)} className="border-0 outline-none rounded-lg p-2 col-span-11" />
        </div>
    )
}

export default Input
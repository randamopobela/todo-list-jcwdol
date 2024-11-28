export function List({ nama_component }: { nama_component: string }) {
    return (
        <div className="flex justify-center items-center py-1">
            {/* <div className="size-5 border-2 border-solid border-green-600 rounded-sm"></div> */}
            <input
                type="checkbox"
                className="appearance-none size-5 rounded-sm border-2 border-solid border-green-600 bg-black focus:ring-green-400 cursor-pointer checked:bg-blue-500 checked:border-blue-500 checked:after:content-['✔'] checked:after:text-white checked:after:flex checked:after:justify-center checked:after:items-center"
            />
            <p className="pl-8 pr-16 w-2/5">{nama_component}</p>
            <button className="flex justify-center items-center h-8 w-9 border-2 border-solid border-white rounded-md">
                <img src="/assets/delete.png" alt="delete" className="size-4" />
            </button>
        </div>
    );
}

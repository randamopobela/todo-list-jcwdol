export function AddTodo() {
    return (
        <div className="flex justify-center">
            <div className="flex-col w-1/2 justify-center items-center">
                <h3>Add todo</h3>
                <input
                    type="text"
                    className="bg-slate-700 text-white rounded-md border-2 border-slate-300 border-solid w-full my-1 p-2"
                />
                <button className="bg-blue-400 text-black rounded-md px-2">
                    ADD TASK
                </button>
            </div>
        </div>
    );
}

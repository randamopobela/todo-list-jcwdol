export function Header({ nama_component }: { nama_component: string }) {
    return (
        <div className="flex justify-center items-center px-5 py-8 font-bold text-xl">
            {nama_component}
        </div>
    );
}

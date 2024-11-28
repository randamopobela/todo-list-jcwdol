import { Header } from "@/components/header/page";
import { List } from "@/components/list/page";
import { AddTodo } from "@/components/addtodo/page";

export default function Home() {
    return (
        <div className="flex-col items-center justify-center">
            <div className="flex-col">
                <Header nama_component="Chores ToDo List" />
                <List nama_component="Create Guest Experience mobile check-in" />
                <List nama_component="Document current CI/CD process" />
                <List nama_component="Perform Code Review for final Pillow-Talk release" />
                <List nama_component="Implement new Color Palette from Design Team" />
                <List nama_component="Fix image uploading process for guest check-in" />
                <List nama_component="Provide on-boarding documentation" />
            </div>
            <div className="flex-col">
                <div className="flex justify-center">
                    <div className="flex-col w-1/2 mt-9 border-t-2 border-solid border-white"></div>
                </div>
                <Header nama_component="Done: 0" />
                <AddTodo />
            </div>
        </div>
    );
}

import { Header } from "@/components/header/page";
import { List } from "@/components/list/page";
import Image from "next/image";

export default function Home() {
    return (
        <div className="flex-col items-center justify-center">
            <Header />
            <List />
            <List />
            <List />
            <List />
            <List />
            <List />
        </div>
    );
}

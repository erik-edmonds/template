import { Preferences, Buttons, Search } from "@/components/canvas/Election";

export default function Page() {
    return (
        <>
            <Preferences />
            <Search />
            <Buttons handle={"upclick"} />
            <Buttons handle={"downclick"} />
        </>
    )
}


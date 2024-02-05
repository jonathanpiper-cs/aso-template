import { NextPage } from "next";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { useEffect, useMemo, useState } from "react";
import ContentstackService from "../helpers/contentstack";
import GenericEmail from "../../components/generic/generic-email";
import "@contentstack/live-preview-utils/dist/main.css";

interface Props {
    locale: string
    id: string
    entry: any
    boundData: Record<string, any>
}

const Email: NextPage = () => {
    const contentstackService = useMemo(() => new ContentstackService(), [])
    const router = useRouter()

    const [tab, setTab] = useState('email')

    useEffect(() => {
        const updateData = async () => {
            const id = router.query.id as string
            if (id) {
                const [newReponse, newBoundData] = await contentstackService.getEmail(id, "en-us", "generic_email_template")
                setEntry(newReponse)
            }
        }
        contentstackService.OnEntryChange(updateData)
    }, [contentstackService, router.query.id])

    const [entry, setEntry] = useState<any>()

    if (!entry) {
        return (<>Loading...</>)
    }
    return (
        <div className="container type-spacing-relaxed">
            <nav style={{ textAlign: "center" }}>
                <button onClick={() => setTab("email")} style={{ margin: "5px", padding: "6px 8px", borderRadius: "6px", background: tab === "email" ? "#222" : "#777", color: "#eee", border: "0px solid #000" }}>Email</button>
                <button onClick={() => setTab("source")} style={{ margin: "5px", padding: "6px 8px", borderRadius: "6px", background: tab === "source" ? "#222" : "#777", color: "#eee", border: "0px solid #000" }}>Source</button>
            </nav>
            {tab === "email" && <div>
                <GenericEmail modularBlocks={entry.modular_blocks} />
            </div>}
            {tab === "source" &&
                <GenericEmail modularBlocks={entry.modular_blocks} asRaw />
            }
        </div>
    )

}

export default Email

import { Hacker } from "@palanikannan1437/rc4-hackernews";
import "@palanikannan1437/rc4-hackernews/styles.css"

import styles from './styles.module.css'
export default async function Home() {
    return (
        <>
            <Hacker id="rocketchat" styleOverrides={{
                main: styles["my-class"],
                tabsList: 'text-red-500',
            }} />
        </>
    );
}
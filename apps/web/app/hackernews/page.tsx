import { Hacker } from "@palanikannan/react-hackernews";
import "@palanikannan/react-hackernews/styles.css"

import styles from './styles.module.css'
export default async function Home() {
    return (
        <>
            <Hacker id="blender" styleOverrides={{
                main: styles["my-class"],
                tabsList: 'text-red-500',
            }} />
        </>
    );
}
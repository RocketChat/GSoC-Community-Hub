import HackerNewsComponent from "@palanikannan1437/rc4community-hackernews/HackerNewsComponent";
import { getHackerNewsPosts } from "@palanikannan1437/rc4community-hackernews/functions";
import "@palanikannan1437/rc4community-hackernews/styles.css";
// import HackerNewsComponent from "./HackerNewsComponent";
import styles from './styles.module.css'
export default async function Home() {
    const posts = await getHackerNewsPosts("blender");
    const posts1 = await getHackerNewsPosts("rocketchat");
    return (
        <>
            <HackerNewsComponent posts={posts} styleOverrides={{
                main: styles["my-class"],
                tabsList: 'text-red-500',
            }} />
            <HackerNewsComponent posts={posts1} styleOverrides={{
                main: styles["my-class"],
                tabsList: 'text-red-500',
            }} />
        </>
    );
}
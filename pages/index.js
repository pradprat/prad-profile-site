import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import { Flex, HStack, Button } from "@chakra-ui/react";
import styles from "./index.module.scss";
import photo from "../assets/images/me2.jpg";
export default function Home() {
    return (
        <div className="container" style={{ minHeight: "100vh" }}>
            <Head>
                <title>Next.js Starter!</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <Header />
                <HStack>
                    <div className={styles.photo}>
                        <img src={photo.src}></img>
                    </div>
                    <div>
                        <h3>Hello, i'm</h3>
                        <h1>Pradika Fitra Pratama</h1>
                        <h2>Front-End Web Developer</h2>
                        <p>
                            with 2+ Years of experience using React JS Framework. Had experience
                            building small to medium-size web applications especially making
                            Reporting dashboard and Product Catalogue
                        </p>
                    </div>
                </HStack>
            </main>
            {/* <Footer /> */}
        </div>
    );
}

import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import { Flex, HStack, Button } from "@chakra-ui/react";
import styles from "./index.module.scss";
import photo from "../assets/images/me3.png";
export default function Home() {
    return (
        <div className="container">
            <Head>
                <title>Profile Pradika</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <Header />
                <HStack>
                    <div className={styles.photo}>
                        <img src={photo.src} style={{ objectFit: "fill" }}></img>
                    </div>
                    <div className={styles.mainIntro}>
                        <h3 className={styles.greeting}>Hello, i'm</h3>
                        <h1 className={styles.name}>Pradika Fitra Pratama</h1>
                        <h2 className={styles.position}>Front-End Web Developer</h2>
                        <p className={styles.summary}>
                            with 2+ Years of experience using React JS Framework. Had experience
                            building small to medium-size web applications especially making
                            Reporting dashboard and Product Catalogue
                        </p>
                    </div>
                </HStack>
                <Footer />
            </main>
            {/* <Footer /> */}
        </div>
    );
}

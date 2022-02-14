import Head from 'next/head';
import Header from '@components/Header';
import Footer from '@components/Footer';
import { Flex, HStack, Button } from '@chakra-ui/react';
import styles from './index.module.scss';
import photo from '../assets/images/me1.jpg';
export default function Home() {
    return (
        <div className='container' style={{ minHeight: '100vh' }}>
            <Head>
                <title>Next.js Starter!</title>
                <link rel='icon' href='/favicon.ico' />
            </Head>

            <main>
                <Header />
                <HStack>
                    <div className={styles.photo}>
                        <img src={photo.src}></img>
                    </div>
                    <div>Desc</div>
                </HStack>
            </main>

            <Footer />
        </div>
    );
}

import type {NextPage} from "next";
import Head from "next/head";
import {useState} from "react";
import Modal from "../components/Modal";
import styles from "./Home.module.scss";

const Home: NextPage = () => {
    const [modalVisible, setModalVisible] = useState<boolean>(false);

    function showModal() {
        setModalVisible(true);
    }

    function hideModal() {
        setModalVisible(false);
    }

    return (
        <div className={styles.container}>
            <Head>
                <title>Generic Modal component</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <p className={styles.description}>
                A basic example how to create an animatable Modal component
                using the <a href="https://www.framer.com/motion/" className={styles.link} target="_blank" rel="noreferrer">framer-motion</a> package.
            </p>

            <button onClick={showModal} className={styles.openModalBtn}>
                Open modal
            </button>

            <Modal isVisible={modalVisible} onClickCloseBtn={hideModal} />
        </div>
    );
};

export default Home;

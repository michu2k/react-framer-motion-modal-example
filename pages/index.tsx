import {useState} from "react";
import Head from "next/head";
import type {NextPage} from "next";
import Modal from "../components/Modal";
import styles from "./Home.module.scss";

const Home: NextPage = () => {
    // State used to control the modal
    const [modalVisible, setModalVisible] = useState<boolean>(false);

    function showModal() {
        setModalVisible(true);
    }

    function hideModal() {
        setModalVisible(false);
    }

    function handleConfirmBtnClick() {
        // some logic...

        hideModal();
    }

    return (
        <div className={styles.container}>
            <Head>
                <title>Generic Modal component</title>
            </Head>

            <h1>Modal</h1>

            <p className={styles.demoDescription}>
                A basic example how to create an animatable Modal component using the {" "}
                <a href="https://www.framer.com/motion/" className={styles.link} target="_blank" rel="noreferrer">framer-motion</a> {" "}
                package.
            </p>

            <button type="button" onClick={showModal} className={styles.openModalBtn}>
                Open modal
            </button>

            <Modal isVisible={modalVisible} heading="Billing info update" onClickCloseBtn={hideModal}>
                <p className={styles.text}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sapiente nobis voluptatibus itaque repudiandae voluptas eligendi autem pariatur debitis libero
                    tempore dignissimos velit vitae eum, dolorem provident odit assumenda.
                </p>

                <button type="button" onClick={handleConfirmBtnClick} className={styles.confirmBtn}>
                    Confirm
                </button>
            </Modal>
        </div>
    );
};

export default Home;

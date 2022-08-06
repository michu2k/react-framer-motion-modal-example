import type {NextPage} from "next";
import Head from "next/head";
import {useState} from "react";
import Modal, {ModalText, ModalButton} from "../components/Modal";
import styles from "./Home.module.scss";

const Home: NextPage = () => {
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

            <p className={styles.description}>
                A basic example how to create an animatable Modal component
                using the <a href="https://www.framer.com/motion/" className={styles.link} target="_blank" rel="noreferrer">framer-motion</a> package.
            </p>

            <button onClick={showModal} className={styles.openModalBtn}>
                Open modal
            </button>

            <Modal isVisible={modalVisible} heading="Billing info updated" onClickCloseBtn={hideModal}>
                <ModalText isCentered>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sapiente nobis voluptatibus itaque repudiandae voluptas eligendi autem pariatur debitis libero
                    tempore dignissimos velit vitae eum, dolorem provident odit assumenda.
                </ModalText>

                <ModalButton onClick={handleConfirmBtnClick}>
                    Confirm
                </ModalButton>
            </Modal>
        </div>
    );
};

export default Home;

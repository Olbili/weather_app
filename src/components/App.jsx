import { useState } from "react";
import Container from "./Container/Container";
import Header from "./header/Header";
import Modal from './Modal/Modal';

export const App = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  

  return (
    <Container>
      <Header setModalIsOpen={setModalIsOpen}/>
      <Modal modalIsOpen={modalIsOpen} onClose={() => setModalIsOpen(false)}/>
    </Container>
  );
};

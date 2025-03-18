import { useState } from "react";
import Modal from "../components/Modal";

const Main = () => {
  const [toggle, setToggle] = useState(true);
  return <Modal toggle={toggle} setToggle={setToggle} />;
};

export default Main;

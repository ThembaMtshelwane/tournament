import { useState } from "react";
import Modal from "../components/Modal";
import PlayerTag from "../components/PlayerTag";

const Main = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <section className=" h-screen w-full border text-[#031E51]p-4">
      <div className="border flex flex-col items-center gap-4 pt-4 p-2">
        <h1 className="text-4xl font-extrabold">TOURNAMANIA</h1>
        <Modal toggle={toggle} setToggle={setToggle} />
        <div className=" flex flex-col gap-2 px-2">
          <h3>Players</h3>
          <div className="flex gap-4 flex-wrap">
            <PlayerTag name="Player 1" />
            <PlayerTag name="Player 1" />
            <PlayerTag name="Player 1" />
            <PlayerTag name="Player 1" />
            <PlayerTag name="Player 1" />
            <PlayerTag name="Player 1" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Main;

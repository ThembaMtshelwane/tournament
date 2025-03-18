import { IoClose } from "react-icons/io5";

type Props = {
  toggle: boolean;
  setToggle: (toggle: boolean) => void;
};
const Modal = ({ toggle, setToggle }: Props) => {
  return (
    <>
      <button
        className="bg-[#031E51] rounded-lg p-4 text-[#DDE9F1]"
        onClick={() => setToggle(true)}
      >
        Add Tournament
      </button>
      {toggle && (
        <>
          <section className="inset-0 text-[#031E51] p-4 bg-black opacity-75 fixed"></section>
          <div className="border flex flex-col gap-4 items-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 bg-white px-6 py-8 rounded-lg shadow-lg w-full max-w-[450px]">
            <h2 className="text-2xl mt-8">Create a tournament</h2>
            <IoClose
              className="absolute right-0  mx-8 size-8 text-[#031E51]"
              onClick={() => setToggle(false)}
            />
            <form className="w-full p-4 flex flex-col gap-4 ">
              <div className="flex flex-col gap-2">
                <label htmlFor="name">Name</label>
                <input
                  className="border-[#031E51] border p-2 rounded-lg"
                  required
                  type="text"
                  name="name"
                  id="name"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="game">Game</label>
                <input
                  className="border-[#031E51] border p-2 rounded-lg"
                  required
                  type="text"
                  name="game"
                  id="game"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="numberOfPlayers">Number of Players</label>
                <input
                  className="border-[#031E51] border p-2 rounded-lg"
                  required
                  type="number"
                  max={8}
                  min={4}
                  name="numberOfPlayers"
                  id="numberOfPlayers"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="description">Description</label>
                <textarea
                  className="border-[#031E51] border p-2 rounded-lg"
                  name="description"
                  id="description"
                  maxLength={100}
                />
              </div>
              <button className="bg-[#031E51] rounded-lg p-4 text-[#DDE9F1] hover:bg-[#022040] transition">
                Continue
              </button>
            </form>
          </div>
        </>
      )}
    </>
  );
};

export default Modal;

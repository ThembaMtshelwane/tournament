const Home = () => {
  return (
    <section className="bg-[#DDE9F1] h-screen text-[#031E51] p-4">
      <div className=" h-full flex flex-col items-center justify-center gap-4">
        <h1 className="text-4xl font-extrabold">TOURNAMANIA</h1>
        <p>The world of champions</p>
        <form className=" w-full p-4 flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label htmlFor="email">Email</label>
            <input
              className="border-[#031E51] border p-2 rounded-lg"
              required
              type="text"
              name="email"
              id="email"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="password">Password</label>
            <input
              className="border-[#031E51] border p-2  rounded-lg"
              required
              type="password"
              name="password"
              id="password"
            />
          </div>
          <button className="bg-[#031E51] rounded-lg p-4 text-[#DDE9F1] ">
            Register
          </button>
        </form>
      </div>
    </section>
  );
};

export default Home;

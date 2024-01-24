import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="bg-[url('/art-gallery.jpg')] bg-cover bg-no-repeat bg-center min-h-screen">
      <div className="flex flex-col gap-6 py-40 px-80 text-white">
        <h1 className="text-2xl italic text-center text-4xl">
          Your one stop NFT marketplace
        </h1>
        <p className="text-center text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse quo
          eius, labore deleniti magni fugit praesentium ullam, eaque
          voluptatibus soluta iure incidunt modi, quasi fuga temporibus unde
          recusandae eos cum.
        </p>
        <div className="flex justify-center">
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            <Link to="/store">Shop</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;

import { Link } from 'react-router-dom';

function Home() {
  return (
    <div
      className="flex-1 bg-[url('/art-gallery.jpg')] bg-cover bg-center 
    bg-no-repeat"
    >
      <div className="flex flex-col gap-6 px-80 py-40 text-white">
        <h1 className="text-center text-4xl">Your one stop NFT marketplace</h1>
        <p className="text-center text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse quo
          eius, labore deleniti magni fugit praesentium ullam, eaque
          voluptatibus soluta iure incidunt modi, quasi fuga temporibus unde
          recusandae eos cum.
        </p>
        <div className="flex justify-center">
          <Link to="/store">
            <button
              type="button"
              className="mb-2 me-2 rounded-lg bg-blue-700 px-5 py-2.5 text-sm 
              font-medium text-white hover:bg-blue-800 focus:outline-none 
              focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 
              dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Shop
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;

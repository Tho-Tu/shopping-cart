export default function SearchInput() {
  return (
    <form>
      <label
        htmlFor="default-search"
        className="sr-only mb-2 text-sm font-medium text-gray-900 
        dark:text-white"
      >
        Search
      </label>
      <div className="relative">
        <div
          className="pointer-events-none absolute inset-y-0 start-0 flex min-w-max 
        items-center ps-3"
        >
          <svg
            className="h-4 w-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          type="search"
          id="default-search"
          className="block w-full rounded-lg border border-gray-300 bg-white px-10 py-4 
          ps-10 text-sm text-black focus:border-blue-500 
          focus:ring-blue-500"
          placeholder="Search"
          maxLength={16}
          required
        ></input>
        <button type="submit" className="button-blue absolute">
          Search
        </button>
      </div>
    </form>
  );
}

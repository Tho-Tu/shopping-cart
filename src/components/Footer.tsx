function Footer() {
  return (
    <footer className="flex justify-end gap-2 py-4 px-12 bg-gray-700 shadow-[0_-4px_16px_8px_rgba(0,0,0,0.3)] z-10">
      <div className="text-white">
        Photo by{" "}
        <a
          className="text-blue-500"
          href="https://unsplash.com/@joshtw?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
        >
          Josh Liu
        </a>{" "}
        on{" "}
        <a
          className="text-blue-500"
          href="https://unsplash.com/photos/white-wall-with-paintings-on-wall-Tjio9DgtIls?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
        >
          Unsplash
        </a>
      </div>
    </footer>
  );
}

export default Footer;

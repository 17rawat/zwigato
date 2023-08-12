import React, { useState, useEffect } from "react";

const Footer = () => {
  const [showFooter, setShowFooter] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollableElement = document.documentElement;
      const scrollHeight = scrollableElement.scrollHeight;
      const scrollTop = scrollableElement.scrollTop;
      const clientHeight = scrollableElement.clientHeight;

      if (scrollHeight - (scrollTop + clientHeight) < 10) {
        setShowFooter(true);
      } else {
        setShowFooter(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <footer
      className={`m-2 bg-gray-800 text-white py-4 ${
        showFooter ? "animate-slide-up" : ""
      }`}
    >
      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; 2023 Your Food Order App. All rights reserved.
        </p>

        <p>Designed and developed by Arun Rawat</p>
        <p className="text-sm">
          <a
            href="https://github.com/17rawat/zwigato"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            View Repo
          </a>
          .
        </p>
      </div>
    </footer>
  );
};

export default Footer;

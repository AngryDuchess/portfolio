"use client";
import { useEffect, useState, useRef, useCallback } from "react";
import { useRouter } from "next/navigation";
import CalendarModal from "./modal-google-calendar";
import { CallCalling, Messages2 } from "iconsax-react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const router = useRouter();
  const [isHovered, setIsHovered] = useState(false);
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [isCalendarModalOpen, setIsCalendarModalOpen] = useState(false);
  const [activeHash, setActiveHash] = useState("");
  const popupRef = useRef(null);
  const buttonRef = useRef(null);

  const handleButtonClick = useCallback(() => {
    setPopupOpen((prev) => !prev);
  }, []);

  const handleOpenCalendarModal = useCallback(() => {
    setIsCalendarModalOpen(true);
    document.body.classList.add("body-no-scroll");
  }, []);

  const handleCloseCalendarModal = () => {
    setIsCalendarModalOpen(false);
    document.body.classList.remove("body-no-scroll");
  };

  useEffect(() => {
    const updateHash = () => {
      if (typeof window !== "undefined") {
        setActiveHash(window.location.hash);
      }
    };

    window.addEventListener("hashchange", updateHash);

    return () => {
      window.removeEventListener("hashchange", updateHash);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        popupRef.current &&
        !popupRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setPopupOpen(false);
      }
    };

    if (isPopupOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isPopupOpen]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setActiveHash(window.location.hash);
    }
  }, [router.asPath]);

  const isActiveTab = (path) => {
    if (path.startsWith("#")) {
      return activeHash === path ? "bg-gray-400 rounded-full" : "";
    }
    return router.pathname === path ? "bg-gray-400 rounded-full" : "";
  };

  return (
    <>
      <header className="w-screen backdrop-blur-md xl:sticky z-20 bottom-0 fixed xl:top-0 px-4 bg-portfolioWhite dark:bg-portfolioDarkBackground/90 backdrop-filter bg-opacity-50 pb-8 xl:pb-0 xl:pt-8">
        <nav className="bg-gray-900 dark:bg-portfolioDarkBackground backdrop-filter backdrop-blur-sm nav-shadow bg-opacity-60 border-b border-gray-600 dark:border-portfolioDarkStroke mx-0 md:mx-auto px-2 py-2 max-w-3xl rounded-full">
          <div className="flex items-center justify-between">
            <Link href="/">
              <Image src="/icon.svg" alt="logo" width={40} height={40} />
            </Link>
            <ul className="text-gray-300 flex gap-4">
              <li
                className={`${isActiveTab(
                  "#hero"
                )} py-1 px-3 hover:bg-gray-400 hover:rounded-full dark:hover:bg-portfolioDarkHover`}
              >
                <a
                  href={
                    typeof window !== "undefined" &&
                    window.location.pathname === "/"
                      ? "#hero"
                      : "/"
                  }
                  className=""
                >
                  Home
                </a>
              </li>
              <li
                className={`${isActiveTab(
                  "#work"
                )} py-1 px-3 hover:bg-gray-400 hover:rounded-full dark:hover:bg-portfolioDarkHover`}
              >
                <a className="" href="#work">
                  Work
                </a>
              </li>
              <li
                className={`${isActiveTab(
                  "#about"
                )} py-1 px-3 hover:bg-gray-400 hover:rounded-full dark:hover:bg-portfolioDarkHover`}
              >
                <a className="" href="#about">
                  About
                </a>
              </li>
            </ul>
            <div className="flex gap-2 lg:gap-8 items-center text-sm">
              <button
                ref={buttonRef}
                className="relative button-shadow bg-portfolioSecondary text-sm font-semibold leading-6 border border-[#00428C] text-white py-2 px-4 rounded-full"
                onClick={handleButtonClick}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <span className="say-hi-text">Say hi </span>
                {isHovered ? (
                  <Image
                    style={{ display: "inline", verticalAlign: "middle" }}
                    width={14}
                    height={14}
                    src="/handwave.gif"
                    alt="waving hand gif"
                  />
                ) : (
                  "👋"
                )}
              </button>
              {isPopupOpen && (
                <div
                  ref={popupRef}
                  className="absolute z-30 popup xl:top-14 right-0  bg-portfolioWhite dark:bg-portfolioDarkBackground shadow-lg w-full max-w-36 py-3 rounded-md"
                >
                  <ul className="text-sm text-left">
                    <li
                      className="p-2 hover:bg-blue-100 dark:hover:bg-portfolioDarkHover hover:mx-1 hover:rounded-md cursor-pointer flex gap-2"
                      onClick={handleOpenCalendarModal}
                    >
                      <CallCalling
                        size="16"
                        color="var(--popup-icon-color-light)"
                      />{" "}
                      Book a call
                    </li>
                    <li className="p-2 hover:bg-blue-100 dark:hover:bg-portfolioDarkHover hover:mx-1 hover:rounded-md">
                      <a
                        className="flex gap-2"
                        href="mailto:mahamahamida@gmail.com"
                      >
                        <Messages2
                          size="16"
                          color="var(--popup-icon-color-light)"
                        />{" "}
                        Send email
                      </a>
                    </li>
                    <hr className="mt-4" />
                    <p className="mt-4 p-2 text-[12px] text-portfolioTextLight">
                      or connect with me:
                    </p>
                    <li className="p-2 flex gap-6">
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://github.com/AngryDuchess/"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="#656560"
                            d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-4.466 19.59c-.405.078-.534-.171-.534-.384v-2.195c0-.747-.262-1.233-.55-1.481 1.782-.198 3.654-.875 3.654-3.947 0-.874-.312-1.588-.823-2.147.082-.202.356-1.016-.079-2.117 0 0-.671-.215-2.198.82-.64-.18-1.324-.267-2.004-.271-.68.003-1.364.091-2.003.269-1.528-1.035-2.2-.82-2.2-.82-.434 1.102-.16 1.915-.077 2.118-.512.56-.824 1.273-.824 2.147 0 3.064 1.867 3.751 3.645 3.954-.229.2-.436.552-.508 1.07-.457.204-1.614.557-2.328-.666 0 0-.423-.768-1.227-.825 0 0-.78-.01-.055.487 0 0 .525.246.889 1.17 0 0 .463 1.428 2.688.944v1.489c0 .211-.129.459-.528.385-3.18-1.057-5.472-4.056-5.472-7.59 0-4.419 3.582-8 8-8s8 3.581 8 8c0 3.533-2.289 6.531-5.466 7.59z"
                          />
                        </svg>
                      </a>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.linkedin.com/in/hamidamahama/"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="#656560"
                            d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.278c-.966 0-1.75-.79-1.75-1.764 0-.975.784-1.764 1.75-1.764s1.75.789 1.75 1.764c0 .974-.784 1.764-1.75 1.764zm13.5 11.278h-3v-5.604c0-1.337-.026-3.061-1.867-3.061-1.869 0-2.157 1.461-2.157 2.969v5.696h-3v-10h2.879v1.366h.041c.401-.762 1.381-1.564 2.842-1.564 3.039 0 3.6 2 3.6 4.604v5.594z"
                          />
                        </svg>
                      </a>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://twitter.com/angry_duchess"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="#656560"
                            d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm.293 8.418c.008.176.012.353.012.53 0 5.421-4.126 11.673-11.673 11.673-2.318 0-4.478-.679-6.296-1.843.322.038.651.057.983.057 1.924 0 3.695-.656 5.099-1.76-1.796-.033-3.31-1.22-3.833-2.849.25.048.506.073.772.073.374 0 .737-.051 1.081-.143-1.878-.377-3.293-2.036-3.293-4.023v-.051c.553.307 1.186.491 1.86.512-1.101-.735-1.826-1.99-1.826-3.414 0-.751.202-1.455.555-2.059 2.022 2.482 5.041 4.115 8.448 4.287-.07-.3-.107-.615-.107-.938 0-2.274 1.843-4.117 4.117-4.117 1.184 0 2.255.499 3.005 1.296.937-.184 1.816-.527 2.611-.997-.307.957-.957 1.76-1.805 2.268.832-.1 1.625-.321 2.364-.649-.554.824-1.253 1.547-2.058 2.125z"
                          />
                        </svg>
                      </a>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </nav>
      </header>
      {isCalendarModalOpen && (
        <CalendarModal
          isOpen={isCalendarModalOpen}
          onClose={handleCloseCalendarModal}
        >
          <iframe
            src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ3YpGo952D33Z2kyqkNX5WF5hiJRRsUE5f5W_SrXFzSulxri4Ea4KXa9kh7YziL5yXZv3ig6ZZc?gv=true"
            style={{ border: 0 }}
            width="100%"
            height="600"
            frameBorder="0"
          />
        </CalendarModal>
      )}
    </>
  );
}

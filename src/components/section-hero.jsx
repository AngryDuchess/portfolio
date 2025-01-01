import Image from "next/image";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="text-portfolioTextDark dark:text-portfolioDarkTextDark w-screen py-16 xl:py-20 lg:px-0 px-4"
    >
      <div className="flex gap-4 flex-col max-w-3xl mx-auto">
        <div className="flex flex-col gap-4">
          <div className="flex flex-row gap-2 xl:gap-0 xl:justify-between items-center flex-wrap xl:flex-nowrap">
            <p className="text-3xl xl:text-[40px] font-bold">
              I Create Seamless
            </p>
            <span className="bg-gray-300 border  dark:bg-zinc-900 border-gray-400 dark:border-zinc-800 rounded-2xl w-16 h-16 sticker-shadow -rotate-6">
              <Image
                src="/stickers/sticker-1.webp"
                width={2000}
                height={2000}
                alt=""
              />
            </span>
            <p className="text-3xl xl:text-[40px] font-bold">
              User Experiences{" "}
            </p>
          </div>
          <div className="flex flex-row gap-3 items-center flex-wrap">
            <p className="text-3xl xl:text-[40px] font-bold">Through</p>
            <p
              className="text-3xl xl:text-[40px] font-bold leading-loose"
              style={{
                background: "var(--text-gradient)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                display: "inline",
              }}
            >
              Design & Code
            </p>
            <span className="bg-gray-300 border dark:bg-zinc-900 border-gray-400 dark:border-zinc-800 rounded-2xl w-16 h-16 sticker-shadow rotate-6">
              <Image
                src="/stickers/sticker-2.webp"
                width={2000}
                height={2000}
                alt=""
              />
            </span>
          </div>
        </div>
        <div className="flex flex-col">
          <p className="text-portfolioTextLight dark:text-portfolioDarkTextLight text-left">
            That&apos;s right! I don&apos;t only design..I code as well! I have
            been doing this for 2 years and i make sure to create fresh and
            polished solutions. I am constantly learning and immersing myself
            into spaces that would help me grow as an individual. You will
            mostly find me:
          </p>{" "}
          <br />
          <div className="text-portfolioTextLight dark:text-portfolioDarkTextLight text-left">
            <ul className="list-disc flex flex-col gap-4 xl:gap-2">
              <li className="flex gap-2 items-center">
                - watching
                <span className="flex items-center border px-3 border-gray-300 dark:border-zinc-800 rounded-full gap-2">
                  <Image
                    className="w-8 h-auto "
                    src="https://media.giphy.com/media/cPBjiZmxXkESLINLCI/giphy.gif"
                    width={2000}
                    height={2000}
                    alt=""
                  />
                  sci-fi
                </span>
              </li>
              <li className="flex gap-2 items-center flex-wrap">
                - reading tech related articles, mostly about
                <span className="flex items-center border gap-2 px-3 border-gray-300 dark:border-zinc-800 rounded-full">
                  <Image
                    className="w-8 h-auto "
                    src="/AR-glasses.png"
                    width={2000}
                    height={2000}
                    alt=""
                  />
                  immersive technologies
                </span>
              </li>
              <li className="flex gap-2 items-center flex-wrap">
                - walking my{" "}
                <span className="flex items-center border gap-2 px-3 border-gray-300 dark:border-zinc-800 rounded-full">
                  <Image
                    className="w-8 h-auto "
                    src="/dog.png"
                    width={2000}
                    height={2000}
                    alt=""
                  />
                  dog
                </span>
              </li>
              <li className="flex gap-2 items-center flex-wrap">
                - or dancing in my room to Arya Starr&apos;s{" "}
                <span className="flex items-center border gap-2 px-3 border-gray-300 dark:border-zinc-800 rounded-full">
                  <Image
                    className="w-8 h-auto "
                    src="/radio.png"
                    width={2000}
                    height={2000}
                    alt=""
                  />
                  songs
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="text-portfolioTextDark dark:text-portfolioDarkTextDark w-screen py-16 xl:py-20 lg:px-0 px-4"
    >
      <div className="flex gap-4 flex-col max-w-4xl mx-auto">
        <div className="flex flex-col gap-4 text-3xl xl:text-[40px]">
          <div className="flex flex-row gap-2 xl:gap-0 xl:justify-between items-center flex-wrap xl:flex-nowrap">
            <p className="  font-bold">
              I Create Pretty &
            </p>
            <span className="bg-gray-300 border  dark:bg-zinc-900 border-gray-400 dark:border-zinc-800 rounded-2xl w-16 h-16 sticker-shadow -rotate-6">
              <Image
                src="/stickers/sticker-1.webp"
                width={2000}
                height={2000}
                alt=""
              />
            </span>
            <p className="  font-bold">
              Functional Experiences{" "}
            </p>
          </div>
          <div className="flex flex-row gap-3 items-center flex-wrap">
            <p className=" font-bold">Through</p>
            <p
              className=" font-bold leading-loose text-gradient bg-gradient-to-r from-[#0056b8] via-[#5fd4ff] to-[#0056b8]"
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
            into spaces that would help me grow as an individual. I have worked these
            amazing clients:
          </p>{" "}
          <br />
          <div className="text-portfolioTextLight dark:text-portfolioDarkTextLight text-left">
            <ul className="list-disc flex gap-4 xl:gap-2 flex-wrap">
              <li className="flex gap-2 items-center">
                <span className="flex items-center border px-3 border-gray-300 dark:border-zinc-800 rounded-full gap-2">
                  <Image
                    className="w-8 h-auto logos"
                    src="https://res.cloudinary.com/dn5ks1ljf/image/upload/v1735865486/Portfolio%20assets/cloudport-logo_k1ht7s.png"
                    width={2000}
                    height={2000}
                    alt=""
                  />
                  Cloudport
                </span>
              </li>
              <li className="flex gap-2 items-center">
                <span className="flex items-center border px-3 border-gray-300 dark:border-zinc-800 rounded-full gap-2">
                  <Image
                    className="w-8 h-auto logos"
                    src="https://res.cloudinary.com/dn5ks1ljf/image/upload/v1735866891/Portfolio%20assets/touch_stack_technologies_logo-removebg-preview_okjzop.png"
                    width={2000}
                    height={2000}
                    alt=""
                  />
                  Touchstack Technologies
                </span>
              </li>
              <li className="flex gap-2 items-center">
                <span className="flex items-center border px-3 border-gray-300 dark:border-zinc-800 rounded-full gap-2">
                  <Image
                    className="w-8 h-auto logos"
                    src="https://res.cloudinary.com/dn5ks1ljf/image/upload/v1735865486/Portfolio%20assets/cloudport-logo_k1ht7s.png"
                    width={2000}
                    height={2000}
                    alt=""
                  />
                  Fleetops & vantage
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

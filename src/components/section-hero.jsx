import Image from "next/image";
import BrandSection from "./section-brands";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="text-portfolioTextDark dark:text-portfolioDarkTextDark w-screen py-16 xl:py-20 lg:px-0 px-4"
    >
      <div className="flex gap-4 flex-col max-w-4xl mx-auto">
        <div className="flex flex-col gap-4 text-3xl xl:text-[40px]">
          <div className="flex flex-row gap-2 xl:gap-0 xl:justify-between items-center flex-wrap xl:flex-nowrap">
            <p className="  font-bold">I Create Pretty</p>
            <span className="bg-gray-300 border  dark:bg-zinc-900 border-gray-400 dark:border-zinc-800 rounded-2xl w-16 h-16 sticker-shadow -rotate-6">
              <Image
                src="/stickers/sticker-1.webp"
                width={2000}
                height={2000}
                alt="apple memoji"
                priority
              />
            </span>
            <p className="  font-bold">& Functional Experiences </p>
          </div>
          <div className="flex flex-row gap-3 items-center flex-wrap">
            <p className=" font-bold">Through</p>
            <p className=" font-bold leading-loose text-gradient bg-gradient-to-r from-[#0056b8] via-[#5fd4ff] to-[#0056b8]">
              Design & Code
            </p>
            <span className="bg-gray-300 border dark:bg-zinc-900 border-gray-400 dark:border-zinc-800 rounded-2xl w-16 h-16 sticker-shadow rotate-6">
              <Image
                src="/stickers/sticker-2.webp"
                width={2000}
                height={2000}
                alt="apple memoji"
                priority
              />
            </span>
          </div>
        </div>
        <div className="flex flex-col text-portfolioTextLight dark:text-portfolioDarkTextLight text-left">
          <p>
            My expertise lies in creating polished, scalable experiences that
            deliver real value to users and businesses alike. I&apos;ve
            collaborated with diverse clients, mostly startups, to design and
            build products that leave a lasting impression.
          </p>{" "}
          <br />
          <p className="mb-4">Proud to have collaborated with these brands:</p>

            <BrandSection />
        </div>
      </div>
    </section>
  );
}

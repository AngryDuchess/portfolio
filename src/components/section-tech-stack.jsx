import Image from "next/image";

export const revalidate = 30;

export default function TechStack({ TechStackSection }) {
  const logos = TechStackSection?.stackLogos || [];

  return (
    <section
      id="hero"
      className="text-portfolioTextLight dark:text-portfolioDarkTextLight w-screen py-16 xl:py-20 lg:px-0 px-4"
    >
      <div className="flex gap-8 flex-col max-w-4xl mx-auto justify-center items-center">
        <p className="text-3xl xl:text-[40px] font-bold text-portfolioTextDark dark:text-portfolioDarkTextDark">
          {TechStackSection?.sectionTitle}
        </p>
        <p>{TechStackSection?.sectionDescription}</p>
        <div className="flex gap-2 flex-wrap w-full items-center lg:items-start justify-center">
        {logos && logos.length > 0 ? (
            logos.map((logo) => {
              const stackLogoItem = logo.stackLogo[0];
              return (
                <div
                  key={stackLogoItem.id}
                  className="flex items-center rounded-3xl w-24 h-24 hover:bg-portfolioHover hover:bg-opacity-5 justify-center"
                >
                  <Image
                    src={stackLogoItem.url}
                    className="w-16 h-16 rounded-xl"
                    alt={stackLogoItem.alternativeText}
                    width={150}
                    height={150}
                  />
                </div>
              );
            })
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </section>
  );
}

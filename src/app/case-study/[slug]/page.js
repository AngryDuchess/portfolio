import BlockRendererClient from "../../lib/blockrenderclient.jsx";
import Image from "next/image";
import Link from "next/link";
import { fetchCaseStudyDetails } from "@/lib/api";
import { ArrowLeft } from "iconsax-react";

export const revalidate = 30;

const CaseStudy = async ({ searchParams }) => {
  const query = (await searchParams).id;
  const color = `#${searchParams.color || ""}`;
  const data = await fetchCaseStudyDetails(query || "");
  const caseStudy = data?.data;
  return (
    <>
      <Link
        href="/"
        className="fixed top-4 left-4 leading-7 flex items-center bg-portfolioTextDark text-shadow border-b-2 border-black hover:border-none button-secondary-shadow text-[#EBEBEB] px-3 py-1 rounded-full text-sm italic min-h-10"

        passHref
      >
        <ArrowLeft color="#ffffff" size={14} />
        Back to Home
      </Link>
      {caseStudy?.caseStudyLink ? (
        <div className="h-screen w-screen flex items-center justify-center">
          <iframe
            style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }}
            width="100%"
            height="100%"
            src={caseStudy?.caseStudyLink}
            allowFullScreen
          ></iframe>
        </div>
      ) : (
        <section
          style={{ backgroundColor: color }}
          className="min-h-screen w-full px-4 lg:px-0 text-portfolioDarkTextDark pt-6 lg:pt-24 relative"
        >
          <div className="flex gap-8 flex-col max-w-4xl mx-auto py-8 justify-center items-start lg:items-center">
            <h1 className="text-4xl lg:text-6xl font-medium">
              {caseStudy.caseStudyTitle}
            </h1>
            <p>{caseStudy.caseStudyDescription}</p>
          </div>
          <div className="flex gap-8 flex-col md:flex-row max-w-4xl mx-auto py-8 text-sm justify-between items-start lg:items-center border-y border-white">
            <div>
              <p className="text-[#5FD4FF]">Duration</p>
              <p className="">{caseStudy?.aboutProject.projectDuration}</p>
            </div>
            <div>
              <p className="text-[#5FD4FF]">Platform</p>
              <p className="">{caseStudy?.aboutProject.platform}</p>
            </div>
            <div>
              <p className="text-[#5FD4FF]">Role</p>
              <p className="">{caseStudy?.aboutProject.role}</p>
            </div>
            <div>
              <p className="text-[#5FD4FF]">Client</p>
              <p className="">{caseStudy?.aboutProject.clientName}</p>
            </div>
          </div>
          <section className="py-16">
            <Image
              className="rounded-3xl w-full max-w-5xl mx-auto"
              src={caseStudy?.thumbnail.url}
              width={2000}
              height={2000}
              alt={caseStudy?.caseStudyTitle}
            />
          </section>

          {/* Case Study Body Section */}
          <section className="pb-16 flex flex-col items-center leading-8 text-portfolioDarkTextLight">
            <div className="max-w-3xl">
              <BlockRendererClient content={caseStudy?.caseStudyBody} />
            </div>
          </section>
          <div className="flex gap-8 flex-col max-w-4xl mx-auto pt-8 pb-28 justify-center items-start lg:items-center">
            <h1 className="text-4xl lg:text-6xl font-medium">Final Mockups</h1>
            <div className="flex flex-wrap gap-8 justify-center">
              {caseStudy?.mockups?.map((mockup, index) => (
                <Image
                  key={index}
                  className="rounded-3xl w-full max-w-3xl mx-auto"
                  src={mockup.url}
                  width={2000}
                  height={2000}
                  alt={`Mockup ${index + 1}`}
                />
              ))}
            </div>
            <p className="">Thanks for reading! 😘</p>
          </div>
        </section>
      )}
    </>
  );
};

export default CaseStudy;

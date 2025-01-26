import BlockRendererClient from "../../lib/blockrenderclient.jsx";
import Image from "next/image";
import { fetchCaseStudyDetails } from "@/lib/api";

const CaseStudy = async ({ searchParams }) => {
  const query = (await searchParams).id
  const color = (await searchParams).color
  const data = await fetchCaseStudyDetails(query || '')
  const caseStudy = data?.data
  return (
    <>
      {/* Thumbnail Section */}
      <section className="text-portfolioTextDark w-screen py-16 px-4">
        <Image
          className="rounded-3xl w-full max-w-3xl mx-auto"
          src={caseStudy?.thumbnail}
          width={2000}
          height={2000}
          alt={caseStudy?.title}
        />
      </section>

      {/* Project Details Section */}
      <section className="text-portfolioTextDark dark:text-portfolioDarkTextDark w-screen px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-4 justify-between max-w-3xl mx-auto p-4 rounded-xl shadow-md bg-[#fafafa] dark:bg-portfolioDarkBackground border-b border-[#CCCCCC]">
          <div className="flex flex-col items-start">
            <p className="text-sm font-semibold text-portfolioTextLight">
              Duration
            </p>
            <p className="text-sm">{caseStudy?.projectDuration}</p>
          </div>
          <div className="flex flex-col items-start">
            <p className="text-sm font-semibold text-portfolioTextLight">
              Platform
            </p>
            <p className="text-sm">{caseStudy?.platform}</p>
          </div>
          <div className="flex flex-col items-start">
            <p className="text-sm font-semibold text-portfolioTextLight">Role</p>
            <p className="text-sm">{caseStudy?.role}</p>
          </div>
          <div className="flex flex-col items-start">
            <p className="text-sm font-semibold text-portfolioTextLight">
              Client
            </p>
            <p className="text-sm">{caseStudy?.clientName}</p>
          </div>
        </div>
      </section>

      {/* Case Study Body Section */}
      <section className="text-portfolioTextDark dark:text-portfolioDarkTextDark w-screen py-16 px-4">
        <div className="flex gap-20 flex-col max-w-3xl mx-auto">
          <BlockRendererClient content={caseStudy?.caseStudyBody} />
        </div>
      </section>

      {/* Final Mockups Section */}
      <section className="text-portfolioTextDark dark:text-portfolioDarkTextDark text-left w-screen py-16 px-4">
        <div className="flex gap-20 flex-col max-w-3xl mx-auto">
          <h1 className="font-bold text-6xl">Final Mockups</h1>
          {caseStudy?.finalMockups ? (
            <video
              className="w-full max-h-64"
              controls
              autoPlay
              muted
              loop
              src={caseStudy?.finalMockups}
            >
              Your browser does not support this video.
            </video>
          ) : (
            <Image
              src={caseStudy?.finalMockups}
              width={2000}
              height={2000}
              alt="Final Mockups"
            />
          )}
        </div>
      </section>

      {/* Thanks Image Section */}
      <section className="text-portfolioTextDark dark:text-portfolioDarkTextDark w-screen py-16 px-4">
        <Image
          className="rounded-3xl w-full max-w-3xl mx-auto"
          src={caseStudy?.thanksImage}
          width={2000}
          height={2000}
          alt="Thanks"
        />
      </section>
    </>
  );
  // return (<div>Hello world</div>)
};

export default CaseStudy;
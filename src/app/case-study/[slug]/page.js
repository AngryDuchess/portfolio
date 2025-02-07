import BlockRendererClient from "../../lib/blockrenderclient.jsx";
import Image from "next/image";
import { fetchCaseStudyDetails } from "@/lib/api";

export const revalidate = 30;

const CaseStudy = async ({ searchParams }) => {
  const query = (await searchParams).id;
  const color = `#${searchParams.color || ""}`;
  const data = await fetchCaseStudyDetails(query || "");
  const caseStudy = data?.data;
  return (
    <section
      style={{ backgroundColor: color }}
      className="min-h-screen w-full px-4 lg:px-0 text-portfolioDarkTextDark  pt-20 relative"
    >
      <div className="flex gap-8 flex-col max-w-4xl mx-auto py-8 justify-center items-start lg:items-center">
        <h1 className="text-4xl lg:text-6xl font-medium">{caseStudy.caseStudyTitle}</h1>
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
  );
};

export default CaseStudy;

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
      {caseStudy?.caseStudyLink && (
        <div className="h-screen w-screen flex items-center justify-center">
          <iframe
            style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }}
            width="100%"
            height="100%"
            src={caseStudy?.caseStudyLink}
            allowFullScreen
          ></iframe>
        </div>
      )}
    </>
  );
};

export default CaseStudy;
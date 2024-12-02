"use client"
import { useRouter } from 'next/navigation';
import BlockRendererClient from "../../lib/blockrenderclient.jsx";
import { useCaseStudy } from '@/context/case-study-context.jsx';
import Image from 'next/image.js';

const Casestudy = () => {
  const router = useRouter();
  const { selectedCaseStudy } = useCaseStudy();
  console.log(selectedCaseStudy)

  useEffect(() => {
    if (!selectedCaseStudy) {
      router.push("/");
    }
  }, [selectedCaseStudy, router]);

  // const { state } = useLocation();
  // const { data } = router;
  // const caseStudyData = state?.caseStudyData;
  const richText = selectedCaseStudy.caseStudyBody
 

  // if (!selectedCaseStudy) {
  //   return <p>No case study data available</p>;
  // }

  return (
    <>
      <section className="text-portfolioTextDark w-screen py-16  px-4">
        <Image
          className="rounded-3xl w-full max-w-3xl mx-auto"
          src={selectedCaseStudy.thumbnail}
          width={2000}
              height={2000}
              alt=""
        />
      </section>
      <section className="text-portfolioTextDark w-screen   px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-4 justify-between  max-w-3xl mx-auto p-4 rounded-xl shadow-md bg-[#fafafa] border-b border-[#CCCCCC]">
          <div className="flex flex-col items-start">
            <p className="text-sm font-semibold text-portfolioTextLight">
              Duration
            </p>
            <p className="text-sm">{selectedCaseStudy.projectDuration}</p>
          </div>
          <div className="flex flex-col items-start">
            <p className="text-sm font-semibold text-portfolioTextLight">
              Platform
            </p>
            <p className="text-sm">{selectedCaseStudy.platform}</p>
          </div>
          <div className="flex flex-col items-start">
            <p className="text-sm font-semibold text-portfolioTextLight">
              Role
            </p>
            <p className="text-sm">{selectedCaseStudy.role}</p>
          </div>
          <div className="flex flex-col items-start">
            <p className="text-sm font-semibold text-portfolioTextLight">
              Client
            </p>
            <p className="text-sm">{selectedCaseStudy.clientName}</p>
          </div>
        </div>
      </section>
      <section className="text-portfolioTextDark w-screen py-16  px-4">
      <div className="flex gap-20 flex-col max-w-3xl mx-auto">
        
        <BlockRendererClient content={richText} />
        </div>
        </section>
      <section className="text-portfolioTextDark text-left w-screen py-16  px-4">
      <div className="flex gap-20 flex-col max-w-3xl mx-auto">
        <h1 className="font-bold text-6xl ">Final Mockups</h1>
            <video className="w-full max-h-64" controls autoPlay loop src={selectedCaseStudy.finalMockups}>Your browser does not support this video</video>
            
      </div>
      </section>
      <section className="text-portfolioTextDark w-screen py-16  px-4">
        <Image
          className="rounded-3xl w-full max-w-3xl mx-auto"
          src={selectedCaseStudy.thanksImage}
          width={2000}
              height={2000}
              alt=""
        />
      </section>
    </>
  );
};

export default Casestudy;

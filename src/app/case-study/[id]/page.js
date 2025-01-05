"use client"
import BlockRendererClient from "../../lib/blockrenderclient.jsx";
import Image from 'next/image.js';
import { useEffect, useState } from 'react';
import { fetchCaseStudyDetails } from '@/lib/api.js';

export const revalidate = 30

const Casestudy = ({ params }) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      const unwrappedParams = await params;
      fetchCaseStudyDetails(unwrappedParams.id).then((data) => {
        setData(data);
        setLoading(false);
        console.log(unwrappedParams);
      }).catch((error)=> {
        console.error("Error fetching case study")
        setLoading(false)
      });
    };

    fetchData();
  }, [params]);


  if (loading) {
    return <p className="flex justify-center items-center w-screen h-screen animate-pulse">Fetching casestudy...</p>;
  }

  if (!data) {
    return <p>No case study data available</p>;
  }


  const richText = data?.caseStudyBody
 


  return (
    <>
      <section className="text-portfolioTextDark w-screen py-16  px-4">
        <Image
          className="rounded-3xl w-full max-w-3xl mx-auto"
          src={data?.thumbnail}
          width={2000}
              height={2000}
              alt=""
        />
      </section>
      <section className="text-portfolioTextDark dark:text-portfolioDarkTextDark w-screen   px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-4 justify-between  max-w-3xl mx-auto p-4 rounded-xl shadow-md bg-[#fafafa] dark:bg-portfolioDarkBackground border-b border-[#CCCCCC]">
          <div className="flex flex-col items-start">
            <p className="text-sm font-semibold text-portfolioTextLight">
              Duration
            </p>
            <p className="text-sm">{data?.projectDuration}</p>
          </div>
          <div className="flex flex-col items-start">
            <p className="text-sm font-semibold text-portfolioTextLight">
              Platform
            </p>
            <p className="text-sm">{data?.platform}</p>
          </div>
          <div className="flex flex-col items-start">
            <p className="text-sm font-semibold text-portfolioTextLight">
              Role
            </p>
            <p className="text-sm">{data?.role}</p>
          </div>
          <div className="flex flex-col items-start">
            <p className="text-sm font-semibold text-portfolioTextLight ">
              Client
            </p>
            <p className="text-sm">{data?.clientName}</p>
          </div>
        </div>
      </section>
      <section className="text-portfolioTextDark dark:text-portfolioDarkTextDark w-screen py-16  px-4">
      <div className="flex gap-20 flex-col max-w-3xl mx-auto">
        
        <BlockRendererClient content={richText} />
        </div>
        </section>
      <section className="text-portfolioTextDark dark:text-portfolioDarkTextDark text-left w-screen py-16  px-4">
      <div className="flex gap-20 flex-col max-w-3xl mx-auto">
        <h1 className="font-bold text-6xl ">Final Mockups</h1>
            {/* <video className="w-full max-h-64" controls autoPlay loop src={data?.finalMockups}>Your browser does not support this video</video> */}
            <Image src={data?.finalMockups} width={2000}
              height={2000}
              alt=""/>
      </div>
      </section>
      <section className="text-portfolioTextDark dark:text-portfolioDarkTextDark w-screen py-16  px-4">
        <Image
          className="rounded-3xl w-full max-w-3xl mx-auto"
          src={data?.thanksImage}
          width={2000}
              height={2000}
              alt=""
        />
      </section>
    </>
  );
};

export default Casestudy;

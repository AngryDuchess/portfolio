"use server";
import qs from "qs";

const baseUrls = [
  process.env.NEXT_PUBLIC_BASE_URL_1,
  process.env.NEXT_PUBLIC_BASE_URL_2,
];

const homeQuery = qs.stringify({
  populate: {
    techStack: {
      populate: {
        stackLogos: {
          populate: ["stackLogo"],
        },
      },
    },
    allProjects: {
      populate: {
        header: "*",
        design_projects: {
          populate: ["case_study"],
          sort: ["createdAt:desc"],
        },
        development_projects: {
          populate: "*",
          sort: ["createdAt:desc"],
        },
      },
    },
    aboutSection: "*",
  },
});

const casestudyQuery = qs.stringify({
  populate: {
    about: "*",
  },
});

const getHomeData = async (path) => {
  const url = new URL(path, baseUrls[0]);
  url.search = homeQuery;
  try {
    console.log(`Fetching data...`);
    const res = await fetch(url.href, {
      method: "GET",
    });
    console.log(`Successfully fetched`);
    if (res?.ok) {
      return res.json();
    }
  } catch (e) {
    return {
      error: e?.response?.data,
    };
  }
};

const fetchCaseStudyDetails = async (id) => {
  try {
    console.log(`Fetching data...`);
    const res = await fetch(
      `${baseUrls[0]}/api/case-studies/${id}?populate=*`,
      { method: "GET", cache: "no-cache" }
    );
    console.log(`Successfully fetched`);
    if (res?.ok) {
      return res.json();
    }
  } catch (e) {
    console.log(e);
    return {
      error: e?.response?.data,
    };
  }
};

export { fetchCaseStudyDetails, getHomeData };

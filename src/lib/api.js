import axios from "axios";
import { flattenAttributes } from "./utils/utils";


const baseUrls = [
  process.env.NEXT_PUBLIC_BASE_URL_1,
  process.env.NEXT_PUBLIC_BASE_URL_2
]
const fetchProjects = async (path) => {
  for (const baseUrl of baseUrls){
    const url = new URL(path, baseUrl);
    try {
      console.log(`Fetching data...`);
      const res = await axios.get(url.href);
      const flattenedData = flattenAttributes(res.data);
      console.log(`Successfully fetched`);

      return flattenedData;
    } catch (err) {
      console.error(`Failed to fetch`, err);
    }
  }
  throw new Error("All URLs failed to fetch data.");
};

const fetchCaseStudyDetails = async (id) => {
  for (const baseUrl of baseUrls){
    try {
      console.log(`Fetching data...`);
      const res = await axios.get(`${baseUrl}api/case-studies/${id}`);
      const flattenedData = flattenAttributes(res.data);
      console.log(`Successfully fetched`);

      return flattenedData;
    } catch (err) {
      console.error(`Failed to fetch`, err);
    }
  }
  throw new Error("All URLs failed to fetch data.");
};


export { fetchProjects,fetchCaseStudyDetails };

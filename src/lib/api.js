import axios from "axios";
import { flattenAttributes } from "./utils/utils";


const baseUrls = [
  "https://hamida-mahama.onrender.com/",
  "https://cms-0qf1.onrender.com/",
  // "http://localhost:1337",
];
const fetchProjects = async (path) => {
  for (const baseUrl of baseUrls){
    const url = new URL(path, baseUrl);
    try {
      console.log(`Attempting to fetch from ${url.href}`);

      const res = await axios.get(url.href);
      const flattenedData = flattenAttributes(res.data);
      console.log(`Successfully fetched from ${url.href}`);

      return flattenedData;
    } catch (err) {
      console.error(`Failed to fetch ${baseUrl}`, err);
    }
  }
  throw new Error("All base URLs failed to fetch data.");
};



export { fetchProjects };

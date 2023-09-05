import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    const fetcher = async () => {
      const response = await fetch("/api/hello", {
        method: "GET",
      });
      console.log(await response.json());
    };
    fetcher();
  }, []);

  return <div className="bg-black text-white">About</div>;
};
export default About;

import axios from "axios";

export const getStaticProps = async () => {
  const { data } = await axios.get(
    `${
      process.env.NODE_ENV === "development"
        ? "http://localhost:3000"
        : process.env.URL_DEPLOY
    }/api/hello`
  );

  return { props: { data } };
};

const About2 = ({ data }) => {
  return <div className="bg-black text-white">{data?.name}</div>;
};

export default About2;

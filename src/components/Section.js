import datas from "../assets/data/movies.json";

const Section = (props) => {
  return (
    <>
      {datas.map((section, index) => {
        return (
          <div className="container">
            <p className="title" key={index}>
              {section.category}
            </p>
            <div className="movies-list">
              {section.images.map((image, index) => {
                return <img key={index} src={image} alt="Cover image" />;
              })}
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Section;

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
                // eslint-disable-next-line jsx-a11y/img-redundant-alt
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

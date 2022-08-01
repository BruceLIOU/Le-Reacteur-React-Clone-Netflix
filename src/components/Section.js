import datas from "../assets/data/movies.json";

const Section = (props) => {
  return (
    <div className="container">
      {datas.map((section, index) => {
        return (
          <div className="row" key={index}>
            <p className="title">{section.category}</p>
            <div className="movies-list">
              {section.images.map((image, index) => {
                // eslint-disable-next-line jsx-a11y/img-redundant-alt
                return <img key={index} src={image} alt="Cover image" />;
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Section;

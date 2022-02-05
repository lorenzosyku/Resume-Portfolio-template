function Portfolio({data}) {
  if (data) {
    var projects = data.projects.map(function (projects) {
      var projectImage = "images/portfolio/" + projects.image;
      return (
        <div key={projects.title} className="">
          <div className="group">
            <a href={projects.url} title={projects.title}>
              <img className="h-60 w-full object-cover group-hover:scale-105 transition-transform duration-200 ease-in-out" alt={projects.title} src={projectImage} />
              <div className="py-3 pl-3">
                <div className="portfolio-item-meta">
                  <h5>{projects.title}</h5>
                  <p>{projects.category}</p>
                </div>
              </div>
              <div className="link-icon">
                <i className="fa fa-link"></i>
              </div>
            </a>
          </div>
        </div>
      );
    });
  }

  return (
    <section className="p-5 m-5 " id="portfolio">
      <h1 className="font-bold my-5">My Previous Works</h1>
      <div className=" ">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 p-2 md:p-6">
          <div
            id="portfolio-wrapper"
            className="border rounded-lg group cursor-pointer overflow-hidden"
          >
            {projects}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio

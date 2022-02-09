
function Footer({ data }) {
  if (data) {
    var networks = data.social.map(function (network) {
      return (
        <li key={network.name}>
          <a href={network.url}>
            <img className="h-6 w-6" src={network.source} alt="" />
          </a>
        </li>
      );
    });
  }

  return (
    <footer className="bg-white">
      <div className="grid grid-cols-1 place-content-center p-5 m-5">
        <div className="flex justify-center">
          <div className="flex-col space-y-3">
            <div>
              <h3 className="font-semibold">Made by{" Lorenzo Syku"}</h3>
            </div>
            <div className="flex justify-center">
              <ul className="flex space-x-2">{networks}</ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

import Client1 from "../assets/clientImages/BangaloreCentral.jpg";
import Client2 from "../assets/clientImages/SigmaSoftTechPark.jpg";
import Client3 from "../assets/clientImages/karma.png";
import Client4 from "../assets/clientImages/StJohns.jpg";
import Client5 from "../assets/clientImages/phoeMall.jpg";
import Client6 from "../assets/clientImages/petraPark.jpg";
import Client7 from "../assets/clientImages/park.png";
import Client8 from "../assets/clientImages/mallOfAsia.jpg";
import Client9 from "../assets/clientImages/StMarthaHospital.jpg";

export default function Clients() {
  
  const imageSources = [
    {id:1, name:"Mall Of Asia", src: Client8},
    {id:2, name:"Central Mall", src: Client1},
    {id:3, name:"St. Martha's Hospital", src: Client9},
    { id:4 ,name:"Phoenix Mall",src:Client5},
    {id:5 ,name: "Sigma Tech Park" ,src:Client2},
    {id:6 ,name:"Karma Industries",src:Client3},
    {id:7,name:"St.John's Hospital",src:Client4},
    {id:8,name:"Govind Park Apartments",src:Client6},
    {id:9,name:"Petra Park Apartments",src:Client7},
  ];

  return (
    <div id="products" className="container py-5">
      <h2 className="text-center mb-4 display-4 text-dark">Our Elite Clients</h2>
      <div className="row">
        {imageSources.map((client) => (
          <div className="col-md-3 p-3" key={client.id}>
            <div className="card h-100 d-flex flex-column">
              <div className="card-img-container" style={{ flex: '1 0 auto', height: '250px', overflow: 'hidden' }}>
                <img
                  src={client.src}
                  className="card-img-top"
                  alt={client.title}
                  style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                />
              </div>
              <div className="card-body d-flex flex-column justify-content-between" style={{ flex: '0 0 auto' }}>
                <h5 className="card-title text-center" style={{ fontSize: '1.2rem' }}>
                  {client.name}
                </h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

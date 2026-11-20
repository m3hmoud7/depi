export default function Cart({ data }) {
  return (
    <div className="container mt-5">
      <div className="row">
        {data.map((item) => {
          return (item.id >= 2 && item.id <= 4) || item.id == 6 ? (
            <div className="col-md-6 text-center my-5 " key={item.id}>
              <h2>
                My Name is : {item.firstName} {item.lastName}{" "}
              </h2>
              <h2>My Age is : {item.age} </h2>
              <h2 style={{ color: `${item.color}` }}>
                My Favourite Color is : {item.color}{" "}
              </h2>
            </div>
          ) : item.id == 1 ? (
            <div className="col-md-6 text-center my-5 d-flex align-items-center justify-content-center ">
              {" "}
              <h2>This Id {item.id}</h2>{" "}
            </div>
          ) : (
            <div className="col-md-6 text-center  my-5 ">
              {" "}
              <h2>This Nothing</h2>{" "}
            </div>
          );
        })}
      </div>
    </div>
  );
}

import React, { useEffect, useRef, useState } from "react";
import Service from "../Service/Service";

const Services = () => {
  const [services, setServices] = useState([]);
  const [isAscending, setIsAscending] = useState(true);
  const [searchText, setSearchText] = useState("");
  
  const searchInputRef = useRef(null);

  const handleSearch = () => {
    const serachText = searchInputRef.current.value;
    setSearchText(serachText);
  } 
  
  useEffect(() => {
    fetch(`http://localhost:5000/services?sort=${isAscending ? "asc" : "desc"}&search=${searchText}`)
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, [isAscending, searchText]);
  return (
    <div className="mt-8">
      <div className="text-center">
        <p className="text-2xl text-orange-500 font-bold mb-2">Services</p>
        <h3 className="text-5xl font-semibold mb-2">Our Service Area</h3>
        <p>
          the majority have suffered alteration in some form, by injected
          humour, or randomised <br /> words which don't look even slightly
          believable.
        </p>
        <div className="flex justify-center my-3">
          <div className="form-control mr-4">
            <div className="input-group">
              <input
              ref={searchInputRef}
                type="text"
                placeholder="Search…"
                className="input input-bordered"
              />
              <button onClick={handleSearch} className="btn btn-square">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div>
            Sort in :{" "}
            <button
              className="btn"
              onClick={() => setIsAscending(!isAscending)}
            >
              {isAscending ? "desc" : "asc"}
            </button>
          </div>
        </div>
      </div>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        {services.map((service) => (
          <Service key={service._id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default Services;

// import React, { useEffect, useState } from "react";
// import './App.css'

// const WithFetch = () => {
//   const [user, setUser] = useState(null);
//   const [error, seterror] = useState("");

//   const [currentPage, setCurrentPage] = useState(1);
//   const recordsPerPage = 5;
//   const lastIndex = currentPage * recordsPerPage;
//   const firstIndex = lastIndex - recordsPerPage;
//   const records = user?.slice(firstIndex, lastIndex) || [];

//   const nPage = user ? Math.ceil(user.length / recordsPerPage) : 0;
//   const numbers = [...Array(nPage + 1 ).keys()].slice(1)


//   function prevPage() {
//          if(currentPage !== firstIndex){
//           setCurrentPage(currentPage - 1)
//          }
//       }
//       function nextPage() {
//         if(currentPage !== lastIndex){
//           setCurrentPage(currentPage + 1 )
//         }
//       }
    
    
//       function changeCurrentPage(id) {
//         setCurrentPage(id)
//       }
    

//   const fetchData = async () => {
//     try {
//       const response = await fetch(
//         'https://dummyjson.com/users'
//       );
//       if (!response) {
//         throw new error("failed to fetch");
//       }
//       const data = await response.json();
//       console.log("🚀 ~ file: WithFetch.jsx:17 ~ fetchData ~ data:", data);
//       setUser(data);
//     } catch (err) {
//       seterror("Catch block error ");
//     }
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   return (
//     <div>
//       <table>
//         <thead>
//           <tr>
//             <th>Id</th>
//             <th>Title</th>
//             <th>Completed</th>
//             <th>Email</th>
//           </tr>
//         </thead>
//         <tbody>
//         {records?.map((d, i) => (
//             <tr key={i}>
//               <td>{d.id}</td>
//               <td>{d.firstName }</td>
//               <td>{d.userName}</td>
//               {/* <td>{d.email}</td> */}
//             </tr>
//        ))}


//         </tbody>
//       </table>

//       <nav>
//          <ul className="pagination">
//            <li className="page-item">
//              <a href="#" className="page-link" onClick={prevPage}>
//                Prev
//              </a>
//            </li>
//            {numbers.map((n, i) => (
//             <li
//               className={`page-item ${currentPage === n ? "active" : ""}`}
//               key={i}
//             >
//               <a
//                 href="#"
//                 className="page-link"
//                 onClick={() => changeCurrentPage(n)}
//               >
//                 {n}
//               </a>
//             </li>
//           ))}

//           <li className="page-item">
//             <a href="#" className="page-link" onClick={nextPage}>
//               Next
//             </a>
//           </li>
//         </ul>
//       </nav>

//     </div>
//   );
// };

// export default WithFetch;

import React, { useEffect, useState } from "react";
import './App.css'

const WithFetch = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 5;

  // Indices for pagination
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;

  // Fetch sliced records for the current page
  const records = user?.slice(firstIndex, lastIndex) || [];

  // Total number of pages
  const nPage = user ? Math.ceil(user.length / recordsPerPage) : 0;
  const numbers = [...Array(nPage + 1).keys()].slice(1);

  // Previous page handler
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    } else {
        alert("You are already on the first page!");
      }
}

  // Next page handler
  const nextPage = () => {
    if (currentPage < nPage) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Function to change current page by page number
  const changeCurrentPage = (id) => {
    setCurrentPage(id);
  };

  // Fetch data from API
  const fetchData = async () => {
    try {
      const response = await fetch('https://dummyjson.com/users');
      if (!response.ok) {
        throw new Error("Failed to fetch");
      }
      const data = await response.json();
      console.log("Fetched Data:", data);
      setUser(data.users);  // Adjust to handle the data structure properly
    } catch (err) {
      setError("Failed to fetch data.");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {error && <p style={{ color: 'red' }}>{error}</p>}

      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>First Name</th>
            <th>Username</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {records.map((d) => (
            <tr key={d.id}>
              <td>{d.id}</td>
              <td>{d.firstName}</td>
              <td>{d.username}</td>
              <td>{d.email}</td>
            </tr>
          ))}
        </tbody>
      </table>

     
      <nav>
        <ul className="pagination">
          <li className="page-item">
            <a href="#" className="page-link" onClick={prevPage}>
              Prev
            </a>
          </li>

          {numbers.map((n) => (
            <li
              className={`page-item ${currentPage === n ? "active" : ""}`}
              key={n}
            >
              <a
                href="#"
                className="page-link"
                onClick={() => changeCurrentPage(n)}
              >
                {n}
              </a>
            </li>
          ))}

          <li className="page-item">
            <a href="#" className="page-link" onClick={nextPage}>
              Next
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default WithFetch;

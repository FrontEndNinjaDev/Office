// import { useState } from "react";
// import "./App.css";
// import data from "./data.json";

// function App() {
//   const [currentPage, setCurrentPage] = useState(1);
//   const recordsPerPage = 5;
//   const lastIndex = currentPage * recordsPerPage;
//   const firstIndex = lastIndex - recordsPerPage;
//   const records = data.slice(firstIndex, lastIndex);
//   const nPage = Math.ceil(data.length / recordsPerPage);
//   const numbers = [...Array(nPage + 1 ).keys()].slice(1)
  

//   function prevPage() {
//      if(currentPage !== firstIndex){
//       setCurrentPage(currentPage - 1)
//      }
//   }
//   function nextPage() {
//     if(currentPage !== lastIndex){
//       setCurrentPage(currentPage + 1 )
//     }
//   }


//   function changeCurrentPage(id) {
//     setCurrentPage(id)
//   }

//   return (
//     <>
//       <table>
//         <thead>
//           <tr>
//           <th>Id</th>
//           <th>Name</th>
//           <th>Email</th>
//           </tr>
//         </thead>

//         <tbody>
//           {records.map((d, i) => (
//             <tr key={i}>
//               <td>{d.id}</td>
//               <td>{d.name}</td>
//               <td>{d.email}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       <nav>
//         <ul className="pagination">
//           <li className="page-item">
//             <a href="#" className="page-link" onClick={prevPage}>
//               Prev
//             </a>
//           </li>
//           {numbers.map((n, i) => (
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
//     </>
//   );

 
// }

// export default App;

import React from 'react'
import WithFetch from './WithFetch'
import FetchDummy from './FetchDummy'

const App = () => {
  return (
    <div>
      {/* <WithFetch/> */}
      <FetchDummy/>
    </div>
  )
}

export default App
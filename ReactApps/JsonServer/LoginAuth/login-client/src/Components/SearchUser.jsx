
// import React, { useState } from "react";
// import axios from 'axios'

// const SearchUser = () => {
//   const [showSearch, setShowSearch] = useState(false);
//   const [userData, setUserData] = useState("");
//   const [searchQuery, setSearchQuery] = useState('')

// const handleSearch = async () => {
//   try{
//     const response = await axios.get(`http://localhost:5000/users?first_name=${searchQuery}`)
//     if(response.data.length > 0 ){
//       setUserData(response.data[0].first_name)
//     } else{
//       setUserData("User Not Found")
//     }
//   } catch (err){
//     setUserData("Error Fetching User Data")
    
//   }
// }

//   const handleMouseEnter = () => {
//     setShowSearch(true);
//   };

//   const handleMouseLeave = () => [setShowSearch(false)];

//   return (
//     <div
//       onMouseEnter={handleMouseEnter}
//       onMouseLeave={handleMouseLeave}
//       style={{ padding: "20px", textAlign: "center" }}
//     >
//       <h3 style={{ padding: "10px 20px" }} id="search">
//         {" "}
//         <i class="fa-brands fa-searchengin"></i> Search
//       </h3>
//       {showSearch && (
//         <div>
//           <input
//             type="text"
//             placeholder="Search For User..."
//             style={{ padding: "10px", width: "200px" }}
//             value={searchQuery}
//             onChange={(e)=>setSearchQuery(e.target.value)}
//           />
//           <button style={{ padding: "10px 20px", marginLeft: "10px" }} 
//                   onClick={handleSearch}
//           >
//             Search
//           </button>
//         </div>

//       )}
//       {userData && (<div>Result : {userData}</div>)}
//     </div>
//   );
// };

// export default SearchUser;

import { useFormik } from 'formik';
import React, { useEffect, useState } from 'react'
import axios from 'axios';


const SearchUser = () => {


const [error, setError] = useState('');
const [searchResults, setsearchResults] = useState([]);
const [allUsers, setAllUsers] = useState([]);

const initialValues = {
  first_name : ''
}

const {values , handleChange , handleBlur } = useFormik({
initialValues,
validateOnChange : false,
onSubmit : async()=>{},
})

useEffect(()=>{
  const fetchUsers = async()=>{
    try{
      const response = await axios.get("http://localhost:5000/users")
      setAllUsers(response.data)
    } catch (err){
      setError("Error Fetching Users")
    }

  }
  fetchUsers();
},[])

const handleSearch = () =>{
  if(values.first_name){
    const filteredResults = allUsers.filter(user =>
      user.first_name && user.first_name.toLowerCase().startsWith(values.first_name.toLowerCase())
     );
     setsearchResults(filteredResults);
     setError(filteredResults.length === 0 ? "No Users Found" : "");;
  } else {
    setsearchResults([])
  }
}

  return (
    <div className="search-container">
      <form className='form' onSubmit={(e)=> e.preventDefault()}>
        <div className="input-group">
          <input
          type='text'
          placeholder='Search Users...'
          name='first_name'
          className='input-field'
          autoComplete='off'
          value={values.first_name}
          onChange={(e) => {
            handleChange(e);
            handleSearch();
          }}
          onBlur={handleBlur}
          />
        </div>
      </form>

      {
        searchResults.length > 0 && (
          <div className="search-results">
            <ul className='results-list'>
              {searchResults.map((user)=>(
                <li key={user.id}
                className='result-item'
                onClick={()=>{
                  setsearchResults([])
                  alert(`Selected : ${user.first_name} ${user.last_name}`)
                }}
                >
                  <strong>{user.first_name}</strong> {user.last_name}
                </li>
              ))}
            </ul>
          </div>
        )
      }

      {error && <p className='error-message'>{error}</p>}
    </div>
  )
}

export default SearchUser
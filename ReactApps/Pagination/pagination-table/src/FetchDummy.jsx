import React, { useEffect, useState } from 'react'

const FetchDummy = () => {

    const [ user, setUser ] = useState(null);
    const [ error ,setError ] = useState("");
    const [ currentPage , setCurrentPage ] = useState(1);
    const recordsPerPage = 5 ;

    // indices for pagination 

    const lastIndex = currentPage * recordsPerPage;
    const firstIndex = lastIndex - recordsPerPage

     // fetch sliced records for the current page 
     const records = user?.slice(firstIndex , lastIndex) || []

     // total number of pages 

     const nPage = user ? Math.ceil(user.length / recordsPerPage) : 0 ;
     const numbers = [...Array(nPage + 1 ).keys()].slice(1);

     const prevPage = () =>{
        if(currentPage > 1 ){
            setCurrentPage(currentPage - 1)
        }
        else{
            alert('You are already on the first Page')
        }
     }

    
     const nextPage = () =>{
        if(currentPage < nPage){
            setCurrentPage(currentPage + 1 )
        }
     }

     const changeCurrentPage = (id) =>{
        setCurrentPage(id)
     }

     const fetchData = async () => {
        try{
            const response = await fetch('https://dummyjson.com/users');
            if(!response.ok){
                throw new Error("failed to fetch")
            }
            const data = await response.json()
            console.log("fetched Data : ", data);
            setUser(data.users)
        }catch(err){
            setError("failed to fetch")
        }
     }

     useEffect(()=>{
        fetchData()
     },[])


  return (
    <div>
      {
        error && <p style={{ color : red }}>error</p>
      }
      <table>
        <thead>
            <tr>
                <th>Id</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Age</th>
                <th>Gender</th>
                <th>User name</th>
                <th>Gmail</th>
            </tr>
        </thead>
        <tbody>
            {
                records.map((d)=>(
                    <tr>
                    <td>{d.id}</td>
                    <td>{d.firstName}</td>
                    <td>{d.lastName}</td>
                    <td>{d.age}</td>
                    <td>{d.gender}</td>
                    <td>{d.username}</td>
                    <td>{d.email}</td>
                    </tr>
                ))
            }
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
  )
}

export default FetchDummy
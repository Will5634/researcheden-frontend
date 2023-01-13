
import React, { useState, useEffect } from 'react';
import download from 'downloadjs';
import axios from 'axios';

import { Link } from "react-router-dom";
import { newloader } from '../assets';
import  SEO from '../components/SEO'
import ReactPaginate from 'react-paginate';




const AllFile = () => {
    const [currentPage, setCurrentPage] = useState(0);

    const [filesList, setFilesList] = useState([]);
    const [errorMsg, setErrorMsg] = useState('');
    const [sortDepartment, setsortDepartment] = useState('');
  
    useEffect(() => {
      const getFilesList = async () => {
        try {
          const { data } = await axios.get(`https://research-eden-api.onrender.com/getAllFiles`);
          
          //const { data } = await axios.get(`${URL}/getAllFiles`);
          setErrorMsg('');
          setFilesList(data);
        } catch (error) {
          error.response && setErrorMsg(error.response.data);
        }
      };
  
      getFilesList();
    }, []);

    function handlePageClick({ selected: selectedPage }) {
        setCurrentPage(selectedPage);
    }

    function compare( a, b ) {
        if ( a.title< b.title ){
          return -1;
        }
        if ( a.title > b.title ){
          return 1;
        }
        return 0;
      }
      
      

      const sortedfilelist = filesList.filter(
        (item) => {
            return item.department == sortDepartment;
          //return index != -1;
        });


        
    
      const PER_PAGE = 12;
      const offset = currentPage * PER_PAGE;
      const currentPageData = sortedfilelist
          .sort( compare )
          .slice(offset, offset + PER_PAGE)
          .map(
            ({ _id, title, description,department, file_path, file_mimetype }) => (
              <div className="flex justify-center    rounded-lg cursor-pointer max-w-sm p-1 bg-white border border-gray-200  shadow-md hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-700" key={_id}  
               >
                <div className="relative w-full h-30 group mb-1 text-xl mt-1 tracking-tight text-black font-bold " >
                <p className="file-title text-lg">{title}</p>
                <p className="file-description text-sm">Department:{department}</p>
                <div className='flex justify-center mr-auto ml-auto'>
                  <Link to={`/filedisplay/${_id}`}>
                        <button btn-id={_id} className="style-5  "> view </button> 
                    </Link>
                  </div>
                    </div>
                    </div>
                  )
                )
      const pageCount = Math.ceil(filesList.length / PER_PAGE);
    
    

  return (
    <div className='mt-20 mb-auto font-sans text-lg w-full '>

<SEO
title='free research downloads!'
description='a free platform that lets you download research papers for free.'
name='list of available projects.'
type='article' />

<h1>Filter By Department</h1>
<div className='m-3'>
<button className='filterbuttons text-sm' id="medlab" value="medlab" onClick={(e)=>{setsortDepartment(e.target.value)}}> Medlab</button>
<button className='filterbuttons text-sm' id="medlab" value="Anatomy" onClick={(e)=>{setsortDepartment(e.target.value)}}> Anatomy</button>
</div>



<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2'>

{errorMsg && <p className="errorMsg">{errorMsg}</p>}
{currentPageData}
            </div> 
            <ReactPaginate
        previousLabel={"← Previous"}
        nextLabel={"Next →"}
        pageCount={pageCount}
        breakLabel={"..."}
        marginPagesDisplayed={2}
        pageRangeDisplayed={3}
        onPageChange={handlePageClick}
        containerClassName={"pagination"}
        previousLinkClassName={"pagination__link"}
        nextLinkClassName={"pagination__link"}
        disabledClassName={"pagination__link--disabled"}
        activeClassName={"pagination__link--active"}
        pageClassName={"pagination-a"}
      />

</div>
  )
}

export default AllFile
import React, { useState, useEffect } from 'react';
import download from 'downloadjs';
import axios from 'axios';

import { Link } from "react-router-dom";
import { newloader } from '../assets';
import  SEO from '../components/SEO'
import ReactPaginate from 'react-paginate';
import { URL } from '../App';

const Home = () => {

  //const navigate = useNavigate();

  const [currentPage, setCurrentPage] = useState(0);

  const [filesList, setFilesList] = useState([]);
  const [errorMsg, setErrorMsg] = useState('');

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

  const downloadFile = async (id, path, mimetype) => {
    try {
      const result = await axios.get(`${URL}/download/${id}`, {
        responseType: 'blob'
      });
      const split = path.split('/');
      const filename = split[split.length - 1];
      setErrorMsg('');
      return download(result.data, filename, mimetype);
    } catch (error) {
      if (error.response && error.response.status === 400) {
        setErrorMsg('Error while downloading file. Try again later');
      }
    }
  };

  function handlePageClick({ selected: selectedPage }) {
    setCurrentPage(selectedPage);
}

  const PER_PAGE = 12;
  const offset = currentPage * PER_PAGE;
  const currentPageData = filesList
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
name='Company name.'
type='article' />


      <div >
      
      </div>
      <div >
        <h1 className=' flex justify-center text-center text-4xl font-bold' >Say 'goodbye' to blank pages in your projects for good.</h1>
        <p className=' flex justify-center text-center text-lg'>we provide direct links to thousands of projects in pdf. Covering unique and rare topics for you to access freely
           and easily at your convenience.  </p>
           <Link to={`/search`}>
                    <button className='style-5 flex justify-center mx-auto'> Search </button>
                </Link>
      </div>
      <h2 className='underline flex justify-center mx-auto text-2xl mt-10 font-bold'>latest project updates</h2>
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
          
          {/*<Outlet/>*/}
        </div>
  );
};

/*onClick={() => {navigate(`/${_id}`);
                }}*/

export default Home;
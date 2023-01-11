

//import { ProductsData } from "../../ProductsData";
import React, { useState, useEffect } from 'react';
import download from 'downloadjs';
import axios from 'axios';
import { API_URL } from '../assets/constants';
import { useParams } from "react-router-dom";
import {newloader} from '../assets'


const FileDisplay = () => {

    const { id } = useParams();

    console.log(id)


    const [newData, setNewData] = useState([]);
    const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    const getFile = async () => {
      try {
        const { data } = await axios.get(`${API_URL}/getFile/${id}`);
        setErrorMsg('');
        console.log(data);
        setNewData(data);
        console.log(newData)
      } catch (error) {
        error.response && setErrorMsg(error.response.data);
      }
    };

    getFile();
  }, []);

  

  const downloadFile = async (id, path, mimetype) => {
    try {
      const result = await axios.get(`${API_URL}/download/${id}`, {
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
  

  
  return (
    

    <div className=" justify-center p-6 mb-auto animate-slideup rounded-lg cursor-pointer" key={id}>
                  
                 
                  
                  
                  {newData.length > 0 ? (
            
            newData.map(
               ({ _id, title, description, department, file_path, file_mimetype }) => (
                 <div className="flex justify-center p-6  animate-slideup rounded-lg cursor-pointer" key={_id}  
                  >
                   <div className="relative w-full h-56 group bg-pink mx-auto text-center" >
                   <p className="file-title text-lg">{title}</p>
                  <p className="file-description text-sm">Department:{department}</p>
                  <p className="file-description text-sm">Abstract:{description}</p>

                   <h1 className='text-center  mx-auto max-w-sm p-1 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-700'>
                     <a
                       href="#/"
                       onClick={() =>
                         downloadFile(_id, file_path, file_mimetype)
                       }
                     >
                       Download
                      </a>
                   </h1>
                   
                 </div>
                 
                 </div>
               )
             )
             
           ) : (
             
            <div className="w-full flex justify-center items-center flex-col">
            <img src={newloader} alt="newloader" className="w-32 h-32 object-contain" />
            <h1 className="font-bold text-2xl text-white mt-2">Loading</h1>
          </div>

           )}
                  
                  {/*
                  <h1>
                    <a
                      href="#/"
                      onClick={() =>
                        downloadFile(_id, file_path, file_mimetype)
                      }
                    >
                      Download
                    </a>
                  </h1>
                  */}
                </div>
                


    
  );
}
/*<div>
      <div>
        <h1>{ProductsData[id - 1].name}</h1>{" "}
        <p>{ProductsData[id - 1].description}</p>{" "}
      </div>
    </div>*/
export default FileDisplay;
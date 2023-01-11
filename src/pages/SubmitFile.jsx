import React, { useState, useRef } from 'react';
import Dropzone from 'react-dropzone';
import axios from 'axios';
import { API_URL } from '../assets/constants';


const SubmitFile= ({title,id, description,department }) => {

    const [file, setFile] = useState(null); // state for storing actual image
  const [previewSrc, setPreviewSrc] = useState(''); // state for storing previewImage
  const [state, setState] = useState({
    title: '',
    description: '',
    department: ''
  });
  const [errorMsg, setErrorMsg] = useState('');
  const [isPreviewAvailable, setIsPreviewAvailable] = useState(false); // state to show preview only for images
  const dropRef = useRef(); // React ref for managing the hover state of droppable area

  const handleInputChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value
    });
  };

  const onDrop = (files) => {
    const [uploadedFile] = files;
    setFile(uploadedFile);
  
    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPreviewSrc(fileReader.result);
    };
    fileReader.readAsDataURL(uploadedFile);
    setIsPreviewAvailable(uploadedFile.name.match(/\.(jpeg|jpg|png)$/));
  
    dropRef.current.style.border = '2px dashed #e9ebeb';
  };

  const updateBorder = (dragState) => {
    if (dragState === 'over') {
      dropRef.current.style.border = '2px solid #000';
    } else if (dragState === 'leave') {
      dropRef.current.style.border = '2px dashed #e9ebeb';
    }
  };

  
    const handleOnSubmit = async (event) => {
      event.preventDefault();
    
      try {
        const { title, description, department } = state;
        if (title.trim() !== '' && description.trim() !== '' && department.trim() !== '') {
          if (file) {
            const formData = new FormData();
            formData.append('file', file);
            formData.append('title', title);
            formData.append('description', description);
            formData.append('department', department);
    
            setErrorMsg('');
            await axios.post(`${API_URL}/upload`, formData, {
              headers: {
                'Content-Type': 'multipart/form-data'
              }
            });

            window.location.reload();            

          } else {
            setErrorMsg('Please select a file to add.');
          }


        } else {
          setErrorMsg('Please enter all the field values.');
        }
      } catch (error) {
        error.response && setErrorMsg(error.response.data);
      }
    };
  


  return (
    
    <div className="w-full max-w-xs mx-auto">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleOnSubmit}>
      {errorMsg && <p className="errorMsg">{errorMsg}</p>}
      <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
        Title
      </label>
            <input
                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                name="title"
                value={title}
                placeholder="Enter title"
                onChange={handleInputChange}
            />
            </div>
            <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
        Abstract
      </label>
            <input
                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                 type="text"
                 name="description"
                 value={description}
                 placeholder="Enter description"
                 onChange={handleInputChange}
            />
            </div>

            <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="department">
        Department
      </label>
            <input
                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                 type="text"
                 name="department"
                 value={department}
                 placeholder="Enter department"
                 onChange={handleInputChange}
            />
            </div>
            

          
            <div className="upload-section block text-gray-700 text-sm font-bold mb-2">
  <Dropzone onDrop={onDrop} onDragEnter={() => updateBorder('over')} onDragLeave={() => updateBorder('leave')} >
    {({ getRootProps, getInputProps }) => (
      <div {...getRootProps({ className: 'dropzone border-solid border-2 ' })} ref={dropRef}>
        <input {...getInputProps()} />
        <p>Drag and drop a file OR click here to select a file</p>
        {file && (
          <div>
            <strong>Selected file:</strong> {file.name}
          </div>
        )}
      </div>
    )}
  </Dropzone>
  {previewSrc ? (
    isPreviewAvailable ? (
      <div className="image-preview">
        <img className="preview-image" src={previewSrc} alt="Preview" />
      </div>
    ) : (
      <div className="preview-message">
        <p>No preview available for this file</p>
      </div>
    )
  ) : (
    <div className="preview-message">
      <p>Image preview will be shown here after selection</p>
    </div>
  )}
</div>

    <div className="flex items-center justify-between">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
        Submit
      </button>
      </div>
        </form>  

        </div>

        

  )};





export default SubmitFile;
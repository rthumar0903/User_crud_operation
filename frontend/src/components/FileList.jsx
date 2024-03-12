import React, { useState, useEffect } from 'react';
import axios from 'axios';

function FileList() {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    const fetchFiles = async () => {
      try {
        const response = await axios.get('/api/files');
        setFiles(response.data.files);
      } catch (error) {
        console.error('Failed to fetch files:', error);
      }
    };
    fetchFiles();
  }, []);

  return (
    <div>
      <h2>File List</h2>
      <ul>
        {files.map(file => (
          <li key={file.id}>{file.filename}</li>
        ))}
      </ul>
    </div>
  );
}

export default FileList;

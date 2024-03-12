import React from 'react';
import RegisterForm from './components/RegisterForm';
import LoginForm from './components/LoginForm';
import FileUploadForm from './components/FileUploadForm';
import FileList from './components/FileList';

function App() {
  return (
    <div>
      <h1>File Upload App</h1>
      <RegisterForm />
      <LoginForm />
      <FileUploadForm />
      <FileList />
    </div>
  );
}

export default App;

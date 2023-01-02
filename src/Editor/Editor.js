import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import modules from './module/Modules';

const Editor = () => {
  const [value, setValue] = useState('');

  return(<div>
    <ReactQuill modules={modules} /* formats={formats} */ theme="snow" value={value} onChange={setValue} />
    <div>{value}</div>
  </div>);
  
}

export default Editor
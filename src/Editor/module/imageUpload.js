import axios from 'axios';

const imageUpload = (file) =>{
  return new Promise((resolve, reject) => {
    const formdata = new FormData();
    formdata.append("images", file);
    axios({
      method: "post",
      url: "http://localhost:8001/uploads",
      data: formdata,
      headers: { "Content-Type": "multipart/form-data" },  
    }).then((res)=>{
      console.log(res.data.data)
      resolve(
        res.data.data
      );
    });
  });
}

export default imageUpload;
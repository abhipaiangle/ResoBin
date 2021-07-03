//import axios from 'axios';
import styled from 'styled-components'
import Divider from 'components/shared/Divider'
import { useState } from "react";
const Container = styled.div`
  background: ${({ theme }) => theme.secondary};
  position: fixed;
  top: 4rem;
  right: 0px;
  width: 19rem;
  height: 100%;
  padding: 2rem;
  z-index: 7; /* To put searchbar at the bottom */
  box-shadow: inset 2px 0px 5px rgba(0, 0, 0, 0.3);
`

const Title = styled.h4`
  font-family: Mulish;
  font-style: normal;
  font-weight: bold;
  font-size: 1.5rem;
  line-height: 30px;
  letter-spacing: 1.5px;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.textColor};
`



const FileList = (props) => {
  const [selectedFile, setSelectedFile] = useState("");
  console.log("12",props)

  const submitForm = (data) =>{
    const formData = new FormData();
    formData.append("resourcetype",data['formvalues']['resourcetype']);
    formData.append("file", selectedFile);
  
  //#  axios.post(UPLOAD_URL, formData)
   // .then((res) => {
    //      alert("File Upload success");
      //})
   // .catch((err) => alert("File Upload Error"));
     // console.log(formData['resourcetype'])
  }


 
  const handleUpload = (event) => {
     setSelectedFile(event.target.files[0]);
   }
  return (
    <Container>
      <Title> Files </Title>
      <input type="file" onChange={handleUpload} />
      <button onClick={submitForm(props)}>Submit</button>
      <Divider />
    </Container>
  )
}

export default FileList

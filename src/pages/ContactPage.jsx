import React from 'react'
import Jumbotron from "react-bootstrap/Jumbotron"
import Button from "react-bootstrap/Button"
import {useState, useEffect} from "react"
import {withRouter} from "react-router-dom"
import Form from './Form'

function ContactPage({loggedInUser, setLoggedInUser, history, urlDomain}) {

  // const [formData, setFormData] = useState();

  // const handleChange = (e) => {
  //   console.log(e.target.name);
  //   setFormData({ ...formData, [e.target.name]: e.target.value });
  // };

  // const handleSubmit = (e) => {};

  const descriptionInput = React.useRef();
  const addressInput = React.useRef();
  const fileInput = React.useRef();

  useEffect(() => {
    console.log(loggedInUser); // using camelCase for variable name is recommended.
  }, [loggedInUser]);

  const handleClick = (event) => {
      event.preventDefault();
      handleUpload(fileInput.current.files);
  };

    //idea here is to upload the files to the backend, wait for response from backend, 
    // retrieve the locations from the backend after upload,
    // then upload the job object with the recently retrieved locations
    
  const handleUpload = () => {
    let form = new FormData()
    for (let i = 0; i < fileInput.current.files.length; i++) {
        form.append(fileInput.current.files[i].name, fileInput.current.files[i])
    }
    console.log(loggedInUser)
    console.log(Object.entries(form).length)
    //if docs
    if (fileInput.current.files.length > 0){
      fetch(`${urlDomain}/jobs/upload`, {
        method: "POST",
        body: form,
        credentials: 'include'
      })
      .then(data => data.json())
      .then(data => {
          console.log(data.locations)
          //comes back as an array
          const payload = {
              "client": loggedInUser._id,
              "description": descriptionInput.current.defaultValue,
              "buildAddress": addressInput.current.defaultValue,
              "designDocs": data.locations
          }

          console.log(payload)
          
          return fetch(`${urlDomain}/jobs`, {
              body: JSON.stringify(payload),
              method: "POST",
              headers: {
                  'Content-Type': "application/json"
              },
              credentials: 'include'
          })
      })
      .then(data => data.json())
      .then(job => {
        if(job.user){
          setLoggedInUser(job.user)
        }
        console.log(job)
        history.push("/") 
      })
      .catch((error) => console.log(error))
    }
    
    //if no docs
    else {
      const payload = {
        "client": loggedInUser._id,
        "description": descriptionInput.current.defaultValue,
        "buildAddress": addressInput.current.defaultValue,
        "designDocs": []
      }

      fetch(`${urlDomain}/jobs/`, {
            body: JSON.stringify(payload),
            method: "POST",
            headers: {
                'Content-Type': "application/json"
            },
            credentials: 'include'
      })
      .then(data => data.json())
      .then(job => {
        if(job.user){
          setLoggedInUser(job.user)
        }
        history.push("/") 
      })
      .catch((error) => console.log(error))
    }
  }
  
if (loggedInUser) {

  return (
    <Jumbotron
      fluid
      style={{
        "textAlign": "center",
        "marginBottom": "0",
        "display": "flex",
        "flexDirection": "column",
        "justifyContent": "center",
        "alignItems": "center",
      }}
    >
      <h1>Contact us with your idea and take your project to the next stage</h1>


      <Form handleSubmit={handleClick} 
        formFields={["BuildAddress","Description", "DesignDocuments"]} 
        formTypes={["text", "textarea", "file"]} 
        multiple={[false, false, true]} 
        refers={[addressInput, descriptionInput, fileInput]} 
        defaultValue={[null, null, null]} 
        title="Create Job!" 
      />
      
      {/* <form
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
        }}
        onSubmit={(event) => handleSubmit(event, formData)}
      >
        <section>
          <div>
            <label htmlFor="jobTitle">Job Title</label>
          </div>
          <div>
            <input name="jobTitle" onChange={handleChange} />
          </div>
          <div>
            <label htmlFor="jobAddress">Job Address</label>
          </div>
          <div>
            <input name="jobAddress" onChange={handleChange} />
          </div>
        </section>
        <section>
          <div>
            <label>Job Description:</label>
          </div>
          <div>
            <textarea onChange={handleChange} />
          </div>
        </section>
      </form> */}
    </Jumbotron>
  );
}
else {
  return (
  <Jumbotron
      fluid
      style={{
        "textAlign": "center",
        "marginBottom": "0",
        "display": "flex",
        "flexDirection": "column",
        "justifyContent": "center",
        "alignItems": "center",
      }}
    >
      <h1>Contact Inspiration Homes!</h1>
      <p>
        Create an account to start a project, or contact us via the link below.
      </p>
      <p>
        <Button variant="primary" onClick={() => window.open('mailto:inspirationhomesqld@gmail.com?subject=Project%20Inquiry')}>Email Us</Button>
      </p>
    </Jumbotron>)
  }
}

export default withRouter(ContactPage);

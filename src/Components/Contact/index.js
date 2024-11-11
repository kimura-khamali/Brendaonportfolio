// import React, { useState } from 'react';
// import './index.css';

// function Contact() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     message: '',
//     comment: '',
//     improvement: ''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prevState => ({
//       ...prevState,
//       [name]: value
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Form submitted:', formData);
//   };

//   return (
//     <div className="contact-container">
//       <h1>CONTACT</h1>
//       <p>Feel free to reach out and contact me I would love to here from you.</p>
//       <form action="https://formsubmit.co/a65cb0d7d616abc4cc6a8a71a8b3e96f "
//         method="POST" onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label htmlFor="name">Name: <span className="required">*</span></label>
//           <input type="text" id="name" name="name" required onChange={handleChange} value={formData.name} />
//         </div>
//         {/* <div className="form-group">
//           <label htmlFor="email">Email: <span className="required">*</span></label>
//           <input type="email" id="email" name="email" required onChange={handleChange} value={formData.email} />
//         </div> */}
//         <div className='form-group'> 
//           <label htmlFor='name'>Name:<span className='required'>*</span></label>
//           <input type='text' id='name' name='name' required onChange={handleChange} value={formData.name}/>
//         </div>
//         <div className="form-group">
//           <label htmlFor="phone">Phone:</label>
//           <input type="tel" id="phone" name="phone" onChange={handleChange} value={formData.phone} />
//         </div>
//         <div className="form-group">
//           <label htmlFor="message">Message: <span className="required">*</span></label>
//           <textarea id="message" name="message" required onChange={handleChange} value={formData.message}></textarea>
//         </div>
//         <h3>Additional information</h3>
//         <div className="form-group">
//           <label htmlFor="comment">Comment:</label>
//           <input type="text" id="comment" name="comment" onChange={handleChange} value={formData.comment} />
//         </div>
//         <div className="form-group">
//           <label htmlFor="improvement">Improvement:</label>
//           <input type="text" id="improvement" name="improvement" onChange={handleChange} value={formData.improvement} />
//         </div>
//         <button type="submit" className="submit-btn">Submit</button>
//       </form>
//     </div>
//   );
// }

// export default Contact;



import React, { useState } from 'react';
import './index.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    comment: '',
    improvement: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="contact-container">
      <h1>CONTACT</h1>
      <p>Feel free to reach out and contact me, I would love to hear from you.</p>
      <form action="https://formsubmit.co/a65cb0d7d616abc4cc6a8a71a8b3e96f" method="POST" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">
            Name: <span className="required">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            onChange={handleChange}
            value={formData.name}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">
            Email: <span className="required">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            onChange={handleChange}
            value={formData.email}
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            onChange={handleChange}
            value={formData.phone}
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">
            Message: <span className="required">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            required
            onChange={handleChange}
            value={formData.message}
          ></textarea>
        </div>
        <h3>Additional information</h3>
        <div className="form-group">
          <label htmlFor="comment">Comment:</label>
          <input
            type="text"
            id="comment"
            name="comment"
            onChange={handleChange}
            value={formData.comment}
          />
        </div>
        <div className="form-group">
          <label htmlFor="improvement">Improvement:</label>
          <input
            type="text"
            id="improvement"
            name="improvement"
            onChange={handleChange}
            value={formData.improvement}
          />
        </div>
        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Contact;
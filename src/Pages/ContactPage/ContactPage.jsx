import React, { useState, useRef } from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import emailjs from '@emailjs/browser';
import './Contact.css'

function ContactPage() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phonenumber: "",
    address: "",
    message: "",
  });
  const form = useRef();

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (
      !formData.firstname.trim() ||
      !formData.lastname.trim() ||
      !formData.email.trim() ||
      !formData.phonenumber.trim() ||
      !formData.address.trim() ||
      !formData.message.trim()
    ) {
      alert("Please fill in all fields before submitting.");
      return;
    }

    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      form.current,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    ).then(
      () => {
        alert('message sent successfully');
        form.current.reset();
      },
      (error) => {
        console.error("FAILED...", error);
        alert('failed to sent message');
      }
    );

    console.log(formData);
    alert('form details are submitted');
    setFormData({
      firstname: "",
      lastname: "",
      email: "",
      phonenumber: "",
      address: "",
      message: "",
    });
  };

  // Common TextField styling
  const textFieldSx = {
    "& .MuiInput-underline:before": {
      borderBottomColor: "var(--form-color)",
    },
    "& .MuiInput-underline:hover:before": {
      borderBottomColor: "var(--form-color)",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "var(--form-color)",
    },
  };

  const inputProps = {
    style: { color: "var(--form-color)" },
    disableUnderline: false,
  };

  const inputLabelProps = {
    style: { color: "var(--form-color)" }
  };

  return (
    <form
      onSubmit={handleSubmit}
      ref={form}
      className="contact-div contact-form-responsive"
      style={{ color: "var(--form-color)" }}
      data-aos="fade-up"
    >
      <Stack
        spacing={{ xs: 1, sm: 2 }}
        direction="column"
        useFlexGap
        sx={{ flexWrap: "wrap" }}
      >
        <TextField
          name="firstname"
          id="firstname-field"
          label="First Name"
          variant="standard"
          value={formData.firstname}
          onChange={handleChange}
          InputLabelProps={inputLabelProps}
          InputProps={inputProps}
          sx={textFieldSx}
          fullWidth
        />
        <TextField
          name="lastname"
          id="lastname-field"
          label="Last Name"
          variant="standard"
          value={formData.lastname}
          onChange={handleChange}
          InputLabelProps={inputLabelProps}
          InputProps={inputProps}
          sx={textFieldSx}
          fullWidth
        />
        <TextField
          name="email"
          id="email-field"
          label="Email"
          variant="standard"
          value={formData.email}
          onChange={handleChange}
          InputLabelProps={inputLabelProps}
          InputProps={inputProps}
          sx={textFieldSx}
          fullWidth
        />
        <TextField
          name="phonenumber"
          id="phone-field"
          label="Phone Number"
          variant="standard"
          onChange={handleChange}
          value={formData.phonenumber}
          InputLabelProps={inputLabelProps}
          InputProps={inputProps}
          sx={textFieldSx}
          fullWidth
        />
        <TextField
          name="address"
          id="address-field"
          label="Address"
          variant="standard"
          value={formData.address}
          onChange={handleChange}
          InputLabelProps={inputLabelProps}
          InputProps={inputProps}
          sx={textFieldSx}
          fullWidth
        />
        <TextField
          name="message"
          id="message-field"
          label="Message"
          variant="standard"
          value={formData.message}
          onChange={handleChange}
          InputLabelProps={inputLabelProps}
          InputProps={inputProps}
          sx={textFieldSx}
          multiline
          rows={3}
          fullWidth
        />
      </Stack>
      <div className="text-center m-2" data-aos="fade-up">
        <button
          type="submit"
          className=" text-center contact-submit-btn"
          style={{ marginTop: "10px",borderRadius:'50px', color: "var(--form-color)" }}
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default ContactPage;
const Contact = () => {
  return (
    <div className="contact-wrapper">
      <div className="email-phone-section">
        <h1>Contact Information</h1>
        <p>Below, you will find my email and phone number. Please feel free to reach out to me if you have any questions or comments!</p>
        <div className="phone">
          <i class="fa-solid fa-phone"></i> (656) 241-7455
        </div>
        <div className="email">
          <i class="fa-solid fa-envelope"></i> mckoendeclan@gmail.com
        </div>
      </div>
      <div className="linkedin-section">
        <h1>Linkedin</h1>
        <p>My Linkedin is linked below. Feel free to pay a visit!</p>
        <a href="https://www.linkedin.com/in/declanmckoen" target="_blank"><i class="fa-brands fa-linkedin"></i></a>
      </div>
      <div className="resume-section">
        <h1>Resume</h1>
        <p>View my resume in a GitHub repository!</p>
        <a href="https://github.com/declanmckoen/Resume" target="_blank"><i class="fa-solid fa-file"></i></a>
      </div>
    </div>
  );
}

export default Contact;
const About = () => {
  return (
    <div className="about-wrapper">
      <h1>About Me</h1>
      <div className="about">
        <h2><i className="fa-solid fa-user icon-who"></i> Who I Am</h2>
        <p>Hey there! My name is Declan, and I am currently an undergraduate student at the University of Florida (UF) majoring in Computer Science! Thank you for taking the time to visit my website and learn more about me!</p>
        <h2><i className="fa-solid fa-chart-line icon-journey"></i> My Journey</h2>
        <p>I decided to pursue Computer Science in the second semester of my Freshman year, putting me at a slight disadvantage to my peers who had already began their journeys in this field. However, despite having no prior programming knowledge, I aced my begineer programming classes and started to grow some confidence in my abilities. I realized that humans are capable of anything as long as they put in the effort. As I look back on those times, I realize how far I have grown, both as a programmer and as an individual.</p>
        <h2><i className="fa-solid fa-laptop-code icon-interests"></i> My Interests</h2>
        <p>As I learn more about the different subfields of computer science, I realize that I have two main interests: <span>cybersecurity</span> and <span>software engineering</span>. Although UF does not offer many cybersecurity-related courses, I find that I can adequately teach myself through online courses and tutorial. The best way to learn is through commitment. I hope to start my career in either of these fields.</p>
      </div>
    </div>
  );
}
 
export default About;
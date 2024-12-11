const Education = () => {
  return (
    <div className="timeline-wrapper">
      <h1>Education History</h1>
      <div class="timeline">
        <div class="timeline-item">
          <div class="timeline-date">2018</div>
          <div class="timeline-content">
            <h3><i className="fa-solid fa-user-graduate icon-education"></i> Started High School</h3>
            <p>Began my education at King High School in pursuit of my IB Diploma.</p>
            <p>Achieved an IB total points score of 41/45</p>
          </div>
        </div>
        <div class="timeline-item">
          <div class="timeline-date">2022</div>
          <div class="timeline-content">
            <h3><i className="fa-solid fa-book-open icon-education"></i> Started University</h3>
            <p>Enrolled in the University of Florida, majoring in Computer Science.</p>
            <p>Relevant courses taken:</p>
            <ul>
              <li>Programming Fundamentals I</li>
              <li>Programming Fundamentals II</li>
              <li>Computer Organization</li>
              <li>Data Structures and Algorithms</li>
              <li>Computational Linear Algebra</li>
              <li>Programming Language Concepts</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
 
export default Education;
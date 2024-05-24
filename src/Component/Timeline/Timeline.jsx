import "./Timeline.scss";

function Timeline() {
  return (
    <section id="Experience">
      <div className="timelines">
        <h3 className="timelines__heading">My Timeline</h3>
        <div class="container">
          <div class="timeline">
            <ul>
              <li>
                <div class="timeline-content">
                  <h3 class="date">10th may, 2024</h3>
                  <h1>BrainStation</h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Consectetur tempora ab laudantium voluptatibus aut eos
                    placeat laborum, quibusdam exercitationem labore.
                  </p>
                </div>
              </li>
              <li>
                <div class="timeline-content">
                  <h3 class="date">20th may, 2010</h3>
                  <h1>Heading 2</h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Consectetur tempora ab laudantium voluptatibus aut eos
                    placeat laborum, quibusdam exercitationem labore.
                  </p>
                </div>
              </li>
              <li>
                <div class="timeline-content">
                  <h3 class="date">20th may, 2010</h3>
                  <h1>Heading 3</h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Consectetur tempora ab laudantium voluptatibus aut eos
                    placeat laborum, quibusdam exercitationem labore.
                  </p>
                </div>
              </li>
              <li>
                <div class="timeline-content">
                  <h3 class="date">20th may, 2010</h3>
                  <h1>Heading 4</h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Consectetur tempora ab laudantium voluptatibus aut eos
                    placeat laborum, quibusdam exercitationem labore.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Timeline;

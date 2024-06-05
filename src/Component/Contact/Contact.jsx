import "./Contact.scss";
function Contact() {
  return (
    <section id="Contact">
      <div className="contact">
        <div className="textContainer">
          <h1>Let's Create Magic Together!</h1>
          <div className="item">
            <h2>Mail</h2>
            <span>padmalathalakshmi@gmail.com</span>
          </div>
          <div className="item">
            <h2>Address</h2>
            <span>Langley,BC</span>
          </div>
          <div className="item">
            <h2>Phone</h2>
            <span>+16047247962</span>
          </div>
        </div>
        <div className="formContainer">
          <form>
            <input type="text" required placeholder="Name" />
            <input type="email" required placeholder="Email" />
            <textarea rows={8} placeholder="Message" />
            <button>Submit</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;

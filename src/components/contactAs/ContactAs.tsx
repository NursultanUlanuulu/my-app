import { Btn2 } from '../hero1/Hero1';
import contact from "../../assets/img/contacts/contact.svg";
import contact2 from "../../assets/img/contacts/contact2.svg";
import contact3 from "../../assets/img/contacts/contact3.svg";
import contact4 from "../../assets/img/contacts/contsct4.svg";
const ContactAs = () => {
  return (
    <div>
      <div className="form">
        <h3 className="title">
          If you have any questions, concerns or comments, we would love to hear
          from you! Submit your query using any of the methods below:
        </h3>
        <div>
          <div className="contact-flex">
            <img src={contact} alt="" /> <p>(502) 102-270</p>
          </div>
          <div className="contact-flex">
            <img src={contact2} alt="" /> <p>Send us an email</p>
          </div>
          <div className="contact-flex">
            <img src={contact3} alt="" /> <p>Connect on Messenger</p>
          </div>
          <div className="contact-flex">
            <img src={contact4} alt="" /> <p>Tweet us</p>
          </div>
        </div>
        <div>
          <h3 className="title">
            Or get in touch with us by completing the below form:
          </h3>
          <form>
            <div className="input">
              <label htmlFor="">Full Name*</label>
              <input type="text" />
            </div>
            <div className="input">
              <label htmlFor="">Email*</label>
              <input type="text" />
            </div>
            <br />
            <div className="input">
              <label htmlFor="">Phone</label>
              <input type="text" />
            </div>
            <div className="input">
              <label htmlFor="">Subject</label>
              <input type="text" />
            </div>
            <br />
            <div className="big-input">
              <label htmlFor="">Message*</label>
              <input type="text" />
            </div>
            <br />
          </form>
          <Btn2>Send message</Btn2>
        </div>
      </div>
    </div>
  );
}

export default ContactAs


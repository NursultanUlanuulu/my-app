import { OutletStoresData } from "../../utils/constants/constants";
import styled from "styled-components";
import contact from "../../assets/img/contacts/contact.svg";
import contact2 from "../../assets/img/contacts/contact2.svg";
import contact6 from "../../assets/img/contacts/outline.svg";
import contact5 from "../../assets/img/contacts/Clock.svg";
const OutletStores = () => {
  return (
    <>
      <Cards>
        {OutletStoresData.map((item) => (
          <div key={item.id} className="box">
            <img src={item.img} alt="" />
            <h4 className="title-flex">{item.name}</h4>
            <div>
              <div className="title-flex">
                <img src={contact} alt="" /> <p>{item.number}</p>
              </div>
              <div className="title-flex">
                <img src={contact2} alt="" /> <p>{item.email}</p>
              </div>
              <div className="title-flex">
                <img src={contact5} alt="" /> <p>{item.time}</p>
              </div>
              <div className="title-flex">
                <img src={contact6} alt="" /> <p>{item.location}</p>
              </div>
            </div>
          </div>
        ))}
      </Cards>
    </>
  );
};

export default OutletStores;

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  .box {
    width: 390px;
    margin-bottom: 30px;
    border: 1px solid #e5e8ed;
    background: #fff;
    border-radius: 10px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2), 0 6px 6px rgba(0, 0, 0, 0.23);
    transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
    transform: rotateX(0deg);
    transform-origin: center bottom;
    &:hover {
      transform: translateY(-10px) rotateX(5deg);
    }
  }
  .title-flex {
    display: flex;
    align-items: center;
    margin: 10px;
    p {
      margin-left: 10px;
    }
  }
`;

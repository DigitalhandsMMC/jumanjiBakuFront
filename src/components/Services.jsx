import React from "react";
import styled from "styled-components";
import { IoIosCut } from "react-icons/io";
import { FaPaintBrush } from "react-icons/fa";
import { BsFillSuitHeartFill } from "react-icons/bs";
import { SiGoogleplay } from "react-icons/si";
import Title from "./Title";
export default function Services() {
  const data = [
    {
      type: "Blowout",
      text: "Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto",
      icon: <IoIosCut size={78} />,
    },
    {
      type: "Retouch",
      text: "Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto",
      icon: <BsFillSuitHeartFill size={64} />,
    },
    {
      type: "Blowout",
      text: "Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto",
      icon: <FaPaintBrush size={64} />,
    },
  ];
  return (
    <Section id="services">
      <Title value="Services" />
      <div className="services">
        {data.map((service, index) => (
          <div className="service" key={index}>
            <div
              className="serviceImageWrapper"
              // style={{ color: "var(--primary-light)" }}
            >
              {service.icon}
            </div>
            <div className="serviceTitle">
              <span>0{index + 1}</span>
              <h2>{service.type}</h2>
            </div>
            <p className="serviceDesciption">{service.text}</p>
            <SiGoogleplay size={42} className="icon" />
          </div>
        ))}
      </div>
    </Section>
  );
}

const Section = styled.section`
  min-height: 100vh;
  margin-top: 16rem;
  .services {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 5rem;
    align-items: center;
    height: 100%;
    margin: 0 14rem;
    margin-top: 10rem;

    .service {
      padding: 2rem;
      // padding: 4rem;
      &:hover {
        cursor: pointer;
        transition: 0.8s;
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
        transform: translateY(-1.5rem);
      }

      &:nth-of-type(2) {
        background-color: #000;
        border-radius: 8px;
        // color: #fff;
        .serviceDesciption {
          color: #fff;
        }
        .serviceTitle {
          span {
            color: #fff;
          }
        }
      }
      .serviceTitle {
        span {
          color: #000;
          font-weight: bold;
        }

        h2 {
          font-size: 3rem;
          line-height: 2.5rem;
          // margin-bottom: 5rem;
          margin-bottom: 3rem;
          color: var(--primary-light);
        }
      }

      .serviceImageWrapper {
        color: var(--primary);
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .serviceDesciption {
        color: #000;
        font-weight: 500;
        margin-bottom: 2rem;
      }
    }
    .icon {
      margin-bottom: 3rem;
      color: var(--primary-light);
    }
  }
`;

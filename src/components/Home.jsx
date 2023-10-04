import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import homeBg from "../assets/images/homeBg3.avif";
import { SiGoogleplay } from "react-icons/si";
export default function Home() {
  return (
    <Section id="home">
      <Navbar />
      <div className="home">
        <div className="content">
          <div className="title">
            <h1>Jumanji</h1>
          </div>
          <div className="subTitle">
            <p>
              Blanditiis harum quisquam eius sed odit fugiat iusto fuga
              praesentium optio, eaque rerum! Provident similique accusantium
              nemo autem. Veritatis obcaecati tenetur iure eius earum.
            </p>
          </div>
          <SiGoogleplay size={42} className="playIcon" />
        </div>
      </div>

      <div className="info">
        <div className="grid">
          <div className="col">
            <strong>Jumanji</strong>
            <p>Luxury Kids & Teens Cut</p>
          </div>
          <div className="col">
            <strong>Email</strong>
            <p>jumanji@gmail.com</p>
          </div>
          <div className="col">
            <strong>Mobile</strong>
            <p>+994 12 525 27 17</p>
          </div>
          <div className="col">
            <strong>Address</strong>
            <p>Mərkəzi Bulvar küçəsi 3, Bakı Ağ Şəhər</p>
          </div>
          <div className="col">
            <strong>Services</strong>
            <p>Hair Cut</p>
            <p>Make up</p>
          </div>
          <div className="col">
            <strong>Working Hours</strong>
            <p>Monday to friday</p>
            <p>09:30-21:00</p>
          </div>
        </div>
      </div>
    </Section>
  );
}

const Section = styled.section`
  background: url(${homeBg}) no-repeat center;
  min-height: 100vh;
  background-size: cover;
  position: relative;

  .home {
    height: 100%;

    .content {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 1.2rem;
      width: 60%;
      color: #fff;
      margin-top: 8rem;
      padding-left: 18rem;

      .title {
        h1 {
          font-size: 5rem;
          line-height: 5.3rem;
        }
      }

      .subTitle {
        p {
          width: 70%;
          margin-bottom: 5.3rem;
        }
      }
      // .playIcon {
      //   color: var(--primary-light);
      // }
    }
  }
  .info {
    position: absolute;
    // width: 50%;
    // bottom: -6rem;
    bottom: -8rem;
    right: 0;
    background-color: var(--primary-light);
    padding: 4rem;

    .grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 4rem;
      color: #fff;
    }
  }
`;

import React from "react";
import styled from "styled-components";
import port1 from "../assets/images/port1.jpg";
import port2 from "../assets/images/port2.jpg";
import port3 from "../assets/images/port3.jpg";
import port4 from "../assets/images/port4.jpg";
import port5 from "../assets/images/port5.jpg";
import port6 from "../assets/images/port6.jpg";
import port7 from "../assets/images/port7.jpg";
import port8 from "../assets/images/port8.jpg";
import { MdExpandMore } from "react-icons/md";

export default function Portfolio() {
  return (
    <Section id="portfolio">
      <div className="grid">
        <div className="gridBox gridChild"></div>
        <div className="gridBox gridChild"></div>
        <div className="gridBox gridChild"></div>
        <div className="gridBox gridChild"></div>
        <div className="gridBox gridChild"></div>
        <div className="gridBox gridChild"></div>
        <div className="gridBox gridChild"></div>
        <div className="gridBox gridChild"></div>
      </div>
      <div className="portfolioMore">
        <span>Load More</span>
        <MdExpandMore className="icon" />
      </div>
    </Section>
  );
}

const Section = styled.section`
  min-height: 100vh;
  padding-bottom: 2rem;
  background-color: var(--primary-light);

  .grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-areas:
      "one one two two"
      "one one three four"
      "five six seven seven"
      "eight six seven seven";

    .gridBox {
      height: 15rem;
      width: 100%;
      cursor: pointer;

      &:nth-of-type(1) {
        grid-area: one;
        background: url(https://instagram.fgyd21-1.fna.fbcdn.net/v/t39.30808-6/375812543_17924959244771262_1425556031514044490_n.jpg?stp=dst-jpg_e35_p720x720_sh0.08&_nc_ht=instagram.fgyd21-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=vPoSw4jySuwAX8URfzv&edm=ACWDqb8AAAAA&ccb=7-5&ig_cache_key=MzE4NjY4NTIyNTYwNTY1Nzc2Mg%3D%3D.2-ccb7-5&oh=00_AfBzyTa4PsnhFhOifdvu_2EFnm7lx7TLly99EYJNYJsC5A&oe=6521CD78&_nc_sid=ee9879)
          no-repeat right center;
        background-size: cover;
        height: 100%;
        z-index: 10;
      }
      &:nth-of-type(2) {
        grid-area: two;
        background: url(${port1}) no-repeat center center;
        background-size: cover;
        z-index: 10;
      }
      &:nth-of-type(3) {
        grid-area: three;
        background: url(${port2}) no-repeat right center;
        background-size: cover;
        width: 100%;
      }
      &:nth-of-type(4) {
        grid-area: four;
        background: url(${port3}) no-repeat right center;
        background-size: cover;
      }
      &:nth-of-type(5) {
        grid-area: five;
        background: url(${port4}) no-repeat center center;
        background-size: cover;
        z-index: 10;
      }
      &:nth-of-type(6) {
        grid-area: six;
        background: url(${port5}) no-repeat center center;
        background-size: cover;
        height: 100%;
      }
      &:nth-of-type(7) {
        grid-area: seven;
        background: url(${port6}) no-repeat center center;
        background-size: cover;
        height: 100%;
      }
      &:nth-of-type(8) {
        grid-area: eight;
        background: url(${port7}) no-repeat center center;
        background-size: cover;
      }
    }
  }

  .portfolioMore {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.2rem;
    margin: 4rem 0;

    span {
      letter-spacing: 0.1rem;
      color: #fff;
      text-transform: uppercase;
    }

    .icon {
      font-size: 42px;
      color: #fff;
    }
  }
`;

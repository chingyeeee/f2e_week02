import styled from "styled-components";
import { colors } from "./colors";

const fontSize = {
  h5: "20px",
  title: "16px",
  subtitle: "14px",
  p1: "16px",
  p2: "14px",
  caption: "12px",
};

export const H5 = styled.h3`
  margin: 0;
  font-size: ${fontSize.h5};
  line-height: ${(props) => (props.mobile ? "30px" : "20px")};
  font-weight: ${(props) => (props.medium ? "500" : "700")};
  color: ${(props) => {
    switch (props.$mode) {
      case "active":
        return colors.p1;
      case "light":
        return colors.n5;
      case "white":
        return colors.n1;
      case "grey":
        return colors.n6;
      default:
        return colors.n7;
    }
  }};
`;

export const Title = styled.h4`
  font-size: ${fontSize.title};
  line-height: ${(props) => (props.mobile ? "24px" : "20px")};
  font-weight: ${(props) => (props.bold ? "700" : "400")};
  color: ${(props) => {
    switch (props.$mode) {
      case "active":
        return colors.p1;
      case "light":
        return colors.n5;
      case "white":
        return colors.n1;
      case "black":
        return colors.n7;
      default:
        return colors.n6;
    }
  }};
  margin: 0;
  &:hover {
    color: ${(props) => {
      switch (props.$mode) {
        case "active":
          return colors.p3;
        case "light":
          return colors.p3;
        case "white":
          return colors.n1;
        case "black":
          return colors.n7;
        default:
          return colors.p3;
      }
    }};
  }
`;

export const Subtitle = styled.h5`
  font-size: ${fontSize.subtitle};
  line-height: ${(props) => (props.mobile ? "24px" : "18px")};
  font-weight: ${(props) => (props.bold ? "bold" : "400")};
  margin: 0;
  color: ${(props) => {
    switch (props.$mode) {
      case "active":
        return colors.p1;
      case "light":
        return colors.n5;
      case "white":
        return colors.n1;
      case "black":
        return colors.n7;
      default:
        return colors.n6;
    }
  }};
`;

export const P1 = styled.p`
  font-size: ${fontSize.p1};
  line-height: ${(props) => (props.mobile ? "24px" : "20px")};
  font-weight: ${(props) => (props.medium ? "500" : "400")};
  margin: 0;
  color: ${(props) => {
    switch (props.$mode) {
      case "active":
        return colors.p1;
      case "light":
        return colors.n5;
      case "white":
        return colors.n1;
      case "black":
        return colors.n7;
      default:
        return colors.n6;
    }
  }};
`;

export const P2 = styled.p`
  font-size: ${fontSize.p2};
  line-height: ${(props) => (props.mobile ? "24px" : "20px")};
  font-weight: ${(props) => (props.medium ? "500" : "400")};
  margin: 0;
  color: ${(props) => {
    switch (props.$mode) {
      case "active":
        return colors.p1;
      case "light":
        return colors.n5;
      case "white":
        return colors.n1;
      default:
        return colors.n6;
    }
  }};
`;

export const Caption = styled.p`
  font-size: ${fontSize.caption};
  line-height: ${(props) => (props.mobile ? "18px" : "16px")};
  font-weight: ${(props) => (props.bold ? "700" : "400")};
  margin: 0;
  color: ${(props) => {
    switch (props.$mode) {
      case "active":
        return colors.p1;
      case "light":
        return colors.n5;
      case "white":
        return colors.n1;
      case "black":
        return colors.n7;
      default:
        return colors.n6;
    }
  }};
`;

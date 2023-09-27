import styled from "@emotion/styled";

export const DesktopContainer = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
`;

export const MobileContainer = styled.div`
  @media (min-width: 769px) {
    display: none;
  }
`;

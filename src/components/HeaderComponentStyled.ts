import styled from "@emotion/styled";
import {colors} from "../utils/color-pallete.ts";

export const HeaderDesktop = styled.div`
  display: flex;
  align-items: center;
  padding-right: 10px;
  padding-left: 10px;
  justify-content: space-between;
  position: sticky;
  top: 0;
  backdrop-filter: blur(10px);
  z-index: 999;
  height: 50px;
  background-color: #13151a;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
`;

export const HeaderCenter = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  height: inherit;
`;

// Styled-components untuk HeaderLink
export const HeaderLink = styled.a<{ active?: boolean }>`
  position: relative;
  cursor: pointer;
  opacity: 1;
  transition: opacity 0.3s ease;
  height: inherit;
  display: flex;
  align-items: center;
  color: ${props => (props.active ? colors.primary : 'black')};
  font-weight: bold;
  margin-left: 3px;
  margin-right: 3px;
  
  @media (min-width: 900px) {
    margin-left: 20px;
    margin-right: 20px;
  }
  
  &:hover {
    opacity: 0.7; 
  }
`;

export const HeaderLinkIndicator = styled.div<{ active?: boolean }>`
  position: absolute;
  bottom: 0;
  width: 100%; 
  height: 3px;
  --tw-bg-opacity: 1;
  background-color: ${props => (!props.active ? "" : "rgb(153 27 27 / var(--tw-bg-opacity))")};
`;

export const HeaderRight = styled.div`
  display: flex;
  align-items: center;
`;

export const TemuBangunLogo = styled.div({
    display: "flex",
    flexDirection: "row",
    gap: "10px"
});
import styled from "@emotion/styled";

const baseTextStyle = `
  font-weight: 700;
  letter-spacing: 0.1px;
`;

export const TextSmall = styled.p`
  font-size: 12px;
  ${baseTextStyle}
`;

export const TextRegular = styled.p`
  font-size: 15px;
  opacity: 90%;
`;

export const TextMedium = styled.p`
  font-size: 20px;
`;

export const TextBold = styled.p`
  font-size: 25px;
  font-weight: 400;
`;

export const TextSuperBold = styled.p`
  font-size: 30px;
  ${baseTextStyle}
`;

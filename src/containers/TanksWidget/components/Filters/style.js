import styled from "styled-components";
import colors from "../../../../utils/colors";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 25px 15px;
`;

export const ActionWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 10px 0;
`;

export const FiltersWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin: 10px 0;
`;

export const Filter = styled.span`
  margin-right: 15px;
  margin-bottom: 10px;
  font-size: 14px;
  text-transform: uppercase;
  padding: 5px 10px;
  background: ${colors.button};
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

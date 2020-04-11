import React, { useState, useRef } from "react";
import useOutsideClick from "./useOutsideClick";
import { getIconImageSrc } from "../../../utils/helpers";
import styled from "styled-components";
import colors from "../../../utils/colors";

const Container = styled.div`
  position: relative;
  font-size: 16px;
  min-width: 200px;
`;

const SelectElement = styled.div`
  width: 100%;
  appearance: none;
  display: block;
  padding: 10px;
  background: url(${props => props.url}) no-repeat 90% center;
  background-size: 10px;
  background-color: ${colors.main};
  color: ${colors.button};
  border: 1px solid ${colors.button};
  border-radius: 5px;
  cursor: pointer;
  text-transform: uppercase;
  box-sizing: border-box;
`;

const Dropdown = styled.div`
  margin-top: 10px;
  width: 100%;
  color: ${colors.button};
  border: 1px solid ${colors.button};
  border-radius: 5px;
  z-index: 1;
  position: absolute;
  display: flex;
  flex-direction: column;
  padding: 10px;
  background-color: ${colors.main};
`;

const DropdownItem = styled.span`
  margin: 5px 0;
  text-transform: uppercase;
  cursor: pointer;
  transition: .3s;
  
  &:hover {
    color: ${colors.font};
  }
`;

export default function Select({ label, selected, onSelect, items, type }) {
    const [toggle, setToggle] = useState(false);
    const selectRef = useRef(null);

    useOutsideClick(selectRef, () => {
        setToggle(false);
    });

    const handleSelect = selected => {
        onSelect(type, selected);
        setToggle(false);
    }

    const iconUrl = toggle ? getIconImageSrc("up") : getIconImageSrc("down");
    return (
        <Container ref={selectRef}>
            <SelectElement onClick={() => setToggle(!toggle)} url={iconUrl}>{selected ? selected : label}</SelectElement>
            {toggle && (
                <Dropdown>
                    {items.map((item, index) => (
                        <DropdownItem
                            key={`${item}${index}`}
                            onClick={() => handleSelect(item)}
                        >
                            {item}
                        </DropdownItem>)
                    )}
                </Dropdown>
            )}
        </Container>
    )
}

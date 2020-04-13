import React, { useState, useRef } from "react";
import useOutsideClick from "../../../utils/useOutsideClick";
import { getIconImageSrc } from "../../../utils/helpers";
import { Container, DropdownItem, Dropdown, SelectElement } from "./style"

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
            <SelectElement onClick={() => setToggle(!toggle)} url={iconUrl}>{selected.label || label}</SelectElement>
            {toggle && (
                <Dropdown>
                    {items.map((item, index) => (
                        <DropdownItem
                            key={`${item.value}${index}`}
                            onClick={() => handleSelect(item)}
                        >
                            {item.label}
                        </DropdownItem>)
                    )}
                </Dropdown>
            )}
        </Container>
    )
}

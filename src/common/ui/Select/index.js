import React, { useState, useRef } from "react";
import useOutsideClick from "../../../utils/useOutsideClick";
import { getIconImageSrc } from "../../../utils/helpers";
import { Container, DropdownItem, Dropdown, SelectElement, CheckIcon } from "./style"

export default function Select({ label, selected, onSelect, items, type, multi }) {
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
                    {items.map((item, index) => {
                        const checked = (selected.value === item.value);
                        return (
                            <DropdownItem
                                key={`${item.value}${index}`}
                                onClick={() => handleSelect(item)}
                                checked={checked}
                            >
                                {item.label}
                                {checked && <CheckIcon src={getIconImageSrc("check")} />}
                            </DropdownItem>
                        )
                    })}
                </Dropdown>
            )}
        </Container>
    )
}

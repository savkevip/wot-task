import { map, find, isEmpty, values, omit } from "lodash/fp";
import React, { useState, useRef } from "react";
import useOutsideClick from "../../../utils/useOutsideClick";
import { getIconImageSrc } from "../../../utils/helpers";
import { Container, DropdownItem, Dropdown, SelectElement, CheckIcon } from "./style"

const getLabel = (selected, label) => {
    if (!isEmpty(selected)) {
        if (selected.label) return selected.label;
        return map(s => s.label)(selected).join(", ");
    }
    return label;
}

const isChecked = (selected, item) => {
    if (!isEmpty(selected)) {
        if (selected.label) return selected.label === item.label;
        const current = find(c => c.value === item.value)(selected);
        return !!current;
    }
    return false;
}

export default function Select({ label, selected, onSelect, items, type, multi }) {
    const [multiSelections, setMultiSelections] = useState({});
    const [toggle, setToggle] = useState(false);
    const selectRef = useRef(null);

    useOutsideClick(selectRef, () => {
        setToggle(false);
    });

    const handleSelect = selected => {
        if (multi) {
            if (multiSelections[selected.value]) {
                const newMultiSelection = omit(selected.value, { ...multiSelections });
                const newMultiList = values(newMultiSelection);
                setMultiSelections(newMultiSelection);
                onSelect(type, [...newMultiList]);
            } else {
                const newMultiSelection = { ...multiSelections };
                newMultiSelection[selected.value] = selected;
                const newMultiList = values(newMultiSelection);
                setMultiSelections(newMultiSelection);
                onSelect(type, [...newMultiList]);
            }
        } else {
            onSelect(type, selected);
            setToggle(false);
        }
    }

    const iconUrl = toggle ? getIconImageSrc("up") : getIconImageSrc("down");
    return (
        <Container ref={selectRef}>
            <SelectElement onClick={() => setToggle(!toggle)} url={iconUrl}>{getLabel(selected, label)}</SelectElement>
            {toggle && (
                <Dropdown>
                    {items.map((item, index) => {
                        const checked = isChecked(selected, item);
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

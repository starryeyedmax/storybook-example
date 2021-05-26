import React, { useState } from 'react';
import { PageWrapper } from '../storybook';
import { OptionType } from '../Autocomplete/types';
import AutocompleteComponent from '../Autocomplete';

export default {
    title: 'Components/Autocomplete',
    component: AutocompleteComponent,
};

const top100Films: OptionType[] = [
    { value: 'The Shawshank Redemption', title: 'The Shawshank Redemption' },
    { value: 'The Godfather', title: 'The Godfather' },
    { value: 'The Dark Knight', title: 'The Dark Knight' },
    { value: '12 Angry Men', title: '12 Angry Men' },
];

export const SingleChoice = () => {
    const [value, setValue] = useState<OptionType>();

    return (
        <PageWrapper>
            <AutocompleteComponent
                freeSolo
                options={top100Films}
                defaultValue={top100Films}
                getOptionLabel={(option) => option.title}
                value={value}
                onChange={(e, newValue) => setValue(newValue as OptionType)}
            />
        </PageWrapper>
    );
};

export const MultipleSelectChoice = () => {
    const [value, setValue] = useState<OptionType[]>([]);

    return (
        <PageWrapper>
            <AutocompleteComponent
                onDelete={(title) => {
                    setValue((prevValue) => prevValue.filter((v) => v.title !== title));
                }}
                multiple
                options={top100Films}
                defaultValue={top100Films}
                getOptionLabel={(option) => option.title}
                value={value}
                onChange={(e, newValue) => setValue(newValue as OptionType[])}
            />
        </PageWrapper>
    );
};

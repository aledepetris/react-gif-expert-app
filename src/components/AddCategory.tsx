import { useState, type ChangeEvent, type FormEvent } from "react"

type AddCategoryProps = {
  onNewCategory: (newCategory: string) => void;
};


export const AddCategory = ({ onNewCategory }: AddCategoryProps) => {
    const [inputValue, setInputValue] = useState('Tails');

    const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };

    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (inputValue.trim().length <= 1) return;
        onNewCategory(inputValue.trim());
        setInputValue('');
    };

    return (
        <form onSubmit={onSubmit}>
            <input
                type="text"
                placeholder="Buscar Gifs"
                value={inputValue}
                onChange={onInputChange}
            />
        </form>
    );
};

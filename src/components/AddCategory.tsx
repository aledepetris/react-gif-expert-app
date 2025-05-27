import { useState, type ChangeEvent, type FormEvent } from "react"

type AddCategoryProps = {
  setCategories: React.Dispatch<React.SetStateAction<string[]>>;
};

export const AddCategory = ({ setCategories }: AddCategoryProps) => {
  const [inputValue, setInputValue] = useState('Tails');

  const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if ( inputValue.trim().length <= 1) return;
    setCategories(categories => [...categories, inputValue]);
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

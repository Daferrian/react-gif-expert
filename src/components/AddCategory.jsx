import { useState } from "react"


export const AddCategory = ({onNewCategory}) => {

    useState('One Punch')

    const [inputValue, setInputValue] = useState('One Punch')

    const onInputChange = ({target}) => {
        setInputValue(target.value)
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if(inputValue.trim().length <= 1) return;
        
        onNewCategory(inputValue);

        setInputValue('');
    }

  return (
    <form onSubmit={onSubmit}>
        <input
            type="text"
            placeholder="Buscar Gifs"
            value={inputValue}
            onChange={(event) => onInputChange(event)}
        />
    </form>
  )
}

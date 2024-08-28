import { forwardRef } from 'react';

const InputSearch = forwardRef(({ text, onChange }, ref) => {
  return (
    <div className="inputSearch-container">
      <input
        className="inputSearch"
        type="text"
        placeholder={text}
        onChange={onChange} // Manejador de cambios del input
        ref={ref} // Asignar la referencia al input
      />
    </div>
  );
});

InputSearch.displayName = 'InputSearch'; // Agregar nombre para componentes forwardRef
export default InputSearch;
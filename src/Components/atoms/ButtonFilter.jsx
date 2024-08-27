
const ButtonFilter = ({ options, onSelect }) => {
   // Manejador de cambios del select
   const handleChange = (event) => {
      // Obtén el valor seleccionado
      const selectedValue = event.target.value;
      // Llama a la función `onSelect` con el valor seleccionado
      onSelect(selectedValue);
   };

   return (
     <div className="custom-select-wrapper">
       <label htmlFor="filter" className="custom-label">Razas</label>
       <select id="filter" className="custom-select" defaultValue="" onChange={handleChange}>
         <option value="">Todos</option>
         {options.map((option, index) => (
           <option key={index} value={option}>
             {option}
           </option>
         ))}
       </select>
     </div>
   );
};

export default ButtonFilter;
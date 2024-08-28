
import ButtonFilter from "../atoms/ButtonFilter";

const FilterButtons = ({ setRaza, setGenre }) => {
  const handleSelect = (value) => {
    setRaza(value); // Establecer el valor de la raza
  };

  const handleSelect2 = (value) => {
    setGenre(value); // Establecer el valor del género
  };

  return (
    <div className="filterSection__button">
      <ButtonFilter onSelect={handleSelect} options={['Human', 'Saiyan', 'Namekian', 'Majin', 'Frieza Race', 'God', 'Angel', 'Evil', 'Nucleico', 'Nucleico benigno', 'Android', 'Jiren Race']} />
      <ButtonFilter onSelect={handleSelect2} options={['Male', 'Female']} />
    </div>
  );
};

export default FilterButtons;


const CharacterInfo = ({ information, info, setInfo }) => {
  const handleVisibility = () => {
    setInfo(!info); // Cambia el estado entre true y false
  };

  return (
    <>
      <div className={`mainInfo ${info ? 'show' : 'ocult'} `}>
         <div className="mainInfo-container ">
            <div > 
               TOMA :{info ? "Info activa" : "Info inactiva"}
            </div>
            <div onClick={handleVisibility}>
            si
            </div>
            <div>   
            {JSON.stringify(information)}
            </div>
         </div>
      </div>
    </>
  );
};

export default CharacterInfo;


// ${info ? 'hola' : 'hola2'}
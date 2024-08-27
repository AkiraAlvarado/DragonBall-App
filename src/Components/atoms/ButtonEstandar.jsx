const ButtonEstandar = ({ className, text, onClick, disabled }) => {
   return (
      <div
         className={`button ${disabled ? "disabled" : ""}`}
         onClick={!disabled ? onClick : null} // Solo ejecutar onClick si no está deshabilitado
      >
         {text === "Anterior" ? (
            <>
               <i className={className}></i>
               <p>{text}</p>
            </>
         ) : (
            <>
               <p>{text}</p>
               <i className={className}></i>
            </>
         )}
      </div>
   );
};

export default ButtonEstandar;
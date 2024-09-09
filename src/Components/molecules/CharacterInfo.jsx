import useData from "../../../hook.js/useData";

const CharacterInfo = ({ info, setInfo, id }) => {

  // Manejador para cambiar la visibilidad
  const handleVisibility = () => {
    setInfo((prev) => !prev); // Alterna el estado de visibilidad
  };

  // Configuración del endpoint
  const endpoint = `/characters`;
  // Obtención de datos mediante el hook
  const data = useData({ endpoint, id });

  // Función para cortar texto después de un número específico de palabras
  const truncateText = (text, wordLimit) => {
    if (!text) return "";
    const words = text.split(' ');
    if (words.length <= wordLimit) return text;
    return words.slice(0, wordLimit).join(' ') + '...';
  };

  // Verifica que data y data.description estén definidos
  const truncatedDescription = truncateText(data?.description, 40);

  return (
    <div className={`mainInfo ${info ? 'show' : 'ocult'}`}>
      <div className="main-container">
        <div onClick={handleVisibility}>
          si
        </div>
        <div className="mainInfo-container">
          <div className="mainImage-container">
            {/* Verifica si data.image existe antes de mostrar la imagen */}
            {data?.image && (
              <img
                className="mainImage-character"
                src={data.image}
                alt="imagen_personaje"
              />
            )}
          </div>

          <div className="mainDescription-container">
            <h2 className="titulo">{data?.name || 'Nombre no disponible'}</h2>
            <div className="detail-container">
              <div className="detail-container__card">
                <p className="detail-container__camp1">Ki Base: </p>
                <p className="detail-container__camp2">{data?.ki || 'No disponible'}</p>
              </div>
              <div className="detail-container__card">
                <p className="detail-container__camp1">Ki Max: </p>
                <p className="detail-container__camp2">{data?.maxKi || 'No disponible'}</p>
              </div>
              <div className="detail-container__card">
                <p className="detail-container__camp1">Raza: </p>
                <p className="detail-container__camp2">{data?.race || 'No disponible'}</p>
              </div>
            </div>
            <div className="description-container">
              {truncatedDescription}
            </div>
            <div className="planet-container">

              <div className="planet-container__info">
                <h3>Planeta de Origen: {data.originPlanet?.name || 'Nombre no disponible'}</h3>
                <p>{truncateText(data.originPlanet?.description || '', 40)}</p>
              </div>

              <div className="planet-container__image">
                {data.originPlanet?.image && (
                  <img className="planet-image" src={data.originPlanet.image} alt="Planeta de origen" />
                )}
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterInfo;
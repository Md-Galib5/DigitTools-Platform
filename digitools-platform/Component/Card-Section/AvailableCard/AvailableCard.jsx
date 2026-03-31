
import ModelCard from '../SelectionCard/ModelCard';

const AvailableCard = ({datas}) => {
    return (

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-11 w-full sm:w-9/12 mx-auto justify-center'>

            {
                datas.map(data =>{

                    return <ModelCard data={data} />;       
                })
            }

  
        </div>
    );
};

export default AvailableCard;
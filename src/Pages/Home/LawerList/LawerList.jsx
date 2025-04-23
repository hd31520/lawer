
import ListCard from '../../../components/ListCard/ListCard';

const LawerList = ({ sender }) => {

    const { loader, handleLoadData, datas } = sender;

    let sixDta = datas.slice(0, 6);




    return (
        <div>
            <div className='flex justify-center items-center flex-col py-20 gap-5'>
                <h3 className='text-3xl font-extrabold'>Our Best Lawyers</h3>
                <p className='font-extralight'>Our platform connects you with verified, experienced Lawyers across various specialties — all at your convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.</p>
            </div>
            <div>
                {
                    loader
                        ?
                        <div>
                            <div className=' grid grid-cols-1 lg:grid-cols-2 gap-5'>
                                {sixDta?.map((data, idx) => <ListCard key={idx} data={data}></ListCard>)}

                            </div>
                            <div className='flex justify-center items-center py-5'>
                                <button onClick={handleLoadData} className='btn btn-primary'>Show All Lawyer </button>
                            </div>
                        </div>
                        :
                        <div className=' grid grid-cols-1 lg:grid-cols-2 gap-5'>
                            {datas?.map((data, idx) => <ListCard key={idx} data={data}></ListCard>)}
                        </div>
                }
            </div>
        </div >


    );
};

export default LawerList;
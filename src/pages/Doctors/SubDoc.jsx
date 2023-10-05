import img from '../../assets/banner/doctor.png';

const SubDoc = () => {
    return (
        <div className="mt-4">
            <div className='grid md:grid-cols-2 gap-8'>
                <div className="overflow-x-auto">
                    <table className="table text-center">
                        <thead className="bg-gray-300 text-sm font-normal text-gray-700">
                            <tr>
                                <th>Type</th>
                                <th>Single</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white text-center dark:border-gray-700 dark:bg-gray-800">
                            <tr>
                                <td>Brand</td>
                                <td>Samsung</td>
                            </tr>
                            <tr>
                                <td>Brand</td>
                                <td>Samsung</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div>
                    <img style={{ width: '200px' }} src={img} alt="" />
                </div>
            </div>
        </div>
    );
};

export default SubDoc;
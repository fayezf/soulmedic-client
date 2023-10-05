import img1 from '../../../assets/equipment/infrastructure.png';
import img2 from '../../../assets/equipment/ambulance.png';
import img3 from '../../../assets/equipment/plus box.png';

const HosInfo = () => {
    return (
        <div className="mt-16">
            <div className='md:flex justify-center items-center gap-8 px-4'>
                <div>
                    <h2 className="text-3xl font-semibold mb-4">FAQ&apos;s</h2>
                    <div className="collapse mb-2 collapse-plus bg-base-300">
                        <input type="radio" name="my-accordion-3" checked="checked" />
                        <div className="collapse-title text-xl font-medium">
                            What is the difference between lease and license agreement hospital?
                        </div>
                        <div className="collapse-content">
                            <p>A lease is a contract between a tenant and a landlord that provides the tenant with exclusive interest in the property. A license, on the other hand, is when the owner gives permission to a licensee to conduct an action on the owner&apos;s property.</p>
                        </div>
                    </div>
                    <div className="collapse mb-2 collapse-plus bg-base-300">
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title text-xl font-medium">
                            How ownership of property is acquired by a person?
                        </div>
                        <div className="collapse-content">
                            <p>Acquisition by purchase is the most common way we acquire personal property, but there are at least five other ways to legally acquire personal property: (1) possession, (2) finding lost or misplaced property, (3) gift, (4) accession, and (5) confusion.</p>
                        </div>
                    </div>
                    <div className="collapse mb-2 collapse-plus bg-base-300">
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title text-xl font-medium">
                            What is the importance of registration act in Bangladesh?
                        </div>
                        <div className="collapse-content">
                            <p>The purpose of the Registration Act, amongst other things, is to provide a method of public registration of documents so as to give information to people regarding legal rights and obligations arising or affecting a particular property, and to perpetuate documents which may afterwards be of legal importance, and also ...</p>
                        </div>
                    </div>
                    <div className="collapse mb-2 collapse-plus bg-base-300">
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title text-xl font-medium">
                            Is the certified copy of a registered will available to any body?
                        </div>
                        <div className="collapse-content">
                            <p>A certified copy of a registered will is available to the testator only during his lifetime. After his death anybody can obtain after producing proof of death of testator.</p>
                        </div>
                    </div>
                </div>
                <div>
                    <h2 className="text-3xl font-semibold mb-8 mt-2">Why Us?</h2>
                    <div className='flex justify-center items-center gap-2'>
                        <img style={{ width: '50px' }} className=' border-4 border-blue-400 rounded-full hover:bg-blue-300 p-2' src={img1} alt="" />
                        <div>
                            <h3 className='text-lg mb-2 font-semibold'>Great Infrastructure</h3>
                            <p className='mb-8'>Hospital infrastructure: modern facilities, advanced technology, safety measures, and efficient patient care.</p>
                        </div>
                    </div>
                    <div className='flex justify-center items-center gap-2'>
                        <img style={{ width: '50px' }} className=' border-4 border-blue-400 rounded-full hover:bg-blue-300 p-2' src={img2} alt="" />
                        <div>
                            <h3 className='text-lg mb-2 font-semibold'>24/7 Ambulance Services</h3>
                            <p className='mb-8'>Hospital provides round-the-clock ambulance services for emergency medical transportation.</p>
                        </div>
                    </div>
                    <div className='flex justify-center items-center gap-2'>
                        <img style={{ width: '50px' }} className=' border-4 border-blue-400 rounded-full hover:bg-blue-300 p-2' src={img3} alt="" />
                        <div>
                            <h3 className='text-lg mb-2 font-semibold'>Cutting Edge Technology</h3>
                            <p>Cutting-edge hospital technology means using the latest advancements in healthcare tech for better patient care and operational efficiency.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HosInfo;
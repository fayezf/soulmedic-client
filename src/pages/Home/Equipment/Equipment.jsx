import img1 from '../../../assets/equipment/medical-kit.png';
import img2 from '../../../assets/equipment/healthcare.png';
import img3 from '../../../assets/equipment/medicar.png';

const Equipment = () => {
    return (
        <div className='mt-16'>
            <div className='md:flex justify-center items-center gap-8 px-4'>
                <div>
                    <div className='flex justify-center'>
                        <img style={{ width: '80px' }} src={img1} alt="" />
                    </div>
                    <h2 className='text-2xl mt-2 text-center uppercase'>Advanced Technology</h2>
                    <p className='mt-1 text-justify'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus est inventore repudiandae dolore aspernatur voluptate consectetur fugiat, eos reprehenderit minima amet rerum at. Aperiam, voluptate dolor sapiente quaerat natus provident.</p>
                </div>
                <div>
                <div className='flex justify-center'>
                        <img style={{ width: '80px' }} src={img2} alt="" />
                    </div>
                    <h2 className='text-2xl uppercase text-center mt-2'>Healthcare Solutions</h2>
                    <p className='mt-1 text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse temporibus magni at error beatae aperiam eum nobis saepe labore minima similique, suscipit laboriosam cupiditate ratione adipisci odit cum, maxime qui!</p>
                </div>
                <div>
                <div className='flex justify-center'>
                        <img style={{ width: '80px' }} src={img3} alt="" />
                    </div>
                    <h2 className='text-2xl text-center uppercase mt-2'>24/7 Availability</h2>
                    <p className='mt-1 text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium non omnis natus explicabo cum illum aspernatur aut? Minima pariatur suscipit quos, ratione magnam, optio nisi id quasi cum ad veritatis!</p>
                </div>
            </div>
        </div>
    );
};

export default Equipment;
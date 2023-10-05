import { useForm } from "react-hook-form";
import { FaCircleArrowRight } from "react-icons/fa6";
import doctor from '../../../assets/banner/doctor.png';


const Appointment = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className="mt-16">
            <h2 className="text-2xl font-semibold text-slate-500 mb-8">Todays tip from Dr. Fayez</h2>
            <div className="md:flex justify-center items-center gap-20 px-2">
                <div className="md:flex gap-16">
                    <div>
                        <img style={{ width: '250px' }} src={doctor} alt="" />
                        <div className="bg-gray-100 mb-8">
                            <h2 className="font-medium text-center text-sm p-2">Fayez Ahammed, <span className="text-slate-500">MPH</span></h2>
                            <p className="text-slate-500 text-center">Medicine, Surgery</p>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">How to live a healthy lifestyle?</h3>
                        <p className="mb-8 text-slate-600 text-justify">Along with eating right and being active, real health includes <br /> getting enough sleep, practicing mindfulness, managing stress, <br /> keeping mind and body fit, connecting socially, and more.</p>
                        <div className="md:flex gap-2 text-sm items-center mb-4">
                            <FaCircleArrowRight />
                            <span className="text-slate-600">Don&apos;t just worry about the things you cannot help.</span>
                        </div>
                        <div className="md:flex gap-2 text-sm items-center mb-4">
                            <FaCircleArrowRight />
                            <span className="text-slate-600">Eat Healthy, work better, do gardening.</span>
                        </div>
                        <div className="md:flex gap-2 text-sm items-center mb-4">
                            <FaCircleArrowRight />
                            <span className="text-slate-600">Some relationships can kill you. Avoid them at the most.</span>
                        </div>
                        <div className="md:flex gap-2 text-sm items-center mb-4">
                            <FaCircleArrowRight />
                            <span className="text-slate-600">Focus on the good things that you like.</span>
                        </div>
                        <div className="md:flex gap-2 text-sm mb-28 items-center">
                            <FaCircleArrowRight />
                            <span className="text-slate-600">Eat Healthy, work better, do gardening.</span>
                        </div>
                        <p className="text-slate-600 mb-2 text-justify">Until the members of the great arrows. But the result, the <br /> lion needs to drink members, he wants to advertise the <br /> course now, who is pregnant with my big baby. It <br /> should also be used as a medical treatment for the throat.</p>
                    </div>
                </div>
                <div className="bg-gray-200">
                    <h2 className="text-base bg-blue-400 p-2 mb-8 text-white font-semibold">Book an Appointment</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <select defaultValue="Select Department" style={{ width: '250px' }} {...register("category", { required: true })} className="bg-white mb-6 p-2 mx-2">
                            <option>Select Department</option>
                            <option>Gynacelogy</option>
                            <option>Blood Bank</option>
                            <option>Ophthalmology</option>
                            <option>Oncology</option>
                        </select>
                        <br />
                        <input type="text" style={{ width: '250px' }} placeholder="Your Name" {...register("name", { required: true, maxLength: 120 })} className="bg-white mb-6 p-2 mx-2" />
                        <br />
                        <input type="email" style={{ width: '250px' }} placeholder="Your Email" {...register("email", { required: true })} className="bg-white mb-6 p-2 mx-2" />
                        <br />
                        <input type="tel" style={{ width: '250px' }} placeholder="Your Phone" {...register("phone", { required: true })} className="bg-white mb-6 p-2 mx-2" />
                        <br />
                        <input type="date" style={{ width: '250px' }} placeholder="Your Phone" {...register("phone", { required: true })} className="bg-white p-2 mx-2" />
                        <br />
                        <div className="text-right mx-2">
                            <input className='btn-sm mt-4 mb-4 bg-blue-400 font-semibold text-white' type="submit" value="Submit" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Appointment;
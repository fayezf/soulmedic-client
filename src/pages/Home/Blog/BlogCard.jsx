import { FaLocationDot, FaUser } from "react-icons/fa6";

const BlogCard = ({ blog }) => {
    const { id, name, category, date, location, description, image } = blog;
    return (
        <div className="mt-8">
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <div className="md:flex gap-2">
                        <div className="md:flex gap-1">
                            <FaUser />
                            <p>{category}</p>
                        </div>
                        <div className="md:flex gap-1">
                            <FaLocationDot />
                            <p>{location}</p>
                        </div>
                    </div>
                    <p>Date: {date}</p>
                    <p>{description}</p>
                    <div className="card-actions justify-end">
                    <button className="btn-sm border-2 border-blue-400 hover:bg-blue-400 uppercase font-semibold text-blue-400 hover:text-white">Read More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogCard;
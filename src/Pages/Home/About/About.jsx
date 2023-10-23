
import person from "../../../assets/images/about_us/person.jpg"
import parts from "../../../assets/images/about_us/parts.jpg"

const About = () => {
    return (
        <div className="hero  bg-base-100  my-5">
            <div className="hero-content flex-col lg:flex-row justify-between items-end">
                <div className="lg:w-1/2 relative">
                    <img src={person} className="w-full lg:w-3/4 rounded-lg shadow-2xl" />
                    <img src={parts} className=" border-8 border-white absolute w-2/5 bottom-0 lg:bottom-11 right-0 lg:right-20 lg:top-36  rounded-lg shadow-2xl" />
                </div>
                <div className="lg:w-1/2 space-y-2">
                    <h1 className="text-3xl font-bold text-orange-400">About Us </h1>
                    <h1 className="text-5xl font-bold w-full lg:w-4/5">We are qualified & of experience in this field</h1>
                    <p className="">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <p className="">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.  </p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default About;
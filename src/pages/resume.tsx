import Bar from '../components/SkillBar';
import Navbar from '../components/Navbar';
import { languages, tools } from '../data';

const resume = () => {
  return (
    <div>
      <Navbar />
      <div className="md:max-w-3xl sm:max-w-md text-sm tracking-wider leading-loose mx-auto mt-12"> 
        <p className="text-xl font-bold mb-12 border-b-2 border-red-300 p-2">
          Resume
        </p>
        <div className="grid gap-4 md:grid-cols-2 mt-12">
          <div>
            <h5 className="mt-2 mb-4 text-lg font-bold">・Education</h5>
          </div>
          <div>
            <h5 className="my-2 text-lg">某都内私立大学建築学科</h5>
            <p className="my-2 text-sm ml-36">2018年4月~　在学中</p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <h5 className="mt-8 mb-3 text-lg font-bold">・Languages & Frameworks</h5>
          <div className="my-4">
            {languages.map((Language) => (
              <Bar data={Language} key={Language.name} />
            ))}
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <h5 className="mt-8 mb-3 text-lg font-bold">・Tools & Softwares</h5>
          <div className="my-4">
            {tools.map((tool) => (
              <Bar data={tool} key={tool.name} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default resume;

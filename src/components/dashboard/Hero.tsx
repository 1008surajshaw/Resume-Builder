import React from 'react';
import template1 from "../../assets/template/Screenshot 2024-05-19 181318.png";
import template2 from "../../assets/template/Screenshot 2024-05-19 181344.png";
import template3 from "../../assets/template/Screenshot 2024-05-19 181433.png";
import template4 from "../../assets/template/Screenshot 2024-05-19 181525.png";
import template5 from "../../assets/template/Screenshot 2024-05-19 181559.png";
import template6 from "../../assets/template/Screenshot 2024-05-19 181737.png";
import template7 from "../../assets/template/Screenshot 2024-05-19 181903.png";
import template8 from "../../assets/template/Screenshot 2024-05-25 140804.png";
import template9 from "../../assets/template/Screenshot 2024-05-25 135729.png";
import template10 from "../../assets/template/Screenshot 2024-05-25 135459.png";
import { Eye, Heart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

function Hero() {
  const navigate = useNavigate();
  const Template = [
    { id: 1, type: "simple", image: template1 },
    { id: 2, type: "simple", image: template2 },
    { id: 3, type: "simple", image: template3 },
    { id: 4, type: "simple", image: template4 },
    { id: 5, type: "simple", image: template5 },
    { id: 6, type: "simple", image: template6 },
    { id: 7, type: "simple", image: template7 },
    { id: 8, type: "simple", image: template8 },
    { id: 9, type: "simple", image: template9 },
    { id: 10, type: "simple", image: template10 }
  ];
   const handleClick = (id:number) =>{
     navigate(`/template/${id}`);
   }
  return (
    <div className="flex flex-wrap gap-4 ml-10 mt-4">
      {Template.map((data) => (
        <div key={data.id} className="relative group w-[250px] h-[350px] overflow-hidden cursor-pointer" onClick={() =>handleClick(data.id)}>
          <img
            src={data.image}
            alt={`Template ${data.id}`}
            className="w-full h-full object-cover grayscale-0 group-hover:grayscale transition-transform transform group-hover:scale-110"
          />
          <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
            <button className="bg-white p-1 rounded-full shadow-md">
              <Eye size={19} />
            </button>
          </div>
          <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
            <button className="bg-white p-1 rounded-full shadow-md">
              <Heart size={19} />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Hero;

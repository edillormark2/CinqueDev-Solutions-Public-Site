import React, {useState} from "react";
import { Typography, Divider, Card } from "@mui/joy";

import readyWareImage from '../assets/20945368.jpg';
import customWareImage from '../assets/20945431.jpg';
import software from '../data/software';

/* const importAll = (r) => r.keys().map(r);
const images = importAll(require.context('../assets/examples', false, /\.(png)$/)); */

const cardStyle = "flex flex-col rounded-md w-full md:w-1/3 shadow-md p-4 items-center justify-start gap-3 bg-white hover:cursor-pointer hover:shadow-xl ease-out duration-100 md:hover:scale-110";

const readyWarePerks = [
  'Cost-Effectiveness',
  'Quick Deployment',
  'Scalability',
  'Vendor Support',
  'Industry Best Practices',
  'Integration Capabilities',
]

const customWarePerks = [
  'Tailored Solutions',
  'Competitive Advantage',
  'Scalable and Flexible',
  'Full Control',
  'Systems Integration',
  'Enhanced Security',
  'Long-Term Cost Savings'
]

const Services = () => {
  const [showRMS, setShowRMS] = useState(false);
  const [showCMS, setShowCMS] = useState(false);

  /* const handleCardClick = itemId => {
    const rmsSection = document.getElementById(itemId);
    if (rmsSection) {
      setTimeout(() => {
        rmsSection.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  }; */


  return (
    <div className="flex flex-col mt-10 justify-center h-auto w-full items-center">
      <Typography level="h1" className=" mb-12">Our Services</Typography>
      <div className="flex md:flex-row flex-col md:w-4/5 w-11/12 justify-around gap-10 md:gap-0">

        <Card className={cardStyle + " relative"} 
          /* onClick={() => {setShowRMS(prevTheme => !prevTheme);
          handleCardClick("rms");
          setShowCMS(false)
        }} */>

          <Typography level="h2">Ready Software</Typography>
          <img src={readyWareImage} alt="readyware" className="rounded-md"/>
          <p className="font-semibold text-lg">Features</p>
          <ul className="md:grid md:grid-cols-2 md:text-left flex flex-col text-center gap-2">
            {readyWarePerks.map((perk, index)=>(
              <li key={index} className="font-medium text-gray-700 text-sm">{perk}</li>
            ))}
          </ul>
        </Card>

        <Card className={cardStyle}>
          <Typography level="h2">Custom Software</Typography>
          <img src={customWareImage} alt="readyware" className="rounded-md"/>
          <p className="font-semibold text-lg">Features</p>
          <ul className="md:grid md:grid-cols-2 md:text-left flex flex-col text-center gap-2">
            {customWarePerks.map((perk, index)=>(
              <li key={index} className="font-medium text-gray-700 text-sm">{perk}</li>
            ))}
          </ul>
        </Card>
      </div>
      {/* <Divider className="my-14" />

      <div id="rms" className={`flex flex-col w-full rounded-md p-4 items-center gap-4 ${showRMS?'block':'hidden'}`}>
        <Typography level="h2">Pre-built software</Typography>
          <div className="rounded-md h-auto w-4/5 flex gap-4 overflow-x-auto p-2">
          {images.map((image, index) => (
            <img key={index} src={image} alt={`${index}`} className="w-64 rounded"/>
          ))}
          </div>
          <div className="grid grid-cols-2 w-4/5 gap-4">
            {software.map((item, index) => (
              <div className="text-sm outline outline-1 outline-gray-300 p-2 rounded shadow hover:shadow-lg duration-300 ease-out hover:cursor-pointer">
                <p className="font-bold">{item.title}</p>
                <p className="text-gray-600 text-sm text-600 text-justify">{item.desc}</p>
              </div>
            ))}
          </div>
      </div> */}
    </div>
  );
};

export default Services;

import React from 'react'
import MyStyledText from '../../components/ui/text'
import { useTranslation } from 'react-i18next'
import Navbar from '../../components/ui/navbar';
import Footer from '../../components/ui/footer';

function CleaningServicesPage() {
  const {t,i18n} = useTranslation();
  return (
    <div className=' h-full w-full'>
        <Navbar/>
        <img src="./specialized cleaning service background.png" alt="" className='' />
        <div className={`px-[108px] flex-col justify-center itmes-center w-[100%] h-[55vh]  bg-primary`}>
          <div className='px-10'>
            <MyStyledText language={i18n.language} textType={'h1'} text={"Specialized Cleaning Services"} textStyle={' text-center text-[38px] text-secondary py-4'}/>
            <MyStyledText language={i18n.language} textType={'h1'} text={"We provide a specialized cleaning services program for various facilities, residential complexes, educational facilities and the health and commercial facilities, where these services are provided by a professional team that uses the latest equipment and devices The provided services: "} textStyle={' text-center text-[20px] text-[gray] leading-8  font-thin'}/>
            {/* <MyStyledText language={i18n.language} textType={'h1'} text={"provided services:"} textStyle={' text-center text-[24px] text-[gray] leading-8  font-thin'}/> */}
          </div>

          <div className={`flex justify-start itmes-start w-full`}>
            <ul className="list-disc list-inside pt-4 "> 
              
              <MyStyledText language={i18n.language} textType={'h1'} text={"Cleaning apartments, villas and corporate office."} textStyle={'list-item text-[22px]  text-secondary'}/>
              
              <MyStyledText language={i18n.language} textType={'h1'} text={"Wooden floor cleaning."} textStyle={'list-item text-[22px]  text-secondary'}/>
              
              <MyStyledText language={i18n.language} textType={'h1'} text={"Marble and ceramics cleaning."} textStyle={'list-item text-[22px]  text-secondary'}/>
              <MyStyledText language={i18n.language} textType={'h1'} text={"Windows, Kitchens, bathrooms, walls and ceilings cleaning."} textStyle={'list-item text-[22px]  text-secondary'}/>
              <MyStyledText language={i18n.language} textType={'h1'} text={"Cleaning and sterilization of water tanks."} textStyle={'list-item text-[22px]  text-secondary'}/>
              <MyStyledText language={i18n.language} textType={'h1'} text={"Post-construction and restoration cleaning."} textStyle={'list-item text-[22px]  text-secondary'}/>
             
            </ul>
          </div>
        </div>
        <div className=" bottom-0 w-full"><Footer /></div>
    </div>
  )
}

export default CleaningServicesPage

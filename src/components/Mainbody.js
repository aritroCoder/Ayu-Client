import React from 'react'
import CardItem from './CardItem';
import bg from '../Assets/img/bg.jpg'
import FadeInWhenVisible from './FadeInWhenVisible';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const data = [
    {
        title: 'Dentistry',
        img: require('../Assets/img/Teams/specializations/Dentistry.jpg'),
        text: 'Dentistry, also known as dental medicine and oral medicine, is a branch of medicine that consists of the study, diagnosis, prevention, and treatment of diseases, disorders, and conditions of the oral cavity (the mouth).'
    },
    {
        title: 'Dermatology',
        img: require('../Assets/img/Teams/specializations/Dermatology.png'),
        text: 'Dermatology is the branch of medicine dealing with the skin. It is a speciality with both medical and surgical aspects. A dermatologist is a specialist medical doctor who manages diseases related to skin, hair, nails, and some cosmetic problems.'
    },
    {
        title: 'Endocrinology',
        img: require('../Assets/img/Teams/specializations/Endocrinology.jpg'),
        text: 'Endocrinology is a branch of biology and medicine dealing with the endocrine system, its diseases, and its specific secretions known as hormones.'
    },
    {
        title: 'ENT',
        img: require('../Assets/img/Teams/specializations/ENT.jpg'),
        text: 'Ear, nose, and throat (ENT) is a surgical subspecialty within medicine that deals with the surgical and medical management of conditions of the head and neck. Patients seek treatment for diseases of the ear, nose, throat, base of the skull, head, and neck.'
    },
    {
        title: 'Gastroentereology',
        img: require('../Assets/img/Teams/specializations/Gastroenterology.jpg'),
        text: 'Gastroenterology is the branch of medicine focused on the digestive system and its disorders.'
    },
    {
        title: 'General',
        img: require('../Assets/img/Teams/specializations/General.jpg'),
        text: 'A general practitioner manages types of illness that present in an undifferentiated way at an early stage of development, which may require urgent intervention. The holistic approach of general practice aims to take into consideration the biological, psychological, and social factors relevant to the care of each patient\'s illness.'
    },
    {
        title: 'Gynaecology',
        img: require('../Assets/img/Teams/specializations/Gyenecology.jpg'),
        text: 'Gynaecology is the medical practice dealing with the health of the female reproductive system.'
    },
    {
        title: 'Hematology',
        img: require('../Assets/img/Teams/specializations/Hematology.jpg'),
        text: 'Hematology is the branch of medicine concerned with the study of the cause, prognosis, treatment, and prevention of diseases related to blood. Such diseases might include hemophilia, blood clots (thrombus), other bleeding disorders, and blood cancers such as leukemia, multiple myeloma, and lymphoma.'
    },
    {
        title: 'Hepatology',
        img: require('../Assets/img/Teams/specializations/Hepatology.jpg'),
        text: 'Hepatology is the branch of medicine that incorporates the study of liver, gallbladder, biliary tree, and pancreas as well as management of their disorders. Although traditionally considered a sub-specialty of gastroenterology, rapid expansion has led in some countries to doctors specializing solely on this area, who are called hepatologists.'
    },
    {
        title: 'Nephrology',
        img: require('../Assets/img/Teams/specializations/Nephrology.jpg'),
        text: 'Nephrology is a specialty that concerns the study of the kidneys, specifically normal kidney function and kidney disease, the preservation of kidney health, and the treatment of kidney disease, from diet and medication to renal replacement therapy (dialysis and kidney transplantation)'
    },
    {
        title: 'Oncology',
        img: require('../Assets/img/Teams/specializations/Oncology.jpg'),
        text: 'Oncology is a branch of medicine that deals with the prevention, diagnosis, and treatment of cancer. A medical professional who practices oncology is an oncologist.'
    },
    {
        title: 'Opthalmology',
        img: require('../Assets/img/Teams/specializations/Opthalmology.jpg'),
        text: 'Ophthalmology is a branch of medicine that deals with the diagnosis and treatment of eye disorders.[2] An ophthalmologist is a physician who specializes in eye care.'
    },
    {
        title: 'Orthopaedics',
        img: require('../Assets/img/Teams/specializations/Orthopedics.jpg'),
        text: 'Orthopedic surgery or orthopedics, is the branch of surgery concerned with conditions involving the musculoskeletal system. Orthopedic surgeons use both surgical and nonsurgical means to treat musculoskeletal trauma, spine diseases, sports injuries, degenerative diseases, infections, tumors, and congenital disorders.'
    },
    {
        title: 'Pediatric',
        img: require('../Assets/img/Teams/specializations/Pediatric.jpg'),
        text: 'Paediatrics (also spelled pediatrics or pædiatrics) is the branch of medicine that involves the medical care of infants, children, and adolescents. The American Academy of Pediatrics recommends people seek pediatric care through the age of 21.'
    },
    {
        title: 'Psychiatry',
        img: require('../Assets/img/Teams/specializations/Psychiatry.png'),
        text: 'Psychiatry is the medical specialty devoted to the diagnosis, prevention, and treatment of mental disorders. These include various maladaptations related to mood, behaviour, cognition, and perceptions.'
    },
    {
        title: 'Spine',
        img: require('../Assets/img/Teams/specializations/Spine.jpg'),
        text: 'The vertebral column, also known as the backbone or spine, is part of the axial skeleton. The vertebral column is the defining characteristic of a vertebrate in which the notochord (a flexible rod of uniform composition) found in all chordates has been replaced by a segmented series of bone: vertebrae separated by intervertebral discs.'
    },
    {
        title: 'Urology',
        img: require('../Assets/img/Teams/specializations/Urology.jpg'),
        text: 'Urology, is the branch of medicine that focuses on diseases of the male and female urinary-tract system and the male reproductive organs. Organs under the domain of urology include the kidneys, adrenal glands, ureters, urinary bladder, urethra, and the male reproductive organs.'
    },
]

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

const mainbody = () => {
    return (
        <div style={{ backgroundImage: `url(${bg})` }}>
            <FadeInWhenVisible>
                <div style={{ height: '200px' }}></div>
                <h3 style={{ textAlign: 'center', fontSize: '45px', padding: '20px 0' }}>World class treatment. Available completely online</h3>

                <Carousel responsive={responsive} infinite= {true} ssr={true} showDots={true} itemClass="carousel-item-padding-40-px" autoPlay={false} autoPlaySpeed={1000000}>
                    {data.map(specialization => {
                        return (
                            <CardItem title={specialization.title} img={specialization.img} text={specialization.text} key={specialization}/>
                        )
                    })}
                </Carousel>
                <div style={{ height: '200px' }}></div>
            </FadeInWhenVisible>
        </div>
    )
}

export default mainbody
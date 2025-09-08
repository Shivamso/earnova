import { NextResponse } from "next/server";

const avatarList = [
    {
        image: "/images/avatar/avatar_1.jpg",
        title: "Sarah Johnson"
    },
    {
        image: "/images/avatar/avatar_2.jpg",
        title: "Olivia Miller"
    },
    {
        image: "/images/avatar/avatar_3.jpg",
        title: "Sophia Roberts"
    },
    {
        image: "/images/avatar/avatar_4.jpg",
        title: "Isabella Clark"
    },
];

const statsFactData = {
    number: '01',
    name: "Stats & Facts",
    heading: "Affordable IT solutions powered by freelancers.",
    description: "We connect businesses with skilled freelancers and students to deliver cost-effective, high-quality IT projects. Our model ensures innovation, learning, and growth for everyone involved.",
    scoreData: [
        {
            number: 20,
            numberValue: '+',
            scoreDescp: "Projects delivered across Tier 2 & 3 cities"
        },
        {
            number: 50,
            numberValue: '+',
            scoreDescp: "Freelancers & students gained real-world experience"
        },
        {
            number: 5,
            numberValue: '+',
            scoreDescp: "Industry experts mentoring and guiding projects"
        },
    ]
};


const servicesData = {
    number: '02',
    name: "Services",
    heading: "What we do",
    description: "We deliver affordable, scalable, and real-world IT solutions by connecting businesses with talented freelancers, students, and experts. Our focus is on empowering growth in Tier 2 & 3 cities.",
    data: [
        {
            id: 1,
            image: "/images/home/services/services_1.png",
            heading: "Custom Software Development",
            descp: "From ERPs to CRMs, we build scalable software tailored to your business needs with the help of freelancers and industry experts."
        },
        {
            id: 2,
            image: "/images/home/services/services_2.png",
            heading: "Web & App Solutions",
            descp: "We create responsive websites, e-commerce platforms, and mobile applications designed for performance and accessibility."
        },
        {
            id: 3,
            image: "/images/home/services/services_3.png",
            heading: "LMS & E-Learning Systems",
            descp: "We design and implement interactive Learning Management Systems that make education more accessible and engaging."
        },
        {
            id: 4,
            image: "/images/home/services/services_4.png",
            heading: "Hospital Management Systems",
            descp: "Affordable, secure, and efficient digital solutions for hospitals and clinics to improve patient care and streamline operations."
        },
    ]
};


const testimonialData = {
    data_1: {
        preTitle: "Hear from them",
        title: "Our website redesign was flawless. They understood our vision perfectly!",
        author: "Ajay Singh",
        company: "Dhammaland"
    },
    data_2: {
        preTitle: "Hear from them",
        title: "From concept to execution, they delivered outstanding results. Highly recommend their expertise!",
        author: "Ajay Chauhan",
        company: "Kashyap Foundation"
    },
    data_3: {
        preTitle: "Hear from them",
        title: "Super smooth process with incredible results. highly recommend!",
        author: "Debanjan Das",
        company: "LMS for Coaching Institute"
    },
data_4: {
    // preTitle: "Message from the CEO",
    title: "At Earnova, freelancers build with passion, we reward with incentives, and customers win with affordable IT products.",
    author: "Shivam Singh",
    company: "CEO, Earnova"
}

};

const teamData = {
    number: '06',
    data: [
        {
            image: "/images/home/team/shivam.jpg",
            name: "Shivam Singh",
            position: "CEO",
            socialLinks: [
                // {
                //     icon: "/images/socialIcon/twitter.svg",
                //     link: "https://twitter.com"
                // },
                // {
                //     icon: "/images/socialIcon/Be.svg",
                //     link: "https://www.behance.net/"
                // },
                {
                    icon: "/images/socialIcon/linkedin.svg",
                    link: "https://www.linkedin.com/in/shivam-singh-223658372?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                }
            ]
        },
        {
            image: "/images/home/team/hrith.jpg",
            name: "Hrith Kumar Das",
            position: "Operations Lead",
            socialLinks: [
                // {
                //     icon: "/images/socialIcon/twitter.svg",
                //     link: "https://twitter.com"
                // },
                // {
                //     icon: "/images/socialIcon/Be.svg",
                //     link: "https://www.behance.net/"
                // },
                {
                    icon: "/images/socialIcon/linkedin.svg",
                    link: "https://www.linkedin.com/in/hrith-das-777a2031b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                }
            ]
        },
        {
            image: "/images/home/team/kumud.JPEG",
            name: "Kumud Garg",
            position: "Marketing Genius",
            socialLinks: [
                // {
                //     icon: "/images/socialIcon/twitter.svg",
                //     link: "https://twitter.com"
                // },
                // {
                //     icon: "/images/socialIcon/Be.svg",
                //     link: "https://www.behance.net/"
                // },
                {
                    icon: "/images/socialIcon/linkedin.svg",
                    link: "https://www.linkedin.com/in/kumud-garg-7895ab311?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                }
            ]
        },
        {
            image: "/images/home/team/vanshika.jpg",
            name: "Vanshika Agarwal",
            position: "Finance Head",
            socialLinks: [
                // {
                //     icon: "/images/socialIcon/twitter.svg",
                //     link: "https://twitter.com"
                // },
                // {
                //     icon: "/images/socialIcon/Be.svg",
                //     link: "https://www.behance.net/"
                // },
                {
                    icon: "/images/socialIcon/linkedin.svg",
                    link: "https://www.linkedin.com/in/vanshika-agarwal-a0232027b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                }
            ]
        },
         {
            image: "/images/home/team/satyam.jpg",
            name: "Satyam Singh",
            position: "Customer Relationship Manager",
            socialLinks: [
                // {
                //     icon: "/images/socialIcon/twitter.svg",
                //     link: "https://twitter.com"
                // },
                // {
                //     icon: "/images/socialIcon/Be.svg",
                //     link: "https://www.behance.net/"
                // },
                {
                    icon: "/images/socialIcon/linkedin.svg",
                    link: "https://www.linkedin.com/in/satyam-singh-rajput-5aa873239?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                }
            ]
        },
    ]
};

const pricingData = {
    data: [
        {
            planName: "Launch",
            // planPrice: "$699",
            planDescp: "Ideal for startups and small businesses taking their first steps online.",
            planIncludes: ["Competitive research & insights","Wireframing and prototyping","Basic tracking setup (Google Analytics, etc.)","Standard contact form integration"]
        },
        {
            planName: "Scale",
            tag: "Most popular",
            // planPrice: "$1,699",
            // cancelPrice: "$2,199",
            planDescp: "Perfect for growing brands needing more customization and flexibility.",
            planIncludes: ["Everything in the Launch Plan","Custom design for up to 10 pages","Seamless social media integration","SEO enhancements for key pages"]
        },
        {
            planName: "Elevate",
            // planPrice: "$3,499",
            planDescp: "Best suited for established businesses wanting a fully tailored experience.",
            planIncludes: ["Everything in the Scale Plan","E-commerce functionality (if needed)","Branded email template design","Priority support for six months after launch"]
        },
    ],
    partnerLogo: [
        { light: "/images/home/pricing/partner-1.svg", dark: "/images/home/pricing/partner-dark-1.svg" },
        { light: "/images/home/pricing/partner-2.svg", dark: "/images/home/pricing/partner-dark-2.svg" },
        { light: "/images/home/pricing/partner-3.svg", dark: "/images/home/pricing/partner-dark-3.svg" },
        { light: "/images/home/pricing/partner-4.svg", dark: "/images/home/pricing/partner-dark-4.svg" },
        { light: "/images/home/pricing/partner-5.svg", dark: "/images/home/pricing/partner-dark-5.svg" },
      ],
};

const faqData = {
    data: [
        {
            faq_que: "What services does Earnova offer?",
            faq_ans: "We provide affordable IT solutions including custom software development, web & app development, LMS platforms, and hospital management systems. All projects are powered by skilled freelancers and guided by industry experts."
        },
        {
            faq_que: "How long does a typical project take?",
            faq_ans: "Timelines depend on the complexity of the project. Small tasks may take a few days, while larger systems can range from 4–12 weeks. Since we divide work into small, manageable segments, delivery is faster and more flexible."
        },
        {
            faq_que: "Do you offer custom solutions or templates?",
            faq_ans: "We specialize in building tailored solutions for each client. While we use efficient frameworks to save costs, every project is customized to meet your specific business needs."
        },
        {
            faq_que: "What’s the cost of a project?",
            faq_ans: "Our pricing is highly affordable compared to traditional IT firms, especially for businesses in Tier 2 & 3 cities. Costs vary by project scope, and we maintain transparency by breaking down expenses per task completed."
        },
        {
            faq_que: "Do you provide ongoing support after project completion?",
            faq_ans: "Yes. We offer post-launch support, maintenance packages, and upgrades. Clients can also request dedicated freelance support for regular updates and long-term improvements."
        },
        {
            faq_que: "How is Earnova different from traditional IT companies?",
            faq_ans: "Unlike traditional agencies, Earnova uses a freelance-based model. Freelancers (including students) complete tasks, earn payments, and gain certificates, while clients receive cost-effective solutions with expert oversight."
        }
    ]
};

const contactData = {
    keypoint:["Always-On Customer Support","Service Across the Globe"],
    managerProfile:{
        image:"/images/avatar/avatar_1.jpg",
        name:"Courtney Henry",
        position:"Onboarding & Success Manager"
    }
}

const aboutusStats = [
    {
        number: 25,
        postfix:"+",
        title: 'Active freelance professionals',
        descp: "Skilled freelancers and students contributing to real-world IT projects under expert guidance."
    },
    {
        number: 10,
        postfix:"+",
        title: 'Industries we serve',
        descp: "From education and healthcare to retail and startups, we deliver solutions tailored to diverse sectors."
    },
    {
        number: 50,
        postfix:"+",
        title: 'Successful client projects',
        descp: "Affordable, high-quality IT solutions delivered across tier 2 & 3 cities, with growing global reach."
    },
   
];


const servicesSliderData = [
    "Branding", "Web development", "Agency","Content creation","SaaS","Motion & 3d modeling","Photography"
]



export const GET = async () => {
    return NextResponse.json({
        avatarList,
        statsFactData,
        servicesData,
        testimonialData,
        teamData,
        pricingData,
        faqData,
        contactData,
        aboutusStats,
        // servicesSliderData
    });
};
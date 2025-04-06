import logo from './Logo.png'
import cross_icon from './cross_icon.png'
import menu_icon from './menu-black.png'
import serach_icon from './search.png'
import star_icon from './star_icon.svg'
import arrow_icon from './arrow_icon.svg'
import info_icon from './info_icon.svg'
import header1_img from './header1.png'
import about_img from './about.jpg'
import profile_pic from './profile_pic.png'
import dropdown_icon from './dropdown_icon.svg'
// import header2 from './header2.jpg'
import m1 from './m1.jpg'
import m2 from './m2.jpg'
import m3 from './m3.jpg'
import m4 from './m4.jpg'
import m5 from './m5.jpeg'

import mess1 from './mess1.jpg'
import mess2 from './mess2.jpg'
import mess3 from './mess3.jpg'
import mess4 from './mess4.jpg'
import mess5 from './mess5.jpg'
import mess6 from './mess6.jpg'
import mess7 from './mess7.jpg'
import mess8 from './mess8.jpg'
import mess9 from './mess9.jpg'
import mess10 from './mess10.jpg'
import mess11 from './mess11.jpg'
import mess12 from './mess12.jpg'
import mess13 from './mess13.jpg'
import mess14 from './mess14.jpg'
import mess15 from './mess15.jpg'
import right_arrow from './right_arrow.svg'
import heart_img from './heart.png'
import shopping_cart from './shopping-cart.png'
import favorite_img from './favorite.png'
import logo_sm from './logo-sm.png'
import profile_img_1 from './profile_img_1.png'
import profile_img_2 from './profile_img_2.png'
import profile_img_3 from './profile_img_3.png'
import app_store from './app_store.png'
import play_store from './play_store.png'
import star from './Star 1.png'


export const assets = {
    header1_img,
    about_img,
    logo,
    cross_icon,
    menu_icon,
    serach_icon,
    star_icon,
    arrow_icon,
    info_icon,
    dropdown_icon,
    profile_pic,
    m1,
    m2,
    m3,
    m4,
    m5,
    right_arrow,
    heart_img,
    favorite_img,
    shopping_cart,
    logo_sm,
    app_store,
    play_store,
    star
}


export const testimonialsData = [
    {
        name: "Donald Jackman",
        title: "Marketing Manager",
        image: profile_img_1,
        alt: "Portrait of Donald Jackman",
        rating: 5,
        text: "From the very first meeting, they understood my vision and helped me find the perfect property. Their attention to detail and commitment to client satisfaction is unmatched."
    },
    {
        name: "Richard Nelson",
        title: "UI/UX Designer",
        image: profile_img_2,
        alt: "Portrait of Richard Nelson",
        rating: 4,
        text: "From the very first meeting, they understood my vision and helped me find the perfect property. Their attention to detail and commitment to client satisfaction is unmatched."
    },
    {
        name: "James Washington",
        title: "Co-Founder",
        image: profile_img_3,
        alt: "Portrait of James Washington",
        rating: 5,
        text: "From the very first meeting, they understood my vision and helped me find the perfect property. Their attention to detail and commitment to client satisfaction is unmatched."
    }
];

export const specialityData =[
    {   
        name: "Single Bed-Room",
        speciality: '1',
        image: m1
    },
    {   name: "Double Bed-Room",
        speciality: '2',
        image: m2
    },
    {   name: "Triple Bed-Room",
        speciality: '3',
        image: m3
    },
    {   name: "Quarter Bed-Room",
        speciality: '4',
        image: m4
    },
]

export const sellers = [
    {
        _id: 'mess1',
        name: 'Dr. Richard James',
        seller_img: profile_pic,
        experience: '15 years',
        messes_no: '15',
        mess_name: 'Puspakalaya',
        speciality: 'Single Bed-Room',
        beds: ["1","2","3","4"],
        image: mess1,
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 1050,
        price: {
            single: 1000,
            double: 2000,
            triple: 5000,
            quarter: 4098
        },
        contact: '1234567890',
        images: [
            mess1,
            mess3,
            mess4,
            mess5,
            ],
        address: {
            line1: 'iem',
            line2: 'Circle, Ring Road, London'
        },
        latitute: '22.7450891',
        longitute: '88.4529538'
    },
    {
        _id: 'mess2',
        name: 'Dr. Emily Larson',
        seller_img: profile_pic,
        experience: '15 years',
        messes_no: '15',
        mess_name: 'Hejheb',
        speciality: 'Double Bed-Room',
        beds: ["1","2","3","4"],
        image: mess2,
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 1050,
        price: {
            single: 1000,
            double: 2000,
            triple: 5000,
            quarter: 4098
        },
        contact: '1234567890',
        images: [
            mess1,
            mess3,
            mess4,
            mess5,
            ],
        address: {
            line1: 'brainware university',
            line2: 'Circle, Ring Road, London'
        },
        latitute: '22.7439073',
        longitute: '88.4543408'
    },
    {
        _id: 'mess3',
        name: 'Dr. Sarah Patel',
        seller_img: profile_pic,
        experience: '15 years',
        messes_no: '15',
        mess_name: 'Oyo',
        speciality: 'Single Bed-Room',
        beds: ["1","2","3","4"],
        image: mess3,
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 1050,
        price: {
            single: 1000,
            double: 2000,
            triple: 5000,
            quarter: 4098
        },
        contact: '1234567890',
        images: [
            mess1,
            mess3,
            mess4,
            mess5,
            ],
        address: {
            line1: '17th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        },
        latitute: '22.7439073',
        longitute: '88.4543408'
    },
    {
        _id: 'mess4',
        name: 'Dr. Richard James',
        seller_img: profile_pic,
        experience: '15 years',
        messes_no: '15',
        mess_name: 'Puspakalaya',
        speciality: 'Single Bed-Room',
        beds: ["1","2","3","4"],
        image: mess4,
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 1050,
        price: {
            single: 1000,
            double: 2000,
            triple: 5000,
            quarter: 4098
        },
        contact: '1234567890',
        images: [
            mess1,
            mess3,
            mess4,
            mess5,
            ],
        address: {
            line1: 'adamas university',
            line2: 'Circle, Ring Road, London'
        },
        latitute: '22.7439073',
        longitute: '88.4543408'
    },
    // {
    //     _id: 'mess5',
    //     name: 'Dr. Richard James',
    //     seller_img: profile_pic,
    //     experience: '15 years',
    //     messes_no: '15',
    //     mess_name: 'Puspakalaya',
    //     speciality: 'Single Bed-Room',
    //     image: mess5,
    //     about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
    //     fees: 1050,
    //     contact: '1234567890',
    //     images: {
    //         img1: mess1,
    //         img2: mess1,
    //         img3: mess1,
    //         img4: mess1,
    //     },
    //     address: {
    //         line1: '17th Cross, Richmond',
    //         line2: 'Circle, Ring Road, London'
    //     },
    //     latitute: '22.7439073',
    //     longitute: '88.4543408'
    // },
    // {
    //     _id: 'mess6',
    //     name: 'Dr. Richard James',
    //     seller_img: profile_pic,
    //     experience: '15 years',
    //     messes_no: '15',
    //     mess_name: 'Puspakalaya',
    //     speciality: 'Single Bed-Room',
    //     image: mess6,
    //     about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
    //     fees: 1050,
    //     contact: '1234567890',
    //     images: {
    //         img1: mess1,
    //         img2: mess1,
    //         img3: mess1,
    //         img4: mess1,
    //     },
    //     address: {
    //         line1: '17th Cross, Richmond',
    //         line2: 'Circle, Ring Road, London'
    //     },
    //     latitute: '22.7439073',
    //     longitute: '88.4543408'
    // },
    // {
    //     _id: 'mess7',
    //     name: 'Dr. Richard James',
    //     seller_img: profile_pic,
    //     experience: '15 years',
    //     messes_no: '15',
    //     mess_name: 'Puspakalaya',
    //     speciality: 'Single Bed-Room',
    //     image: mess7,
    //     about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
    //     fees: 1050,
    //     contact: '1234567890',
    //     images: {
    //         img1: mess1,
    //         img2: mess1,
    //         img3: mess1,
    //         img4: mess1,
    //     },
    //     address: {
    //         line1: '17th Cross, Richmond',
    //         line2: 'Circle, Ring Road, London'
    //     },
    //     latitute: '22.7439073',
    //     longitute: '88.4543408'
    // },
    // {
    //     _id: 'mess8',
    //     name: 'Dr. Richard James',
    //     seller_img: profile_pic,
    //     experience: '15 years',
    //     messes_no: '15',
    //     mess_name: 'Puspakalaya',
    //     speciality: 'Double Bed-Room',
    //     image: mess8,
    //     about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
    //     fees: 1050,
    //     contact: '1234567890',
    //     images: {
    //         img1: mess1,
    //         img2: mess1,
    //         img3: mess1,
    //         img4: mess1,
    //     },
    //     address: {
    //         line1: '17th Cross, Richmond',
    //         line2: 'Circle, Ring Road, London'
    //     },
    //     latitute: '22.7439073',
    //     longitute: '88.4543408'
    // },
    // {
    //     _id: 'mess9',
    //     name: 'Dr. Richard James',
    //     seller_img: profile_pic,
    //     experience: '15 years',
    //     messes_no: '15',
    //     mess_name: 'Puspakalaya',
    //     speciality: 'Triple Bed-Room',
    //     image: mess9,
    //     about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
    //     fees: 1050,
    //     contact: '1234567890',
    //     images: {
    //         img1: mess1,
    //         img2: mess1,
    //         img3: mess1,
    //         img4: mess1,
    //     },
    //     address: {
    //         line1: '17th Cross, Richmond',
    //         line2: 'Circle, Ring Road, London'
    //     },
    //     latitute: '22.7439073',
    //     longitute: '88.4543408'
    // },
    // {
    //     _id: 'mess10',
    //     name: 'Dr. Richard James',
    //     seller_img: profile_pic,
    //     experience: '15 years',
    //     messes_no: '15',
    //     mess_name: 'Puspakalaya',
    //     speciality: 'Multiple Bed-Room',
    //     image: mess10,
    //     about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
    //     fees: 1050,
    //     contact: '1234567890',
    //     images: {
    //         img1: mess1,
    //         img2: mess1,
    //         img3: mess1,
    //         img4: mess1,
    //     },
    //     address: {
    //         line1: '17th Cross, Richmond',
    //         line2: 'Circle, Ring Road, London'
    //     },
    //     latitute: '22.7439073',
    //     longitute: '88.4543408'
    // },
    // {
    //     _id: 'mess11',
    //     name: 'Dr. Richard James',
    //     seller_img: profile_pic,
    //     experience: '15 years',
    //     messes_no: '15',
    //     mess_name: 'Puspakalaya',
    //     speciality: 'Single Bed-Room',
    //     image: mess11,
    //     about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
    //     fees: 1050,
    //     contact: '1234567890',
    //     images: {
    //         img1: mess1,
    //         img2: mess1,
    //         img3: mess1,
    //         img4: mess1,
    //     },
    //     address: {
    //         line1: '17th Cross, Richmond',
    //         line2: 'Circle, Ring Road, London'
    //     },
    //     latitute: '22.7439073',
    //     longitute: '88.4543408'
    // },
    // {
    //     _id: 'mess12',
    //     name: 'Dr. Richard James',
    //     seller_img: profile_pic,
    //     experience: '15 years',
    //     messes_no: '15',
    //     mess_name: 'Puspakalaya',
    //     speciality: 'Double Bed-Room',
    //     image: mess12,
    //     about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
    //     fees: 1050,
    //     contact: '1234567890',
    //     images: {
    //         img1: mess1,
    //         img2: mess1,
    //         img3: mess1,
    //         img4: mess1,
    //     },
    //     address: {
    //         line1: '17th Cross, Richmond',
    //         line2: 'Circle, Ring Road, London'
    //     },
    //     latitute: '22.7439073',
    //     longitute: '88.4543408'
    // },
    // {
    //     _id: 'mess13',
    //     name: 'Dr. Richard James',
    //     seller_img: profile_pic,
    //     experience: '15 years',
    //     messes_no: '15',
    //     mess_name: 'Puspakalaya',
    //     speciality: 'Double Bed-Room',
    //     image: mess13,
    //     about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
    //     fees: 1050,
    //     contact: '1234567890',
    //     images: {
    //         img1: mess1,
    //         img2: mess1,
    //         img3: mess1,
    //         img4: mess1,
    //     },
    //     address: {
    //         line1: '17th Cross, Richmond',
    //         line2: 'Circle, Ring Road, London'
    //     },
    //     latitute: '22.7439073',
    //     longitute: '88.4543408'
    // },
    // {
    //     _id: 'mess14',
    //     name: 'Dr. Richard James',
    //     seller_img: profile_pic,
    //     experience: '15 years',
    //     messes_no: '15',
    //     mess_name: 'Puspakalaya',
    //     speciality: 'Triple Bed-Room',
    //     image: mess14,
    //     about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
    //     fees: 1050,
    //     contact: '1234567890',
    //     images: {
    //         img1: mess1,
    //         img2: mess1,
    //         img3: mess1,
    //         img4: mess1,
    //     },
    //     address: {
    //         line1: '17th Cross, Richmond',
    //         line2: 'Circle, Ring Road, London'
    //     },
    //     latitute: '22.7439073',
    //     longitute: '88.4543408'
    // },
    // {
    //     _id: 'mess15',
    //     name: 'Dr. Richard James',
    //     seller_img: profile_pic,
    //     experience: '15 years',
    //     messes_no: '15',
    //     mess_name: 'Puspakalaya',
    //     speciality: 'Single Bed-Room',
    //     image: mess15,
    //     about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
    //     fees: 1050,
    //     contact: '1234567890',
    //     images: {
    //         img1: mess1,
    //         img2: mess1,
    //         img3: mess1,
    //         img4: mess1,
    //     },
    //     address: {
    //         line1: '17th Cross, Richmond',
    //         line2: 'Circle, Ring Road, London'
    //     },
    //     latitute: '22.7439073',
    //     longitute: '88.4543408'
    // },

]
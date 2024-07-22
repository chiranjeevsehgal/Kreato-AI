import { BookAIcon, BookCopy, BookImageIcon, BookTemplate, BookUpIcon, BookUserIcon, FileClock, HelpingHand, Home, LayoutTemplate, LayoutTemplateIcon, Settings, WalletCards } from "lucide-react";

export const navLinks = [
    {
      label: "Home",
      route: "/dashboard",
      icon: Home,
    },
    {
      label: "History",
      route: "/dashboard/history",
      icon: FileClock,
    },
    {
      label: "Subscription",
      route: "/dashboard/subscription",
      icon: WalletCards,
    },
    {
      label: "Settings",
      route: "/dashboard/settings",
      icon: Settings,
    },
    
  ];

  export const Features = [
    {
      label: "20+ templates",
      icon: LayoutTemplateIcon,
      desc: "Access over 20 diverse AI-generated content templates to enhance creativity and productivity.",
    },
    {
      label: "Seamless Copying",
      icon: BookCopy,
      desc: "Effortlessly create polished content with our Easy Copy feature, streamlining the content creation process.",

    },
    {
      label: "Free Features",
      icon: BookUserIcon,
      desc: "Enjoy a selection of powerful features at no cost, designed to boost your content creation experience.",
    },
    {
      label: "24/7 Support",
      icon: HelpingHand,
      desc: "Get round-the-clock support to assist with any issues or questions, ensuring you always have help when you need it.",
    },
  ]

 
  export const plans = [
    {
      _id: 1,
      name: "Free",
      icon: "/free-plan.svg",
      // price: 0,
      credits: "Free",
      inclusions: [
        {
          label: Intl.NumberFormat('en-US').format(10000) +" Credits",
          isIncluded: true,
        },
        {
          label: "Basic Access to Services",
          isIncluded: true,
        },
        {
          label: "Priority Customer Support",
          isIncluded: false,
        },
        {
          label: "Priority Updates",
          isIncluded: false,
        },
      ],
    },
    {
      _id: 2,
      name: "Gold Plan",
      icon: "/free-plan.svg",
      // price: 40,
      credits:'₹ 199 / Month',
      // credits:'₹ 199',
      inclusions: [
        {
          label: Intl.NumberFormat('en-US').format(100000) +" Credits",
          isIncluded: true,
        },
        {
          label: "Full Access to Services",
          isIncluded: true,
        },
        {
          label: "Priority Customer Support",
          isIncluded: true,
        },
        {
          label: "Priority Updates",
          isIncluded: true,
        },
      ],
    },
    // {
    //   _id: 3,
    //   name: "Premium Package",
    //   icon: "/free-plan.svg",
    //   price: 199,
    //   credits: '199$ / Month',
    //   inclusions: [
    //     {
    //       label: Intl.NumberFormat('en-US').format(1000000) +" Credits",
    //       isIncluded: true,
    //     },
    //     {
    //       label: "Full Access to Services",
    //       isIncluded: true,
    //     },
    //     {
    //       label: "Priority Customer Support",
    //       isIncluded: true,
    //     },
    //     {
    //       label: "Priority Updates",
    //       isIncluded: true,
    //     },
    //   ],
    // },
 
  ];
  
import {
  HighlightAltOutlined,
  ContactsOutlined,
  ShareOutlined,
  ConnectWithoutContactOutlined,
  AttachMoneyOutlined,
  CheckOutlined,
  AlternateEmail,
  LocationOnOutlined,
  PhoneAndroidOutlined,
} from "../mui-icons";

import { member1, member2, member3, member4 } from "../assets/images/members";

export const legalServices = [
  {
    title: "الصياغة القانونية",
    elements: ["العقود", "الاشتراطات", "السياسات", "المذكرات"],
  },
  {
    title: "استشارات قانونية",
    elements: ["التوصيات", "البحوث", "الدراسات"],
  },
  {
    title: "تمثيل قانوني",
    elements: ["المرافعة", "الاعتراضات", "المطالبات"],
  },
  {
    title: "التحكيم القضائي",
    elements: ["العضوية", "الرئاسة", "الصلح"],
  },
  {
    title: "أخرى",
    elements: ["كل ما يتعلق بالجوانب القانونية"],
  },
];

export const financialServices = [
  {
    title: "الدراسات المالية",
    elements: [],
  },
  {
    title: "إعداد القوائم المالية",
    elements: [],
  },
  {
    title: "المراجعات",
    elements: [],
  },
];
export const administrativeServices = [
  {
    title: "التخطيط",
    elements: ["الخطط الاستراتيجية", "الخطط البديلة", "الخطط التطويرية"],
  },
  {
    title: "الدراسات",
    elements: ["دراسات الجدوى", "دراسات السوق", "بحوث ادارية"],
  },
  {
    title: "قطاع الشركات",
    elements: [
      "تأسيس الشركات",
      "تحويل الشركات",
      "الحوكمة",
      "تأهيل الشركات لدخول سوق المال",
    ],
  },
  {
    title: "تطوير الأعمال",
    elements: ["التطوير النوعي والكمي والتوسع"],
  },
  {
    title: "ادارة المخاطر",
    elements: ["جدولة الاجراءات لمرحلة الخطر"],
  },
  {
    title: "أخرى",
    elements: ["كل ما يتعلق بالمشروع من حلول وابتكارات"],
  },
];

export const orderServiceList = [
  {
    id: 1,
    title: "الضغط على زر طلب خدمة",
    description: "سيتم تحويلك إلى محادثة واتساب مع منسق المنصة",
    icon: <HighlightAltOutlined />,
  },
  {
    id: 2,
    title: "تزويد منسق المنصة بالمعلومات الشخصية ونوع وتفاصيل الخدمة",
    description:
      "يتم الاتفاق على الأتعاب مع المنسق ويقوم منسق المنصة بتسليمك العقد لتوقيعه الكرتونياً",
    icon: <ContactsOutlined />,
  },
  {
    id: 3,
    title: "يُرسل المنسق تفاصيل خدمتك عبر شبكة شركاؤه",
    description: "يوافق أحد المحامين على الخدمة المرادة",
    icon: <ShareOutlined />,
  },
  {
    id: 4,
    title: "دفع الأتعاب",
    description:
      "بمجرد موافقة أحد المحامين على الخدمة المطلوبة يتم التواصل من قبل المنسق لتأكيد عملية الدفع",
    icon: <AttachMoneyOutlined />,
  },
  {
    id: 5,
    title: "فتح باب تواصل مباشر بينك وبين المستشار",
    description:
      "يقوم المحامي بالتواصل مباشرة معك لمناقشة الخدمة بالتفصيل وبدء العمل",
    icon: <ConnectWithoutContactOutlined />,
  },
  {
    id: 6,
    title: "استلام الخدمة المطلوبة",
    description: "استلام الخدمة المطلوبة من المستشار باعتماد المنصة",
    icon: <CheckOutlined />,
  },
];

export const teams = [
  {
    img: member1,
    name: "منير سعيد",
    jobTitle: "الموارد البشرية",
  },
  {
    img: member2,
    name: "سامي أحمد",
    jobTitle: "مدير الفريق القانوني",
  },
  {
    img: member3,
    name: "سعد الدين",
    jobTitle: "سوشيال ميديا",
  },
  {
    img: member4,
    name: "احمد سعيد",
    jobTitle: "المدير العام",
  },
];

export const contactInfo = [
  {
    title: "عنواننا",
    list: [
      {
        text: "جدة. حي الأميرة. شارع الملك فهد",
        icon: <LocationOnOutlined />,
      },
    ],
  },
  {
    title: "أرقامنا",
    list: [
      {
        text: "+966 584957485",
        icon: <PhoneAndroidOutlined />,
      },
      {
        text: "+966 472948957",
        icon: <PhoneAndroidOutlined />,
      },
    ],
  },
  {
    title: "بريدنا الإلكتروني",
    list: [
      {
        text: "alma.lawson@example.com",
        icon: <AlternateEmail />,
      },
    ],
  },
];

export const addresses = [
  {
    position: [24.488542716258628, 39.64612451104432],
    value: 1,
    location: "المدينه, حي العريض",
    phone: "0553300367 966+",
  },
  {
    position: [24.759563116818377, 46.66356988895567],
    value: 2,
    location: "الرياض, حي المروج",
    phone: "0505909695 966+",
  },
];

import Layout from "@/components/Layout";
import Sidebar from "@/components/Sidebar";
import Card1 from "@/components/main/Card1";
import Card2 from "@/components/main/Card2";
import Card3 from "@/components/main/Card3";
import Header from "@/components/main/Header";

const data = [
  {
    icon: "/images/google.jpg",
    heading: "Google Workspace ",
    secondIcon: "/images/people_group.svg",
    desc: "Setup Google Workspace with one-click to work flawlessly with Forescribe",
  },
  {
    icon: "/images/office.jpg",
    heading: "Office 365",
    secondIcon: "/images/people_group.svg",
    desc: "Setup Google Workspace with one-click to work flawlessly with Forescribe",
  },
]

const account = [
  {
    icon: "/images/xero.jpg",
    heading: "Xero",
    secondIcon: "/images/people_group.svg",
    desc: "Gather actionable information for every known Application that persists in your books",
    color:"#13B5EA"
  },
  {
    icon: "/images/qb.png",
    heading: "Quickbooks",
    secondIcon: "/images/people_group.svg",
    desc: "Organize your App spend and gather actionable insights to make informed decisions",
    color:"#24A205"
  },
  {
    icon: "/images/csv.jpg",
    heading: "CSV",
    secondIcon: "/images/people_group.svg",
    desc: "Manually upload your transaction data every month and stay aware of your App spend and usage",
    color:"#E1F0F1"
  },
]

const Engagement = [
  {
    icon: "/images/zoom.jpg",
    heading: "Zoom",
    desc: "Gather actionable insights off Zoom and stay aware of its user engagement and analyse spend",
    color:"#518EF7"
  },
  {
    icon: "/images/slack.jpg",
    heading: "Slack",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    color:"#541855"
  },
  {
    icon: "/images/jira.jpg",
    heading: "Jira",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    color:"#518EF7"
  },
]

export default function Home() {
  return (
    <>
      <Layout>
        <Header />
        <div className="pl-[220px] w-full relative h-full">
          <p className=" mt-[30px] text-[28px] font-[600] text-[#19154E]">
            Integrations
          </p>
          <p className="text-[1rem] text-[#3F4C5A] font-[400] ">
            Missing your favorite Integration? You can request one{" "}
            <span className="text-blue-500">here</span>.
          </p>
          <div className="mt-[45px] font-[500] text-[20px]  text-[#19154E] flex gap-[10px] items-center ">
            Identity and Single Sign On{" "}
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
              >
                <g clip-path="url(#clip0_1_724)">
                  <path
                    d="M9 18C6.61305 18 4.32387 17.0518 2.63604 15.364C0.948211 13.6761 0 11.3869 0 9C0 6.61305 0.948211 4.32387 2.63604 2.63604C4.32387 0.948211 6.61305 0 9 0C11.3869 0 13.6761 0.948211 15.364 2.63604C17.0518 4.32387 18 6.61305 18 9C18 11.3869 17.0518 13.6761 15.364 15.364C13.6761 17.0518 11.3869 18 9 18ZM10.8 6.3C10.8 6.552 10.611 7.02 10.422 7.2L9 8.622C8.487 9.144 8.1 10.062 8.1 10.8V11.7H9.9V10.8C9.9 10.539 10.089 10.08 10.278 9.9L11.7 8.478C12.213 7.956 12.6 7.038 12.6 6.3C12.6 5.34522 12.2207 4.42955 11.5456 3.75442C10.8705 3.07928 9.95478 2.7 9 2.7C8.04522 2.7 7.12955 3.07928 6.45442 3.75442C5.77928 4.42955 5.4 5.34522 5.4 6.3H7.2C7.2 5.82261 7.38964 5.36477 7.72721 5.02721C8.06477 4.68964 8.52261 4.5 9 4.5C9.47739 4.5 9.93523 4.68964 10.2728 5.02721C10.6104 5.36477 10.8 5.82261 10.8 6.3ZM8.1 13.5V15.3H9.9V13.5H8.1Z"
                    fill="#3F4C5A"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1_724">
                    <rect width="18" height="18" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>{" "}
          </div>
          <div>
            {data.map((item, index) => {
              return (
                <Card1
                  key={index}
                  icon={item.icon}
                  heading={item.heading}
                  desc={item.desc}
                  secondIcon={item.secondIcon}
                />
              );
            })}
          </div>
          {/* second div */}
          <div className="mt-[45px] font-[500] text-[20px]  text-[#19154E] flex gap-[10px] items-center ">
          Accounting{" "}
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
              >
                <g clip-path="url(#clip0_1_724)">
                  <path
                    d="M9 18C6.61305 18 4.32387 17.0518 2.63604 15.364C0.948211 13.6761 0 11.3869 0 9C0 6.61305 0.948211 4.32387 2.63604 2.63604C4.32387 0.948211 6.61305 0 9 0C11.3869 0 13.6761 0.948211 15.364 2.63604C17.0518 4.32387 18 6.61305 18 9C18 11.3869 17.0518 13.6761 15.364 15.364C13.6761 17.0518 11.3869 18 9 18ZM10.8 6.3C10.8 6.552 10.611 7.02 10.422 7.2L9 8.622C8.487 9.144 8.1 10.062 8.1 10.8V11.7H9.9V10.8C9.9 10.539 10.089 10.08 10.278 9.9L11.7 8.478C12.213 7.956 12.6 7.038 12.6 6.3C12.6 5.34522 12.2207 4.42955 11.5456 3.75442C10.8705 3.07928 9.95478 2.7 9 2.7C8.04522 2.7 7.12955 3.07928 6.45442 3.75442C5.77928 4.42955 5.4 5.34522 5.4 6.3H7.2C7.2 5.82261 7.38964 5.36477 7.72721 5.02721C8.06477 4.68964 8.52261 4.5 9 4.5C9.47739 4.5 9.93523 4.68964 10.2728 5.02721C10.6104 5.36477 10.8 5.82261 10.8 6.3ZM8.1 13.5V15.3H9.9V13.5H8.1Z"
                    fill="#3F4C5A"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1_724">
                    <rect width="18" height="18" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>{" "}
          </div>
          <div>
            {account.map((item, index) => {
              return (
                <Card2
           
                  key={index}
                  icon={item.icon}
                  heading={item.heading}
                  desc={item.desc}
                  secondIcon={item.secondIcon}
                  color={item.color}
                />
              );
            })}
          </div>
          {/* end */}
          <div className="mt-[45px] font-[500] text-[20px]  text-[#19154E] flex gap-[10px] items-center ">
          Engagement
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
              >
                <g clip-path="url(#clip0_1_724)">
                  <path
                    d="M9 18C6.61305 18 4.32387 17.0518 2.63604 15.364C0.948211 13.6761 0 11.3869 0 9C0 6.61305 0.948211 4.32387 2.63604 2.63604C4.32387 0.948211 6.61305 0 9 0C11.3869 0 13.6761 0.948211 15.364 2.63604C17.0518 4.32387 18 6.61305 18 9C18 11.3869 17.0518 13.6761 15.364 15.364C13.6761 17.0518 11.3869 18 9 18ZM10.8 6.3C10.8 6.552 10.611 7.02 10.422 7.2L9 8.622C8.487 9.144 8.1 10.062 8.1 10.8V11.7H9.9V10.8C9.9 10.539 10.089 10.08 10.278 9.9L11.7 8.478C12.213 7.956 12.6 7.038 12.6 6.3C12.6 5.34522 12.2207 4.42955 11.5456 3.75442C10.8705 3.07928 9.95478 2.7 9 2.7C8.04522 2.7 7.12955 3.07928 6.45442 3.75442C5.77928 4.42955 5.4 5.34522 5.4 6.3H7.2C7.2 5.82261 7.38964 5.36477 7.72721 5.02721C8.06477 4.68964 8.52261 4.5 9 4.5C9.47739 4.5 9.93523 4.68964 10.2728 5.02721C10.6104 5.36477 10.8 5.82261 10.8 6.3ZM8.1 13.5V15.3H9.9V13.5H8.1Z"
                    fill="#3F4C5A"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1_724">
                    <rect width="18" height="18" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>{" "}
            </div>
              {/*  third card  */}
             <div className="pb-[100px]">
              {
                Engagement.map((item, index)=>{
                  return (<Card3  key={index}
                    icon={item.icon}
                    heading={item.heading}
                    desc={item.desc}
                    secondIcon={item.secondIcon}
                    color={item.color} />)
                })
              }
             </div>
             <div className=" absolute top-[57%] right-0">
      <svg xmlns="http://www.w3.org/2000/svg" width="128" height="152" viewBox="0 0 128 152" fill="none">
  <g filter="url(#filter0_d_1_684)">
    <circle cx="76" cy="76" r="32" fill="#8B3DFF"/>
  </g>
  <path d="M90 92C90 92 85.2863 90.1451 81.4728 88.6592H65.4375C63.5392 88.6592 62 87.0272 62 85.0144V63.6448C62 61.632 63.5392 60 65.4375 60H86.5615C88.4598 60 89.999 61.632 89.999 63.6448V82.0491L90 92ZM85.8614 80.0181C85.5309 79.6105 84.9541 79.5634 84.5692 79.9125C84.5392 79.9392 81.5538 82.5941 75.999 82.5941C70.5132 82.5941 67.4818 79.9584 67.4278 79.9104C67.043 79.5629 66.4676 79.6105 66.1376 80.0171C65.9791 80.2125 65.9004 80.4673 65.919 80.7249C65.9376 80.9825 66.052 81.2215 66.2366 81.3888C66.3786 81.5168 69.7741 84.5387 75.999 84.5387C82.2249 84.5387 85.6204 81.5168 85.7624 81.3888C85.9467 81.2216 86.0609 80.9828 86.0795 80.7255C86.098 80.4681 86.0196 80.2135 85.8614 80.0181Z" fill="white"/>
  <defs>
    <filter id="filter0_d_1_684" x="0" y="0" width="152" height="152" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
      <feOffset/>
      <feGaussianBlur stdDeviation="22"/>
      <feComposite in2="hardAlpha" operator="out"/>
      <feColorMatrix type="matrix" values="0 0 0 0 0.447059 0 0 0 0 0.247059 0 0 0 0 0.784314 0 0 0 0.3 0"/>
      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_684"/>
      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_684" result="shape"/>
    </filter>
  </defs>
</svg>
      </div>
        </div>
      </Layout>
    </>
  );
}

import React from "react";

import { Img, Text, Line, Input } from "components";

const AccountDetailsOnePage = () => {
  return (
    <>
      <div className="bg-black_900 flex flex-col font-spacegrotesk items-center justify-end mx-[auto] pt-[30px] w-[100%]">
        <header className="flex items-center justify-center w-[100%]">
          <div className="flex flex-1 md:flex-col flex-row md:gap-[20px] items-center justify-center w-[100%]">
            <div className="header-row my-[3px]">
              <div className="flex flex-row gap-[14px] items-center justify-start">
                <Img
                  src="images/img_television.svg"
                  className="h-[50px] w-[50px]"
                  alt="television"
                />
                <Text
                  className="text-left text-white_A700 w-[auto]"
                  as="h1"
                  variant="h1"
                >
                  Fondeo
                </Text>
              </div>
              <div className="mobile-menu">
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
            <div className="flex md:flex-1 flex-row sm:hidden items-start justify-center md:w-[100%] w-[30%]">
              <Text
                className="font-medium mt-[4px] text-bluegray_100 text-left w-[auto]"
                as="h6"
                variant="h6"
              >
                Desktop
              </Text>
              <div className="flex flex-col gap-[7px] items-center justify-start ml-[23px] mt-[2px] w-[38%]">
                <Text
                  className="font-medium text-bluegray_100 text-left w-[auto]"
                  as="h6"
                  variant="h6"
                >
                  Account Details
                </Text>
                <Line className="bg-cyan_400 h-[2px] w-[100%]" />
              </div>
              <Text
                className="font-medium ml-[22px] text-bluegray_100 text-left w-[auto]"
                as="h6"
                variant="h6"
              >
                Order Details
              </Text>
            </div>
            <div className="flex flex-col h-[56px] sm:hidden items-center justify-start w-[56px]">
              <Img
                src="images/img_profileimglarge.png"
                className="h-[56px] md:h-[auto] sm:h-[auto] rounded-radius50 w-[56px]"
                alt="ProfileImgLarge"
              />
            </div>
          </div>
        </header>
        <div className="flex flex-col items-center justify-start mt-[75px] md:px-[20px] sm:px-[20px] md:w-[100%] sm:w-[100%] w-[38%]">
          <div className="flex flex-col items-center justify-start w-[100%]">
            <div className="flex flex-col items-center justify-start w-[100%]">
              <div className="flex sm:flex-col flex-row gap-[16px] items-center justify-between w-[100%]">
                <div className="flex sm:flex-1 flex-col gap-[8px] items-start justify-start sm:w-[100%] w-[auto]">
                  <Text
                    className="font-medium text-bluegray_100 text-left w-[auto]"
                    variant="body1"
                  >
                    First Name
                  </Text>
                  <Input
                    className="font-medium p-[0] text-[16px] placeholder:text-bluegray_200 text-bluegray_200 text-left w-[100%]"
                    wrapClassName="w-[100%]"
                    name="Group10198"
                    placeholder="Jenny"
                    size="lg"
                  ></Input>
                </div>
                <div className="flex sm:flex-1 flex-col gap-[8px] items-start justify-start sm:w-[100%] w-[auto]">
                  <Text
                    className="font-medium text-bluegray_100 text-left w-[auto]"
                    variant="body1"
                  >
                    Last Name
                  </Text>
                  <Input
                    className="font-medium p-[0] text-[16px] placeholder:text-bluegray_200 text-bluegray_200 text-left w-[100%]"
                    wrapClassName="w-[100%]"
                    name="Group10198 One"
                    placeholder="Wilson"
                  ></Input>
                </div>
              </div>
              <div className="flex flex-col gap-[8px] items-start justify-start mt-[21px] w-[100%]">
                <Text
                  className="font-medium text-bluegray_100 text-left w-[auto]"
                  variant="body1"
                >
                  Email
                </Text>
                <Input
                  className="font-medium p-[0] text-[16px] placeholder:text-bluegray_200 text-bluegray_200 text-left w-[100%]"
                  wrapClassName="w-[100%]"
                  type="email"
                  name="email One"
                  placeholder="jenny@gmail.com"
                  size="lg"
                ></Input>
              </div>
              <div className="flex flex-col gap-[8px] items-start justify-start mt-[21px] w-[100%]">
                <Text
                  className="font-medium text-bluegray_100 text-left w-[auto]"
                  variant="body1"
                >
                  Phone number
                </Text>
                <Input
                  className="font-medium p-[0] text-[16px] placeholder:text-bluegray_200 text-bluegray_200 text-left w-[100%]"
                  wrapClassName="w-[100%]"
                  name="Group10198 Two"
                  placeholder="+1 432 2322 333"
                ></Input>
              </div>
              <div className="flex flex-col gap-[8px] items-start justify-start mt-[21px] w-[100%]">
                <Text
                  className="font-medium text-bluegray_100 text-left w-[auto]"
                  variant="body1"
                >
                  Mode
                </Text>
                <Input
                  className="font-medium p-[0] text-[16px] placeholder:text-bluegray_200 text-bluegray_200 text-left w-[100%]"
                  wrapClassName="w-[100%]"
                  name="Group10198 Three"
                  placeholder="Mode"
                ></Input>
              </div>
              <div className="flex flex-col gap-[21px] items-center justify-start mt-[21px] w-[100%]">
                <div className="flex flex-col gap-[8px] items-start justify-start w-[100%]">
                  <Text
                    className="font-medium text-bluegray_100 text-left w-[auto]"
                    variant="body1"
                  >
                    Balance
                  </Text>
                  <Input
                    className="font-medium p-[0] text-[16px] placeholder:text-bluegray_200 text-bluegray_200 text-left w-[100%]"
                    wrapClassName="w-[100%]"
                    name="price"
                    placeholder="$43443"
                  ></Input>
                </div>
                <div className="flex flex-col gap-[8px] items-start justify-start w-[100%]">
                  <Text
                    className="font-medium text-bluegray_100 text-left w-[auto]"
                    variant="body1"
                  >
                    Cash to invest
                  </Text>
                  <Input
                    className="font-medium p-[0] text-[16px] placeholder:text-bluegray_200 text-bluegray_200 text-left w-[100%]"
                    wrapClassName="w-[100%]"
                    name="price One"
                    placeholder="$43443"
                  ></Input>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start mt-[23px] w-[100%]">
                <Text
                  className="font-medium text-bluegray_100 text-left w-[auto]"
                  variant="body1"
                >
                  Amount bought intraday
                </Text>
                <Input
                  className="font-medium p-[0] text-[16px] placeholder:text-bluegray_200 text-bluegray_200 text-left w-[100%]"
                  wrapClassName="mt-[4px] w-[100%]"
                  name="price Two"
                  placeholder="$43443"
                ></Input>
              </div>
            </div>
          </div>
        </div>
        <footer className="bg-gray_901 flex items-center justify-center mt-[120px] w-[100%]">
          <div className="flex md:flex-col sm:flex-col flex-row md:gap-[20px] sm:gap-[20px] items-center justify-center mx-[auto] my-[27px] w-[74%]">
            <div className="flex flex-col items-start justify-start md:w-[100%] sm:w-[100%] w-[21%]">
              <div className="flex flex-row gap-[14px] items-end justify-start md:w-[100%] sm:w-[100%] w-[84%]">
                <Img
                  src="images/img_television.svg"
                  className="h-[50px] w-[50px]"
                  alt="television One"
                />
                <Text
                  className="mb-[5px] mt-[9px] text-left text-white_A700 w-[auto]"
                  as="h1"
                  variant="h1"
                >
                  Fondeo
                </Text>
              </div>
              <div className="flex flex-col gap-[18px] items-start justify-start md:ml-[0] sm:ml-[0] ml-[2px] mt-[24px] md:w-[100%] sm:w-[100%] w-[54%]">
                <Text
                  className="font-normal not-italic text-bluegray_50 text-left w-[auto]"
                  as="h6"
                  variant="h6"
                >
                  Connect on
                </Text>
                <div className="flex flex-row gap-[20px] items-center justify-between w-[100%]">
                  <Img
                    src="images/img_camera.svg"
                    className="h-[25px] w-[25px]"
                    alt="camera"
                  />
                  <Img
                    src="images/img_call.svg"
                    className="h-[25px] w-[25px]"
                    alt="call"
                  />
                  <Img
                    src="images/img_linkedin.svg"
                    className="h-[25px] w-[25px]"
                    alt="linkedin"
                  />
                </div>
              </div>
              <Text
                className="font-normal md:ml-[0] sm:ml-[0] ml-[2px] mt-[67px] not-italic text-bluegray_200 text-left w-[auto]"
                variant="body2"
              >
                2023 Fondeo all rights reserved
              </Text>
            </div>
            <ul className="flex flex-col items-start justify-start md:ml-[0] sm:ml-[0] ml-[186px] md:w-[100%] sm:w-[100%] w-[8%] common-column-list">
              <li className="w-[auto]">
                <Text
                  className="cursor-pointer font-medium text-bluegray_50 text-left"
                  variant="body1"
                >
                  Company
                </Text>
              </li>
              <li className="mt-[15px] w-[auto]">
                <a
                  className="cursor-pointer font-medium text-[14px] text-bluegray_100 text-left"
                  href="#"
                >
                  About
                </a>
              </li>
              <li className="mt-[14px] w-[auto]">
                <a
                  className="cursor-pointer font-medium text-[14px] text-bluegray_100 text-left"
                  href="#"
                >
                  Careers
                </a>
              </li>
              <li className="mt-[16px] w-[auto]">
                <a
                  className="cursor-pointer font-medium text-[14px] text-bluegray_100 text-left"
                  href="#"
                >
                  Writers
                </a>
              </li>
              <li className="mt-[17px] w-[auto]">
                <a
                  className="cursor-pointer font-medium text-[14px] text-bluegray_100 text-left"
                  href="#"
                >
                  Blog
                </a>
              </li>
            </ul>
            <ul className="flex flex-col items-start justify-start md:ml-[0] sm:ml-[0] ml-[187px] md:w-[100%] sm:w-[100%] w-[9%] common-column-list">
              <li className="w-[auto]">
                <Text
                  className="cursor-pointer font-medium text-bluegray_50 text-left"
                  variant="body1"
                >
                  Contact
                </Text>
              </li>
              <li className="mt-[15px] w-[auto]">
                <a
                  className="cursor-pointer font-medium text-[14px] text-bluegray_100 text-left"
                  href="#"
                >
                  Advertise
                </a>
              </li>
              <li className="mt-[16px] w-[auto]">
                <a
                  className="cursor-pointer font-medium text-[14px] text-bluegray_100 text-left"
                  href="#"
                >
                  Market
                </a>
              </li>
              <li className="mt-[16px] w-[auto]">
                <a
                  className="cursor-pointer font-medium text-[14px] text-bluegray_100 text-left"
                  href="#"
                >
                  News letter
                </a>
              </li>
            </ul>
            <ul className="flex flex-col items-start justify-start md:ml-[0] sm:ml-[0] ml-[187px] md:w-[100%] sm:w-[100%] w-[14%] common-column-list">
              <li className="w-[auto]">
                <Text
                  className="cursor-pointer font-medium text-bluegray_50 text-left"
                  variant="body1"
                >
                  Help
                </Text>
              </li>
              <li className="mt-[15px] w-[auto]">
                <a
                  className="cursor-pointer font-medium text-[14px] text-bluegray_100 text-left"
                  href="#"
                >
                  FAQs
                </a>
              </li>
              <li className="mt-[14px] w-[auto]">
                <a
                  className="cursor-pointer font-medium text-[14px] text-bluegray_100 text-left"
                  href="#"
                >
                  Terms & Conditions
                </a>
              </li>
              <li className="mt-[17px] w-[auto]">
                <a
                  className="cursor-pointer font-medium text-[14px] text-bluegray_100 text-left"
                  href="#"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    </>
  );
};

export default AccountDetailsOnePage;

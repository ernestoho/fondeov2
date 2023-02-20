import React from "react";

import { Img, Text, Line, List } from "components";

const AccountDetailsPage = () => {
  return (
    <>
      <div className="bg-black_900 flex flex-col font-spacegrotesk gap-[120px] md:gap-[40px] sm:gap-[40px] items-center justify-end mx-[auto] pt-[30px] w-[100%]">
        <div className="flex flex-col items-start justify-start max-w-[1268px] mx-[auto] md:px-[20px] sm:px-[20px] w-[100%]">
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
              <div className="flex md:flex-1 flex-row gap-[23px] sm:hidden items-start justify-center md:w-[100%] w-[30%]">
                <Text
                  className="font-medium mt-[4px] text-bluegray_100 text-left w-[auto]"
                  as="h6"
                  variant="h6"
                >
                  Desktop
                </Text>
                <div className="md:h-[29px] sm:h-[29px] h-[32px] relative w-[74%]">
                  <Text
                    className="absolute font-medium right-[0] text-bluegray_100 text-left top-[0] w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    Order Details
                  </Text>
                  <div className="absolute bottom-[0] flex flex-col gap-[7px] inset-x-[0] justify-start mx-[auto] w-[100%]">
                    <Text
                      className="font-medium mr-[134px] text-bluegray_100 text-left w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Account Details
                    </Text>
                    <Line className="bg-cyan_400 h-[2px] md:ml-[0] sm:ml-[0] ml-[160px] w-[42%]" />
                  </div>
                </div>
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
          <div className="flex flex-col gap-[16px] items-start justify-start mt-[70px] md:w-[100%] sm:w-[100%] w-[39%]">
            <Text
              className="text-bluegray_50 text-left w-[auto]"
              as="h2"
              variant="h2"
            >
              Order Details
            </Text>
            <div className="bg-gray_900 flex flex-col font-opensans items-center justify-start p-[24px] sm:px-[20px] rounded-radius12 w-[100%]">
              <div className="flex flex-col items-center justify-start w-[100%]">
                <div className="flex flex-col items-center justify-start w-[100%]">
                  <div className="flex flex-row items-center justify-between w-[100%]">
                    <Text
                      className="font-semibold text-bluegray_50 text-left w-[auto]"
                      variant="body1"
                    >
                      Orders
                    </Text>
                    <div className="flex flex-row gap-[8px] h-[22px] md:h-[auto] sm:h-[auto] items-center justify-between w-[104px]">
                      <Text
                        className="font-semibold text-bluegray_100 text-left w-[auto]"
                        variant="body2"
                      >
                        This Month
                      </Text>
                      <Img
                        src="images/img_arrowdown.svg"
                        className="h-[20px] w-[20px]"
                        alt="arrowdown"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col font-spacegrotesk h-[257px] items-center justify-start mt-[31px] w-[257px]">
                    <div
                      className="bg-cover bg-no-repeat flex flex-col h-[257px] md:h-[auto] sm:h-[auto] items-start justify-start w-[257px]"
                      style={{
                        backgroundImage: "url('images/img_piechart.svg')",
                      }}
                    >
                      <div className="flex flex-col items-end justify-start w-[61%]">
                        <Text
                          className="text-left text-white_A700 w-[auto]"
                          as="h4"
                          variant="h4"
                        >
                          24%
                        </Text>
                        <Text
                          className="mt-[7px] text-left text-white_A700 w-[auto]"
                          as="h4"
                          variant="h4"
                        >
                          28%
                        </Text>
                        <div className="flex flex-row gap-[60px] items-start justify-end ml-[auto] mt-[42px] md:w-[100%] sm:w-[100%] w-[90%]">
                          <Text
                            className="mt-[24px] text-left text-white_A700 w-[auto]"
                            as="h4"
                            variant="h4"
                          >
                            12%
                          </Text>
                          <Text
                            className="mb-[24px] text-left text-white_A700 w-[auto]"
                            as="h4"
                            variant="h4"
                          >
                            36%
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col font-spacegrotesk items-center justify-start mt-[30px] md:w-[100%] sm:w-[100%] w-[65%]">
                    <List
                      className="flex-col gap-[17px] grid items-center w-[100%]"
                      orientation="vertical"
                    >
                      <div className="flex flex-1 flex-row items-center justify-between my-[0] w-[100%]">
                        <div className="flex flex-row gap-[8px] items-center justify-start w-[auto]">
                          <div className="bg-blue_A200 h-[8px] my-[5px] rounded-radius2 w-[27%]"></div>
                          <Text
                            className="font-bold text-bluegray_100 text-left w-[auto]"
                            variant="body2"
                          >
                            Detail 1
                          </Text>
                        </div>
                        <div className="flex flex-row gap-[8px] items-center justify-start w-[auto]">
                          <div className="bg-blue_500 h-[8px] my-[5px] rounded-radius2 w-[27%]"></div>
                          <Text
                            className="font-bold text-bluegray_100 text-left w-[auto]"
                            variant="body2"
                          >
                            Detail 2
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-1 flex-row items-center justify-between my-[0] w-[100%]">
                        <div className="flex flex-row gap-[8px] items-center justify-start w-[auto]">
                          <div className="bg-blue_400 h-[8px] my-[5px] rounded-radius2 w-[26%]"></div>
                          <Text
                            className="font-bold text-bluegray_100 text-left w-[auto]"
                            variant="body2"
                          >
                            Detail 3
                          </Text>
                        </div>
                        <div className="flex flex-row gap-[8px] items-center justify-start w-[auto]">
                          <div className="bg-cyan_400 h-[8px] my-[5px] rounded-radius2 w-[26%]"></div>
                          <Text
                            className="font-bold text-bluegray_100 text-left w-[auto]"
                            variant="body2"
                          >
                            Detail 4
                          </Text>
                        </div>
                      </div>
                    </List>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[16px] items-start justify-start mt-[80px] w-[100%]">
            <Text
              className="text-bluegray_50 text-left w-[auto]"
              as="h2"
              variant="h2"
            >
              Purchased Stock
            </Text>
            <List
              className="sm:flex-col flex-row gap-[28px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center w-[100%]"
              orientation="horizontal"
            >
              <div className="bg-gray_900 flex flex-1 flex-col items-start justify-start p-[24px] sm:px-[20px] rounded-radius12 w-[100%]">
                <div className="flex flex-col items-start justify-start md:w-[100%] sm:w-[100%] w-[92%]">
                  <div className="flex flex-row items-center justify-start md:w-[100%] sm:w-[100%] w-[84%]">
                    <Text
                      className="font-medium text-bluegray_100 text-left w-[auto]"
                      variant="body1"
                    >
                      ISIN Number :
                    </Text>
                    <Text
                      className="font-medium ml-[4px] text-bluegray_100 text-left w-[auto]"
                      variant="body1"
                    >
                      378r93u3u
                    </Text>
                  </div>
                  <div className="flex flex-row items-start justify-start mt-[16px] md:w-[100%] sm:w-[100%] w-[38%]">
                    <Text
                      className="font-medium mt-[2px] text-bluegray_100 text-left w-[auto]"
                      variant="body1"
                    >
                      Title :
                    </Text>
                    <Text
                      className="font-medium ml-[4px] text-bluegray_100 text-left w-[auto]"
                      variant="body1"
                    >
                      TSLA
                    </Text>
                  </div>
                  <div className="flex flex-row items-center justify-start mt-[16px] md:w-[100%] sm:w-[100%] w-[48%]">
                    <Text
                      className="font-medium text-bluegray_100 text-left w-[auto]"
                      variant="body1"
                    >
                      Quantity :
                    </Text>
                    <Text
                      className="font-medium ml-[4px] text-bluegray_100 text-left w-[auto]"
                      variant="body1"
                    >
                      231
                    </Text>
                  </div>
                  <div className="flex flex-row items-start justify-start mt-[16px] md:w-[100%] sm:w-[100%] w-[84%]">
                    <Text
                      className="font-medium mt-[2px] text-bluegray_100 text-left w-[auto]"
                      variant="body1"
                    >
                      Estimated Price :
                    </Text>
                    <Text
                      className="font-medium ml-[4px] text-bluegray_100 text-left w-[auto]"
                      variant="body1"
                    >
                      $12234
                    </Text>
                  </div>
                  <div className="flex flex-row items-center justify-start mt-[18px] md:w-[100%] sm:w-[100%] w-[59%]">
                    <Text
                      className="font-medium text-bluegray_100 text-left w-[auto]"
                      variant="body1"
                    >
                      Total Price :
                    </Text>
                    <Text
                      className="font-medium ml-[4px] text-bluegray_100 text-left w-[auto]"
                      variant="body1"
                    >
                      Tesla
                    </Text>
                  </div>
                  <div className="flex flex-row items-start justify-start mt-[16px] md:w-[100%] sm:w-[100%] w-[44%]">
                    <Text
                      className="font-medium mt-[2px] text-bluegray_100 text-left w-[auto]"
                      variant="body1"
                    >
                      Venue :
                    </Text>
                    <Text
                      className="font-medium ml-[4px] text-bluegray_100 text-left w-[auto]"
                      variant="body1"
                    >
                      TSLA
                    </Text>
                  </div>
                  <div className="flex flex-row items-center justify-start mt-[16px] md:w-[100%] sm:w-[100%] w-[44%]">
                    <Text
                      className="font-medium text-bluegray_100 text-left w-[auto]"
                      variant="body1"
                    >
                      Status :
                    </Text>
                    <Text
                      className="font-medium ml-[4px] text-bluegray_100 text-left w-[auto]"
                      variant="body1"
                    >
                      Hold
                    </Text>
                  </div>
                  <div className="flex flex-row items-center justify-start mt-[16px] md:w-[100%] sm:w-[100%] w-[82%]">
                    <Text
                      className="font-medium text-bluegray_100 text-left w-[auto]"
                      variant="body1"
                    >
                      Executed Price :
                    </Text>
                    <Text
                      className="font-medium ml-[4px] text-bluegray_100 text-left w-[auto]"
                      variant="body1"
                    >
                      $12234
                    </Text>
                  </div>
                  <div className="flex flex-row items-center justify-evenly mt-[16px] w-[100%]">
                    <Text
                      className="font-medium text-bluegray_100 text-left w-[auto]"
                      variant="body1"
                    >
                      Total Executed Price :
                    </Text>
                    <Text
                      className="font-medium text-bluegray_100 text-left w-[auto]"
                      variant="body1"
                    >
                      $12234
                    </Text>
                  </div>
                </div>
              </div>
              <div className="bg-gray_900 flex flex-1 flex-col items-start justify-start p-[24px] sm:px-[20px] rounded-radius12 w-[100%]">
                <div className="flex flex-col items-start justify-start md:w-[100%] sm:w-[100%] w-[92%]">
                  <div className="flex flex-row items-center justify-start md:w-[100%] sm:w-[100%] w-[84%]">
                    <Text
                      className="font-medium text-bluegray_100 text-left w-[auto]"
                      variant="body1"
                    >
                      ISIN Number :
                    </Text>
                    <Text
                      className="font-medium ml-[4px] text-bluegray_100 text-left w-[auto]"
                      variant="body1"
                    >
                      378r93u3u
                    </Text>
                  </div>
                  <div className="flex flex-row items-start justify-start mt-[16px] md:w-[100%] sm:w-[100%] w-[38%]">
                    <Text
                      className="font-medium mt-[2px] text-bluegray_100 text-left w-[auto]"
                      variant="body1"
                    >
                      Title :
                    </Text>
                    <Text
                      className="font-medium ml-[4px] text-bluegray_100 text-left w-[auto]"
                      variant="body1"
                    >
                      TSLA
                    </Text>
                  </div>
                  <div className="flex flex-row items-center justify-start mt-[16px] md:w-[100%] sm:w-[100%] w-[48%]">
                    <Text
                      className="font-medium text-bluegray_100 text-left w-[auto]"
                      variant="body1"
                    >
                      Quantity :
                    </Text>
                    <Text
                      className="font-medium ml-[4px] text-bluegray_100 text-left w-[auto]"
                      variant="body1"
                    >
                      231
                    </Text>
                  </div>
                  <div className="flex flex-row items-start justify-start mt-[16px] md:w-[100%] sm:w-[100%] w-[84%]">
                    <Text
                      className="font-medium mt-[2px] text-bluegray_100 text-left w-[auto]"
                      variant="body1"
                    >
                      Estimated Price :
                    </Text>
                    <Text
                      className="font-medium ml-[4px] text-bluegray_100 text-left w-[auto]"
                      variant="body1"
                    >
                      $12234
                    </Text>
                  </div>
                  <div className="flex flex-row items-center justify-start mt-[18px] md:w-[100%] sm:w-[100%] w-[59%]">
                    <Text
                      className="font-medium text-bluegray_100 text-left w-[auto]"
                      variant="body1"
                    >
                      Total Price :
                    </Text>
                    <Text
                      className="font-medium ml-[4px] text-bluegray_100 text-left w-[auto]"
                      variant="body1"
                    >
                      Tesla
                    </Text>
                  </div>
                  <div className="flex flex-row items-start justify-start mt-[16px] md:w-[100%] sm:w-[100%] w-[44%]">
                    <Text
                      className="font-medium mt-[2px] text-bluegray_100 text-left w-[auto]"
                      variant="body1"
                    >
                      Venue :
                    </Text>
                    <Text
                      className="font-medium ml-[4px] text-bluegray_100 text-left w-[auto]"
                      variant="body1"
                    >
                      TSLA
                    </Text>
                  </div>
                  <div className="flex flex-row items-center justify-start mt-[16px] md:w-[100%] sm:w-[100%] w-[44%]">
                    <Text
                      className="font-medium text-bluegray_100 text-left w-[auto]"
                      variant="body1"
                    >
                      Status :
                    </Text>
                    <Text
                      className="font-medium ml-[4px] text-bluegray_100 text-left w-[auto]"
                      variant="body1"
                    >
                      Hold
                    </Text>
                  </div>
                  <div className="flex flex-row items-center justify-start mt-[16px] md:w-[100%] sm:w-[100%] w-[82%]">
                    <Text
                      className="font-medium text-bluegray_100 text-left w-[auto]"
                      variant="body1"
                    >
                      Executed Price :
                    </Text>
                    <Text
                      className="font-medium ml-[4px] text-bluegray_100 text-left w-[auto]"
                      variant="body1"
                    >
                      $12234
                    </Text>
                  </div>
                  <div className="flex flex-row items-center justify-evenly mt-[16px] w-[100%]">
                    <Text
                      className="font-medium text-bluegray_100 text-left w-[auto]"
                      variant="body1"
                    >
                      Total Executed Price :
                    </Text>
                    <Text
                      className="font-medium text-bluegray_100 text-left w-[auto]"
                      variant="body1"
                    >
                      $12234
                    </Text>
                  </div>
                </div>
              </div>
              <div className="bg-gray_900 flex flex-1 flex-col items-start justify-start p-[24px] sm:px-[20px] rounded-radius12 w-[100%]">
                <div className="flex flex-col items-start justify-start md:w-[100%] sm:w-[100%] w-[92%]">
                  <div className="flex flex-row items-center justify-start md:w-[100%] sm:w-[100%] w-[84%]">
                    <Text
                      className="font-medium text-bluegray_100 text-left w-[auto]"
                      variant="body1"
                    >
                      ISIN Number :
                    </Text>
                    <Text
                      className="font-medium ml-[4px] text-bluegray_100 text-left w-[auto]"
                      variant="body1"
                    >
                      378r93u3u
                    </Text>
                  </div>
                  <div className="flex flex-row items-start justify-start mt-[16px] md:w-[100%] sm:w-[100%] w-[38%]">
                    <Text
                      className="font-medium mt-[2px] text-bluegray_100 text-left w-[auto]"
                      variant="body1"
                    >
                      Title :
                    </Text>
                    <Text
                      className="font-medium ml-[4px] text-bluegray_100 text-left w-[auto]"
                      variant="body1"
                    >
                      TSLA
                    </Text>
                  </div>
                  <div className="flex flex-row items-center justify-start mt-[16px] md:w-[100%] sm:w-[100%] w-[48%]">
                    <Text
                      className="font-medium text-bluegray_100 text-left w-[auto]"
                      variant="body1"
                    >
                      Quantity :
                    </Text>
                    <Text
                      className="font-medium ml-[4px] text-bluegray_100 text-left w-[auto]"
                      variant="body1"
                    >
                      231
                    </Text>
                  </div>
                  <div className="flex flex-row items-start justify-start mt-[16px] md:w-[100%] sm:w-[100%] w-[84%]">
                    <Text
                      className="font-medium mt-[2px] text-bluegray_100 text-left w-[auto]"
                      variant="body1"
                    >
                      Estimated Price :
                    </Text>
                    <Text
                      className="font-medium ml-[4px] text-bluegray_100 text-left w-[auto]"
                      variant="body1"
                    >
                      $12234
                    </Text>
                  </div>
                  <div className="flex flex-row items-center justify-start mt-[18px] md:w-[100%] sm:w-[100%] w-[59%]">
                    <Text
                      className="font-medium text-bluegray_100 text-left w-[auto]"
                      variant="body1"
                    >
                      Total Price :
                    </Text>
                    <Text
                      className="font-medium ml-[4px] text-bluegray_100 text-left w-[auto]"
                      variant="body1"
                    >
                      Tesla
                    </Text>
                  </div>
                  <div className="flex flex-row items-start justify-start mt-[16px] md:w-[100%] sm:w-[100%] w-[44%]">
                    <Text
                      className="font-medium mt-[2px] text-bluegray_100 text-left w-[auto]"
                      variant="body1"
                    >
                      Venue :
                    </Text>
                    <Text
                      className="font-medium ml-[4px] text-bluegray_100 text-left w-[auto]"
                      variant="body1"
                    >
                      TSLA
                    </Text>
                  </div>
                  <div className="flex flex-row items-center justify-start mt-[16px] md:w-[100%] sm:w-[100%] w-[44%]">
                    <Text
                      className="font-medium text-bluegray_100 text-left w-[auto]"
                      variant="body1"
                    >
                      Status :
                    </Text>
                    <Text
                      className="font-medium ml-[4px] text-bluegray_100 text-left w-[auto]"
                      variant="body1"
                    >
                      Hold
                    </Text>
                  </div>
                  <div className="flex flex-row items-center justify-start mt-[16px] md:w-[100%] sm:w-[100%] w-[82%]">
                    <Text
                      className="font-medium text-bluegray_100 text-left w-[auto]"
                      variant="body1"
                    >
                      Executed Price :
                    </Text>
                    <Text
                      className="font-medium ml-[4px] text-bluegray_100 text-left w-[auto]"
                      variant="body1"
                    >
                      $12234
                    </Text>
                  </div>
                  <div className="flex flex-row items-center justify-evenly mt-[16px] w-[100%]">
                    <Text
                      className="font-medium text-bluegray_100 text-left w-[auto]"
                      variant="body1"
                    >
                      Total Executed Price :
                    </Text>
                    <Text
                      className="font-medium text-bluegray_100 text-left w-[auto]"
                      variant="body1"
                    >
                      $12234
                    </Text>
                  </div>
                </div>
              </div>
              <div className="bg-gray_900 flex flex-1 flex-col items-start justify-start p-[24px] sm:px-[20px] rounded-radius12 w-[100%]">
                <div className="flex flex-col items-start justify-start md:w-[100%] sm:w-[100%] w-[92%]">
                  <div className="flex flex-row items-center justify-start md:w-[100%] sm:w-[100%] w-[84%]">
                    <Text
                      className="font-medium text-bluegray_100 text-left w-[auto]"
                      variant="body1"
                    >
                      ISIN Number :
                    </Text>
                    <Text
                      className="font-medium ml-[4px] text-bluegray_100 text-left w-[auto]"
                      variant="body1"
                    >
                      378r93u3u
                    </Text>
                  </div>
                  <div className="flex flex-row items-start justify-start mt-[16px] md:w-[100%] sm:w-[100%] w-[38%]">
                    <Text
                      className="font-medium mt-[2px] text-bluegray_100 text-left w-[auto]"
                      variant="body1"
                    >
                      Title :
                    </Text>
                    <Text
                      className="font-medium ml-[4px] text-bluegray_100 text-left w-[auto]"
                      variant="body1"
                    >
                      TSLA
                    </Text>
                  </div>
                  <div className="flex flex-row items-center justify-start mt-[16px] md:w-[100%] sm:w-[100%] w-[48%]">
                    <Text
                      className="font-medium text-bluegray_100 text-left w-[auto]"
                      variant="body1"
                    >
                      Quantity :
                    </Text>
                    <Text
                      className="font-medium ml-[4px] text-bluegray_100 text-left w-[auto]"
                      variant="body1"
                    >
                      231
                    </Text>
                  </div>
                  <div className="flex flex-row items-start justify-start mt-[16px] md:w-[100%] sm:w-[100%] w-[84%]">
                    <Text
                      className="font-medium mt-[2px] text-bluegray_100 text-left w-[auto]"
                      variant="body1"
                    >
                      Estimated Price :
                    </Text>
                    <Text
                      className="font-medium ml-[4px] text-bluegray_100 text-left w-[auto]"
                      variant="body1"
                    >
                      $12234
                    </Text>
                  </div>
                  <div className="flex flex-row items-center justify-start mt-[18px] md:w-[100%] sm:w-[100%] w-[59%]">
                    <Text
                      className="font-medium text-bluegray_100 text-left w-[auto]"
                      variant="body1"
                    >
                      Total Price :
                    </Text>
                    <Text
                      className="font-medium ml-[4px] text-bluegray_100 text-left w-[auto]"
                      variant="body1"
                    >
                      Tesla
                    </Text>
                  </div>
                  <div className="flex flex-row items-start justify-start mt-[16px] md:w-[100%] sm:w-[100%] w-[44%]">
                    <Text
                      className="font-medium mt-[2px] text-bluegray_100 text-left w-[auto]"
                      variant="body1"
                    >
                      Venue :
                    </Text>
                    <Text
                      className="font-medium ml-[4px] text-bluegray_100 text-left w-[auto]"
                      variant="body1"
                    >
                      TSLA
                    </Text>
                  </div>
                  <div className="flex flex-row items-center justify-start mt-[16px] md:w-[100%] sm:w-[100%] w-[44%]">
                    <Text
                      className="font-medium text-bluegray_100 text-left w-[auto]"
                      variant="body1"
                    >
                      Status :
                    </Text>
                    <Text
                      className="font-medium ml-[4px] text-bluegray_100 text-left w-[auto]"
                      variant="body1"
                    >
                      Hold
                    </Text>
                  </div>
                  <div className="flex flex-row items-center justify-start mt-[16px] md:w-[100%] sm:w-[100%] w-[82%]">
                    <Text
                      className="font-medium text-bluegray_100 text-left w-[auto]"
                      variant="body1"
                    >
                      Executed Price :
                    </Text>
                    <Text
                      className="font-medium ml-[4px] text-bluegray_100 text-left w-[auto]"
                      variant="body1"
                    >
                      $12234
                    </Text>
                  </div>
                  <div className="flex flex-row items-center justify-evenly mt-[16px] w-[100%]">
                    <Text
                      className="font-medium text-bluegray_100 text-left w-[auto]"
                      variant="body1"
                    >
                      Total Executed Price :
                    </Text>
                    <Text
                      className="font-medium text-bluegray_100 text-left w-[auto]"
                      variant="body1"
                    >
                      $12234
                    </Text>
                  </div>
                </div>
              </div>
            </List>
          </div>
        </div>
        <footer className="bg-gray_901 flex items-center justify-center w-[100%]">
          <div className="flex md:flex-col sm:flex-col flex-row md:gap-[20px] sm:gap-[20px] items-center justify-center mx-[auto] my-[27px] w-[74%]">
            <div className="flex flex-col items-start justify-start md:w-[100%] sm:w-[100%] w-[21%]">
              <div className="flex flex-row gap-[14px] items-center justify-start md:w-[100%] sm:w-[100%] w-[84%]">
                <Img
                  src="images/img_television.svg"
                  className="h-[50px] w-[50px]"
                  alt="television One"
                />
                <Text
                  className="text-left text-white_A700 w-[auto]"
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
              <li className="mt-[17px] w-[auto]">
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
              <li className="mt-[17px] w-[auto]">
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

export default AccountDetailsPage;

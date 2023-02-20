import React from "react";

import { Img, Text, Line, Button } from "components";
import { get20230109 } from "service/api";

const DesktopPage = () => {
  const [apiData, setapiData] = React.useState();

  function callApi() {
    const req = {};

    get20230109(req)
      .then((res) => {
        setapiData(res);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  return (
    <>
      <div className="bg-black_900 flex flex-col font-spacegrotesk gap-[120px] md:gap-[40px] sm:gap-[40px] items-center justify-end mx-[auto] pt-[30px] w-[100%]">
        <div className="flex flex-col md:gap-[40px] sm:gap-[40px] gap-[70px] items-center justify-start max-w-[1270px] mx-[auto] md:px-[20px] sm:px-[20px] w-[100%]">
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
                <div className="flex flex-col gap-[7px] items-center justify-start mt-[4px] w-[20%]">
                  <Text
                    className="font-medium text-bluegray_100 text-left w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    Desktop
                  </Text>
                  <Line className="bg-cyan_400 h-[2px] w-[96%]" />
                </div>
                <Text
                  className="font-medium ml-[23px] mt-[2px] text-bluegray_100 text-left w-[auto]"
                  as="h6"
                  variant="h6"
                >
                  Account Details
                </Text>
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
          <div className="flex flex-col gap-[13px] items-start justify-start w-[100%]">
            <Text
              className="md:ml-[0] sm:ml-[0] ml-[2px] text-bluegray_50 text-left w-[auto]"
              as="h2"
              variant="h2"
            >
              Stocks
            </Text>
            <div className="flex flex-col items-center justify-start w-[100%]">
              <div className="flex flex-col items-center justify-start w-[100%]">
                <div className="md:gap-[20px] sm:gap-[20px] gap-[28px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center min-h-[auto] w-[100%]">
                  <div className="bg-gray_900 flex flex-1 flex-col items-center justify-start p-[24px] sm:px-[20px] rounded-radius12 w-[100%]">
                    <div className="flex flex-col gap-[32px] items-start justify-start w-[100%]">
                      <div className="flex flex-col gap-[16px] items-start justify-start md:w-[100%] sm:w-[100%] w-[77%]">
                        <div className="flex flex-row items-center justify-start md:w-[100%] sm:w-[100%] w-[50%]">
                          <Text
                            className="font-medium text-bluegray_100 text-left w-[auto]"
                            variant="body1"
                          >
                            Name :
                          </Text>
                          <Text
                            className="font-medium ml-[4px] text-bluegray_100 text-left w-[auto]"
                            variant="body1"
                          >
                            Tesla
                          </Text>
                        </div>
                        <div className="flex flex-row items-center justify-start md:w-[100%] sm:w-[100%] w-[45%]">
                          <Text
                            className="font-medium text-bluegray_100 text-left w-[auto]"
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
                        <div className="flex flex-row items-center justify-evenly w-[100%]">
                          <Text
                            className="font-medium text-bluegray_100 text-left w-[auto]"
                            variant="body1"
                          >
                            ISIN Number :
                          </Text>
                          <Text
                            className="font-medium text-bluegray_100 text-left w-[auto]"
                            variant="body1"
                          >
                            378r93u3u
                          </Text>
                        </div>
                        <div className="flex flex-row items-center justify-start md:w-[100%] sm:w-[100%] w-[51%]">
                          <Text
                            className="font-medium text-bluegray_100 text-left w-[auto]"
                            variant="body1"
                          >
                            Type :
                          </Text>
                          <Text
                            className="font-medium ml-[4px] text-bluegray_100 text-left w-[auto]"
                            variant="body1"
                          >
                            Stock
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-row gap-[38px] items-end justify-between w-[100%]">
                        <div className="flex flex-col items-start justify-start w-[auto]">
                          <Text
                            className="text-bluegray_50 text-left w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            Venue Details
                          </Text>
                          <div className="flex flex-row items-center justify-start mt-[8px] md:w-[100%] sm:w-[100%] w-[73%]">
                            <Text
                              className="font-medium text-bluegray_100 text-left w-[auto]"
                              variant="body1"
                            >
                              Name :
                            </Text>
                            <Text
                              className="font-medium ml-[4px] text-bluegray_100 text-left w-[auto]"
                              variant="body1"
                            >
                              Tesla
                            </Text>
                          </div>
                          <div className="flex flex-row items-center justify-start mt-[16px] md:w-[100%] sm:w-[100%] w-[65%]">
                            <Text
                              className="font-medium text-bluegray_100 text-left w-[auto]"
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
                          <div className="flex flex-row items-center justify-start mt-[16px] md:w-[100%] sm:w-[100%] w-[70%]">
                            <Text
                              className="font-medium text-bluegray_100 text-left w-[auto]"
                              variant="body1"
                            >
                              IMic :
                            </Text>
                            <Text
                              className="font-medium ml-[4px] text-bluegray_100 text-left w-[auto]"
                              variant="body1"
                            >
                              XMUN
                            </Text>
                          </div>
                          <div className="flex flex-row items-start justify-start mt-[16px] md:w-[100%] sm:w-[100%] w-[75%]">
                            <Text
                              className="font-medium text-bluegray_100 text-left w-[auto]"
                              variant="body1"
                            >
                              Is Open :
                            </Text>
                            <Text
                              className="font-medium ml-[4px] mt-[2px] text-green_300 text-left w-[auto]"
                              variant="body1"
                            >
                              Yes
                            </Text>
                          </div>
                          <div className="flex flex-row items-center justify-start mt-[18px] md:w-[100%] sm:w-[100%] w-[89%]">
                            <Text
                              className="font-medium text-bluegray_100 text-left w-[auto]"
                              variant="body1"
                            >
                              Tradeable :
                            </Text>
                            <Text
                              className="font-medium ml-[4px] text-green_300 text-left w-[auto]"
                              variant="body1"
                            >
                              Yes
                            </Text>
                          </div>
                          <div className="flex flex-row items-center justify-start mt-[16px] md:w-[100%] sm:w-[100%] w-[89%]">
                            <Text
                              className="font-medium text-bluegray_100 text-left w-[auto]"
                              variant="body1"
                            >
                              Currency :
                            </Text>
                            <Text
                              className="font-medium ml-[4px] text-bluegray_100 text-left w-[auto]"
                              variant="body1"
                            >
                              USD
                            </Text>
                          </div>
                        </div>
                        <Button
                          className="common-pointer cursor-pointer font-medium min-w-[79px] mt-[200px] text-[14px] text-center text-white_A700 w-[auto]"
                          onClick={() => {
                            callApi();
                          }}
                        >
                          Buy now
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray_900 flex flex-1 flex-col items-center justify-start p-[24px] sm:px-[20px] rounded-radius12 w-[100%]">
                    <div className="flex flex-col gap-[32px] items-start justify-start w-[100%]">
                      <div className="flex flex-col gap-[16px] items-start justify-start md:w-[100%] sm:w-[100%] w-[77%]">
                        <div className="flex flex-row items-center justify-start md:w-[100%] sm:w-[100%] w-[54%]">
                          <Text
                            className="font-medium text-bluegray_100 text-left w-[auto]"
                            variant="body1"
                          >
                            Name :
                          </Text>
                          <Text
                            className="font-medium ml-[4px] text-bluegray_100 text-left w-[auto]"
                            variant="body1"
                          >
                            Apple
                          </Text>
                        </div>
                        <div className="flex flex-row items-center justify-start md:w-[100%] sm:w-[100%] w-[46%]">
                          <Text
                            className="font-medium text-bluegray_100 text-left w-[auto]"
                            variant="body1"
                          >
                            Title :
                          </Text>
                          <Text
                            className="font-medium ml-[4px] text-bluegray_100 text-left w-[auto]"
                            variant="body1"
                          >
                            AAPL
                          </Text>
                        </div>
                        <div className="flex flex-row items-center justify-evenly w-[100%]">
                          <Text
                            className="font-medium text-bluegray_100 text-left w-[auto]"
                            variant="body1"
                          >
                            ISIN Number :
                          </Text>
                          <Text
                            className="font-medium text-bluegray_100 text-left w-[auto]"
                            variant="body1"
                          >
                            378r93u3u
                          </Text>
                        </div>
                        <div className="flex flex-row items-center justify-start md:w-[100%] sm:w-[100%] w-[51%]">
                          <Text
                            className="font-medium text-bluegray_100 text-left w-[auto]"
                            variant="body1"
                          >
                            Type :
                          </Text>
                          <Text
                            className="font-medium ml-[4px] text-bluegray_100 text-left w-[auto]"
                            variant="body1"
                          >
                            Stock
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-row gap-[38px] items-end justify-between w-[100%]">
                        <div className="flex flex-col items-start justify-start w-[auto]">
                          <Text
                            className="text-bluegray_50 text-left w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            Venue Details
                          </Text>
                          <div className="flex flex-row items-center justify-start mt-[8px] md:w-[100%] sm:w-[100%] w-[73%]">
                            <Text
                              className="font-medium text-bluegray_100 text-left w-[auto]"
                              variant="body1"
                            >
                              Name :
                            </Text>
                            <Text
                              className="font-medium ml-[4px] text-bluegray_100 text-left w-[auto]"
                              variant="body1"
                            >
                              Tesla
                            </Text>
                          </div>
                          <div className="flex flex-row items-center justify-start mt-[16px] md:w-[100%] sm:w-[100%] w-[65%]">
                            <Text
                              className="font-medium text-bluegray_100 text-left w-[auto]"
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
                          <div className="flex flex-row items-center justify-start mt-[16px] md:w-[100%] sm:w-[100%] w-[70%]">
                            <Text
                              className="font-medium text-bluegray_100 text-left w-[auto]"
                              variant="body1"
                            >
                              IMic :
                            </Text>
                            <Text
                              className="font-medium ml-[4px] text-bluegray_100 text-left w-[auto]"
                              variant="body1"
                            >
                              XMUN
                            </Text>
                          </div>
                          <div className="flex flex-row items-start justify-start mt-[16px] md:w-[100%] sm:w-[100%] w-[75%]">
                            <Text
                              className="font-medium text-bluegray_100 text-left w-[auto]"
                              variant="body1"
                            >
                              Is Open :
                            </Text>
                            <Text
                              className="font-medium ml-[4px] mt-[2px] text-green_300 text-left w-[auto]"
                              variant="body1"
                            >
                              Yes
                            </Text>
                          </div>
                          <div className="flex flex-row items-center justify-start mt-[18px] md:w-[100%] sm:w-[100%] w-[89%]">
                            <Text
                              className="font-medium text-bluegray_100 text-left w-[auto]"
                              variant="body1"
                            >
                              Tradeable :
                            </Text>
                            <Text
                              className="font-medium ml-[4px] text-green_300 text-left w-[auto]"
                              variant="body1"
                            >
                              Yes
                            </Text>
                          </div>
                          <div className="flex flex-row items-center justify-start mt-[16px] md:w-[100%] sm:w-[100%] w-[89%]">
                            <Text
                              className="font-medium text-bluegray_100 text-left w-[auto]"
                              variant="body1"
                            >
                              Currency :
                            </Text>
                            <Text
                              className="font-medium ml-[4px] text-bluegray_100 text-left w-[auto]"
                              variant="body1"
                            >
                              USD
                            </Text>
                          </div>
                        </div>
                        <Button className="cursor-pointer font-medium min-w-[79px] mt-[200px] text-[14px] text-center text-white_A700 w-[auto]">
                          Buy now
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray_900 flex flex-1 flex-col items-center justify-start p-[24px] sm:px-[20px] rounded-radius12 w-[100%]">
                    <div className="flex flex-col gap-[32px] items-start justify-start w-[100%]">
                      <div className="flex flex-col gap-[16px] items-start justify-start md:w-[100%] sm:w-[100%] w-[77%]">
                        <div className="flex flex-row items-center justify-start md:w-[100%] sm:w-[100%] w-[62%]">
                          <Text
                            className="font-medium text-bluegray_100 text-left w-[auto]"
                            variant="body1"
                          >
                            Name :
                          </Text>
                          <Text
                            className="font-medium ml-[4px] text-bluegray_100 text-left w-[auto]"
                            variant="body1"
                          >
                            Amazon
                          </Text>
                        </div>
                        <div className="flex flex-row items-center justify-start md:w-[100%] sm:w-[100%] w-[48%]">
                          <Text
                            className="font-medium text-bluegray_100 text-left w-[auto]"
                            variant="body1"
                          >
                            Title :
                          </Text>
                          <Text
                            className="font-medium ml-[4px] text-bluegray_100 text-left w-[auto]"
                            variant="body1"
                          >
                            AMZN
                          </Text>
                        </div>
                        <div className="flex flex-row items-center justify-evenly w-[100%]">
                          <Text
                            className="font-medium text-bluegray_100 text-left w-[auto]"
                            variant="body1"
                          >
                            ISIN Number :
                          </Text>
                          <Text
                            className="font-medium text-bluegray_100 text-left w-[auto]"
                            variant="body1"
                          >
                            378r93u3u
                          </Text>
                        </div>
                        <div className="flex flex-row items-center justify-start md:w-[100%] sm:w-[100%] w-[51%]">
                          <Text
                            className="font-medium text-bluegray_100 text-left w-[auto]"
                            variant="body1"
                          >
                            Type :
                          </Text>
                          <Text
                            className="font-medium ml-[4px] text-bluegray_100 text-left w-[auto]"
                            variant="body1"
                          >
                            Stock
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-row gap-[38px] items-end justify-between w-[100%]">
                        <div className="flex flex-col items-start justify-start w-[auto]">
                          <Text
                            className="text-bluegray_50 text-left w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            Venue Details
                          </Text>
                          <div className="flex flex-row items-center justify-start mt-[8px] md:w-[100%] sm:w-[100%] w-[73%]">
                            <Text
                              className="font-medium text-bluegray_100 text-left w-[auto]"
                              variant="body1"
                            >
                              Name :
                            </Text>
                            <Text
                              className="font-medium ml-[4px] text-bluegray_100 text-left w-[auto]"
                              variant="body1"
                            >
                              Tesla
                            </Text>
                          </div>
                          <div className="flex flex-row items-center justify-start mt-[16px] md:w-[100%] sm:w-[100%] w-[65%]">
                            <Text
                              className="font-medium text-bluegray_100 text-left w-[auto]"
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
                          <div className="flex flex-row items-center justify-start mt-[16px] md:w-[100%] sm:w-[100%] w-[70%]">
                            <Text
                              className="font-medium text-bluegray_100 text-left w-[auto]"
                              variant="body1"
                            >
                              IMic :
                            </Text>
                            <Text
                              className="font-medium ml-[4px] text-bluegray_100 text-left w-[auto]"
                              variant="body1"
                            >
                              XMUN
                            </Text>
                          </div>
                          <div className="flex flex-row items-start justify-start mt-[16px] md:w-[100%] sm:w-[100%] w-[75%]">
                            <Text
                              className="font-medium text-bluegray_100 text-left w-[auto]"
                              variant="body1"
                            >
                              Is Open :
                            </Text>
                            <Text
                              className="font-medium ml-[4px] mt-[2px] text-green_300 text-left w-[auto]"
                              variant="body1"
                            >
                              Yes
                            </Text>
                          </div>
                          <div className="flex flex-row items-center justify-start mt-[18px] md:w-[100%] sm:w-[100%] w-[89%]">
                            <Text
                              className="font-medium text-bluegray_100 text-left w-[auto]"
                              variant="body1"
                            >
                              Tradeable :
                            </Text>
                            <Text
                              className="font-medium ml-[4px] text-green_300 text-left w-[auto]"
                              variant="body1"
                            >
                              Yes
                            </Text>
                          </div>
                          <div className="flex flex-row items-center justify-start mt-[16px] md:w-[100%] sm:w-[100%] w-[89%]">
                            <Text
                              className="font-medium text-bluegray_100 text-left w-[auto]"
                              variant="body1"
                            >
                              Currency :
                            </Text>
                            <Text
                              className="font-medium ml-[4px] text-bluegray_100 text-left w-[auto]"
                              variant="body1"
                            >
                              USD
                            </Text>
                          </div>
                        </div>
                        <Button className="cursor-pointer font-medium min-w-[79px] mt-[200px] text-[14px] text-center text-white_A700 w-[auto]">
                          Buy now
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray_900 flex flex-1 flex-col items-center justify-start p-[24px] sm:px-[20px] rounded-radius12 w-[100%]">
                    <div className="flex flex-col gap-[32px] items-start justify-start w-[100%]">
                      <div className="flex flex-col gap-[16px] items-start justify-start md:w-[100%] sm:w-[100%] w-[77%]">
                        <div className="flex flex-row items-center justify-start md:w-[100%] sm:w-[100%] w-[70%]">
                          <Text
                            className="font-medium text-bluegray_100 text-left w-[auto]"
                            variant="body1"
                          >
                            Name :
                          </Text>
                          <Text
                            className="font-medium ml-[4px] text-bluegray_100 text-left w-[auto]"
                            variant="body1"
                          >
                            Microsoft
                          </Text>
                        </div>
                        <div className="flex flex-row items-center justify-start md:w-[100%] sm:w-[100%] w-[47%]">
                          <Text
                            className="font-medium text-bluegray_100 text-left w-[auto]"
                            variant="body1"
                          >
                            Title :
                          </Text>
                          <Text
                            className="font-medium ml-[4px] text-bluegray_100 text-left w-[auto]"
                            variant="body1"
                          >
                            MSFT
                          </Text>
                        </div>
                        <div className="flex flex-row items-center justify-evenly w-[100%]">
                          <Text
                            className="font-medium text-bluegray_100 text-left w-[auto]"
                            variant="body1"
                          >
                            ISIN Number :
                          </Text>
                          <Text
                            className="font-medium text-bluegray_100 text-left w-[auto]"
                            variant="body1"
                          >
                            378r93u3u
                          </Text>
                        </div>
                        <div className="flex flex-row items-center justify-start md:w-[100%] sm:w-[100%] w-[51%]">
                          <Text
                            className="font-medium text-bluegray_100 text-left w-[auto]"
                            variant="body1"
                          >
                            Type :
                          </Text>
                          <Text
                            className="font-medium ml-[4px] text-bluegray_100 text-left w-[auto]"
                            variant="body1"
                          >
                            Stock
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-row gap-[38px] items-end justify-between w-[100%]">
                        <div className="flex flex-col items-start justify-start w-[auto]">
                          <Text
                            className="text-bluegray_50 text-left w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            Venue Details
                          </Text>
                          <div className="flex flex-row items-center justify-start mt-[8px] md:w-[100%] sm:w-[100%] w-[73%]">
                            <Text
                              className="font-medium text-bluegray_100 text-left w-[auto]"
                              variant="body1"
                            >
                              Name :
                            </Text>
                            <Text
                              className="font-medium ml-[4px] text-bluegray_100 text-left w-[auto]"
                              variant="body1"
                            >
                              Tesla
                            </Text>
                          </div>
                          <div className="flex flex-row items-center justify-start mt-[16px] md:w-[100%] sm:w-[100%] w-[65%]">
                            <Text
                              className="font-medium text-bluegray_100 text-left w-[auto]"
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
                          <div className="flex flex-row items-center justify-start mt-[16px] md:w-[100%] sm:w-[100%] w-[70%]">
                            <Text
                              className="font-medium text-bluegray_100 text-left w-[auto]"
                              variant="body1"
                            >
                              IMic :
                            </Text>
                            <Text
                              className="font-medium ml-[4px] text-bluegray_100 text-left w-[auto]"
                              variant="body1"
                            >
                              XMUN
                            </Text>
                          </div>
                          <div className="flex flex-row items-start justify-start mt-[16px] md:w-[100%] sm:w-[100%] w-[75%]">
                            <Text
                              className="font-medium text-bluegray_100 text-left w-[auto]"
                              variant="body1"
                            >
                              Is Open :
                            </Text>
                            <Text
                              className="font-medium ml-[4px] mt-[2px] text-green_300 text-left w-[auto]"
                              variant="body1"
                            >
                              Yes
                            </Text>
                          </div>
                          <div className="flex flex-row items-center justify-start mt-[18px] md:w-[100%] sm:w-[100%] w-[89%]">
                            <Text
                              className="font-medium text-bluegray_100 text-left w-[auto]"
                              variant="body1"
                            >
                              Tradeable :
                            </Text>
                            <Text
                              className="font-medium ml-[4px] text-green_300 text-left w-[auto]"
                              variant="body1"
                            >
                              Yes
                            </Text>
                          </div>
                          <div className="flex flex-row items-center justify-start mt-[16px] md:w-[100%] sm:w-[100%] w-[89%]">
                            <Text
                              className="font-medium text-bluegray_100 text-left w-[auto]"
                              variant="body1"
                            >
                              Currency :
                            </Text>
                            <Text
                              className="font-medium ml-[4px] text-bluegray_100 text-left w-[auto]"
                              variant="body1"
                            >
                              USD
                            </Text>
                          </div>
                        </div>
                        <Button className="cursor-pointer font-medium min-w-[79px] mt-[200px] text-[14px] text-center text-white_A700 w-[auto]">
                          Buy now
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray_900 flex flex-1 flex-col items-center justify-start p-[24px] sm:px-[20px] rounded-radius12 w-[100%]">
                    <div className="flex flex-col gap-[32px] items-start justify-start w-[100%]">
                      <div className="flex flex-col gap-[16px] items-start justify-start md:w-[100%] sm:w-[100%] w-[77%]">
                        <div className="flex flex-row items-center justify-start md:w-[100%] sm:w-[100%] w-[50%]">
                          <Text
                            className="font-medium text-bluegray_100 text-left w-[auto]"
                            variant="body1"
                          >
                            Name :
                          </Text>
                          <Text
                            className="font-medium ml-[4px] text-bluegray_100 text-left w-[auto]"
                            variant="body1"
                          >
                            Tesla
                          </Text>
                        </div>
                        <div className="flex flex-row items-center justify-start md:w-[100%] sm:w-[100%] w-[45%]">
                          <Text
                            className="font-medium text-bluegray_100 text-left w-[auto]"
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
                        <div className="flex flex-row items-center justify-evenly w-[100%]">
                          <Text
                            className="font-medium text-bluegray_100 text-left w-[auto]"
                            variant="body1"
                          >
                            ISIN Number :
                          </Text>
                          <Text
                            className="font-medium text-bluegray_100 text-left w-[auto]"
                            variant="body1"
                          >
                            378r93u3u
                          </Text>
                        </div>
                        <div className="flex flex-row items-center justify-start md:w-[100%] sm:w-[100%] w-[51%]">
                          <Text
                            className="font-medium text-bluegray_100 text-left w-[auto]"
                            variant="body1"
                          >
                            Type :
                          </Text>
                          <Text
                            className="font-medium ml-[4px] text-bluegray_100 text-left w-[auto]"
                            variant="body1"
                          >
                            Stock
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-row gap-[38px] items-end justify-between w-[100%]">
                        <div className="flex flex-col items-start justify-start w-[auto]">
                          <Text
                            className="text-bluegray_50 text-left w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            Venue Details
                          </Text>
                          <div className="flex flex-row items-center justify-start mt-[10px] md:w-[100%] sm:w-[100%] w-[73%]">
                            <Text
                              className="font-medium text-bluegray_100 text-left w-[auto]"
                              variant="body1"
                            >
                              Name :
                            </Text>
                            <Text
                              className="font-medium ml-[4px] text-bluegray_100 text-left w-[auto]"
                              variant="body1"
                            >
                              Tesla
                            </Text>
                          </div>
                          <div className="flex flex-row items-start justify-start mt-[16px] md:w-[100%] sm:w-[100%] w-[65%]">
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
                          <div className="flex flex-row items-center justify-start mt-[18px] md:w-[100%] sm:w-[100%] w-[70%]">
                            <Text
                              className="font-medium text-bluegray_100 text-left w-[auto]"
                              variant="body1"
                            >
                              IMic :
                            </Text>
                            <Text
                              className="font-medium ml-[4px] text-bluegray_100 text-left w-[auto]"
                              variant="body1"
                            >
                              XMUN
                            </Text>
                          </div>
                          <div className="flex flex-row items-start justify-start mt-[16px] md:w-[100%] sm:w-[100%] w-[75%]">
                            <Text
                              className="font-medium text-bluegray_100 text-left w-[auto]"
                              variant="body1"
                            >
                              Is Open :
                            </Text>
                            <Text
                              className="font-medium ml-[4px] mt-[2px] text-green_300 text-left w-[auto]"
                              variant="body1"
                            >
                              Yes
                            </Text>
                          </div>
                          <div className="flex flex-row items-center justify-start mt-[16px] md:w-[100%] sm:w-[100%] w-[89%]">
                            <Text
                              className="font-medium text-bluegray_100 text-left w-[auto]"
                              variant="body1"
                            >
                              Tradeable :
                            </Text>
                            <Text
                              className="font-medium ml-[4px] text-green_300 text-left w-[auto]"
                              variant="body1"
                            >
                              Yes
                            </Text>
                          </div>
                          <div className="flex flex-row items-center justify-start mt-[16px] md:w-[100%] sm:w-[100%] w-[89%]">
                            <Text
                              className="font-medium text-bluegray_100 text-left w-[auto]"
                              variant="body1"
                            >
                              Currency :
                            </Text>
                            <Text
                              className="font-medium ml-[4px] text-bluegray_100 text-left w-[auto]"
                              variant="body1"
                            >
                              USD
                            </Text>
                          </div>
                        </div>
                        <Button className="cursor-pointer font-medium min-w-[79px] mt-[200px] text-[14px] text-center text-white_A700 w-[auto]">
                          Buy now
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray_900 flex flex-1 flex-col items-center justify-start p-[24px] sm:px-[20px] rounded-radius12 w-[100%]">
                    <div className="flex flex-col gap-[32px] items-start justify-start w-[100%]">
                      <div className="flex flex-col gap-[16px] items-start justify-start md:w-[100%] sm:w-[100%] w-[77%]">
                        <div className="flex flex-row items-center justify-start md:w-[100%] sm:w-[100%] w-[54%]">
                          <Text
                            className="font-medium text-bluegray_100 text-left w-[auto]"
                            variant="body1"
                          >
                            Name :
                          </Text>
                          <Text
                            className="font-medium ml-[4px] text-bluegray_100 text-left w-[auto]"
                            variant="body1"
                          >
                            Apple
                          </Text>
                        </div>
                        <div className="flex flex-row items-center justify-start md:w-[100%] sm:w-[100%] w-[46%]">
                          <Text
                            className="font-medium text-bluegray_100 text-left w-[auto]"
                            variant="body1"
                          >
                            Title :
                          </Text>
                          <Text
                            className="font-medium ml-[4px] text-bluegray_100 text-left w-[auto]"
                            variant="body1"
                          >
                            AAPL
                          </Text>
                        </div>
                        <div className="flex flex-row items-center justify-evenly w-[100%]">
                          <Text
                            className="font-medium text-bluegray_100 text-left w-[auto]"
                            variant="body1"
                          >
                            ISIN Number :
                          </Text>
                          <Text
                            className="font-medium text-bluegray_100 text-left w-[auto]"
                            variant="body1"
                          >
                            378r93u3u
                          </Text>
                        </div>
                        <div className="flex flex-row items-center justify-start md:w-[100%] sm:w-[100%] w-[51%]">
                          <Text
                            className="font-medium text-bluegray_100 text-left w-[auto]"
                            variant="body1"
                          >
                            Type :
                          </Text>
                          <Text
                            className="font-medium ml-[4px] text-bluegray_100 text-left w-[auto]"
                            variant="body1"
                          >
                            Stock
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-row gap-[38px] items-end justify-between w-[100%]">
                        <div className="flex flex-col items-start justify-start w-[auto]">
                          <Text
                            className="text-bluegray_50 text-left w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            Venue Details
                          </Text>
                          <div className="flex flex-row items-center justify-start mt-[10px] md:w-[100%] sm:w-[100%] w-[73%]">
                            <Text
                              className="font-medium text-bluegray_100 text-left w-[auto]"
                              variant="body1"
                            >
                              Name :
                            </Text>
                            <Text
                              className="font-medium ml-[4px] text-bluegray_100 text-left w-[auto]"
                              variant="body1"
                            >
                              Tesla
                            </Text>
                          </div>
                          <div className="flex flex-row items-start justify-start mt-[16px] md:w-[100%] sm:w-[100%] w-[65%]">
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
                          <div className="flex flex-row items-center justify-start mt-[18px] md:w-[100%] sm:w-[100%] w-[70%]">
                            <Text
                              className="font-medium text-bluegray_100 text-left w-[auto]"
                              variant="body1"
                            >
                              IMic :
                            </Text>
                            <Text
                              className="font-medium ml-[4px] text-bluegray_100 text-left w-[auto]"
                              variant="body1"
                            >
                              XMUN
                            </Text>
                          </div>
                          <div className="flex flex-row items-start justify-start mt-[16px] md:w-[100%] sm:w-[100%] w-[75%]">
                            <Text
                              className="font-medium text-bluegray_100 text-left w-[auto]"
                              variant="body1"
                            >
                              Is Open :
                            </Text>
                            <Text
                              className="font-medium ml-[4px] mt-[2px] text-green_300 text-left w-[auto]"
                              variant="body1"
                            >
                              Yes
                            </Text>
                          </div>
                          <div className="flex flex-row items-center justify-start mt-[16px] md:w-[100%] sm:w-[100%] w-[89%]">
                            <Text
                              className="font-medium text-bluegray_100 text-left w-[auto]"
                              variant="body1"
                            >
                              Tradeable :
                            </Text>
                            <Text
                              className="font-medium ml-[4px] text-green_300 text-left w-[auto]"
                              variant="body1"
                            >
                              Yes
                            </Text>
                          </div>
                          <div className="flex flex-row items-center justify-start mt-[16px] md:w-[100%] sm:w-[100%] w-[89%]">
                            <Text
                              className="font-medium text-bluegray_100 text-left w-[auto]"
                              variant="body1"
                            >
                              Currency :
                            </Text>
                            <Text
                              className="font-medium ml-[4px] text-bluegray_100 text-left w-[auto]"
                              variant="body1"
                            >
                              USD
                            </Text>
                          </div>
                        </div>
                        <Button className="cursor-pointer font-medium min-w-[79px] mt-[200px] text-[14px] text-center text-white_A700 w-[auto]">
                          Buy now
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray_900 flex flex-1 flex-col items-center justify-start p-[24px] sm:px-[20px] rounded-radius12 w-[100%]">
                    <div className="flex flex-col gap-[32px] items-start justify-start w-[100%]">
                      <div className="flex flex-col gap-[16px] items-start justify-start md:w-[100%] sm:w-[100%] w-[77%]">
                        <div className="flex flex-row items-center justify-start md:w-[100%] sm:w-[100%] w-[62%]">
                          <Text
                            className="font-medium text-bluegray_100 text-left w-[auto]"
                            variant="body1"
                          >
                            Name :
                          </Text>
                          <Text
                            className="font-medium ml-[4px] text-bluegray_100 text-left w-[auto]"
                            variant="body1"
                          >
                            Amazon
                          </Text>
                        </div>
                        <div className="flex flex-row items-center justify-start md:w-[100%] sm:w-[100%] w-[48%]">
                          <Text
                            className="font-medium text-bluegray_100 text-left w-[auto]"
                            variant="body1"
                          >
                            Title :
                          </Text>
                          <Text
                            className="font-medium ml-[4px] text-bluegray_100 text-left w-[auto]"
                            variant="body1"
                          >
                            AMZN
                          </Text>
                        </div>
                        <div className="flex flex-row items-center justify-evenly w-[100%]">
                          <Text
                            className="font-medium text-bluegray_100 text-left w-[auto]"
                            variant="body1"
                          >
                            ISIN Number :
                          </Text>
                          <Text
                            className="font-medium text-bluegray_100 text-left w-[auto]"
                            variant="body1"
                          >
                            378r93u3u
                          </Text>
                        </div>
                        <div className="flex flex-row items-center justify-start md:w-[100%] sm:w-[100%] w-[51%]">
                          <Text
                            className="font-medium text-bluegray_100 text-left w-[auto]"
                            variant="body1"
                          >
                            Type :
                          </Text>
                          <Text
                            className="font-medium ml-[4px] text-bluegray_100 text-left w-[auto]"
                            variant="body1"
                          >
                            Stock
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-row gap-[38px] items-end justify-between w-[100%]">
                        <div className="flex flex-col items-start justify-start w-[auto]">
                          <Text
                            className="text-bluegray_50 text-left w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            Venue Details
                          </Text>
                          <div className="flex flex-row items-center justify-start mt-[10px] md:w-[100%] sm:w-[100%] w-[73%]">
                            <Text
                              className="font-medium text-bluegray_100 text-left w-[auto]"
                              variant="body1"
                            >
                              Name :
                            </Text>
                            <Text
                              className="font-medium ml-[4px] text-bluegray_100 text-left w-[auto]"
                              variant="body1"
                            >
                              Tesla
                            </Text>
                          </div>
                          <div className="flex flex-row items-start justify-start mt-[16px] md:w-[100%] sm:w-[100%] w-[65%]">
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
                          <div className="flex flex-row items-center justify-start mt-[18px] md:w-[100%] sm:w-[100%] w-[70%]">
                            <Text
                              className="font-medium text-bluegray_100 text-left w-[auto]"
                              variant="body1"
                            >
                              IMic :
                            </Text>
                            <Text
                              className="font-medium ml-[4px] text-bluegray_100 text-left w-[auto]"
                              variant="body1"
                            >
                              XMUN
                            </Text>
                          </div>
                          <div className="flex flex-row items-start justify-start mt-[16px] md:w-[100%] sm:w-[100%] w-[75%]">
                            <Text
                              className="font-medium text-bluegray_100 text-left w-[auto]"
                              variant="body1"
                            >
                              Is Open :
                            </Text>
                            <Text
                              className="font-medium ml-[4px] mt-[2px] text-green_300 text-left w-[auto]"
                              variant="body1"
                            >
                              Yes
                            </Text>
                          </div>
                          <div className="flex flex-row items-center justify-start mt-[16px] md:w-[100%] sm:w-[100%] w-[89%]">
                            <Text
                              className="font-medium text-bluegray_100 text-left w-[auto]"
                              variant="body1"
                            >
                              Tradeable :
                            </Text>
                            <Text
                              className="font-medium ml-[4px] text-green_300 text-left w-[auto]"
                              variant="body1"
                            >
                              Yes
                            </Text>
                          </div>
                          <div className="flex flex-row items-center justify-start mt-[16px] md:w-[100%] sm:w-[100%] w-[89%]">
                            <Text
                              className="font-medium text-bluegray_100 text-left w-[auto]"
                              variant="body1"
                            >
                              Currency :
                            </Text>
                            <Text
                              className="font-medium ml-[4px] text-bluegray_100 text-left w-[auto]"
                              variant="body1"
                            >
                              USD
                            </Text>
                          </div>
                        </div>
                        <Button className="cursor-pointer font-medium min-w-[79px] mt-[200px] text-[14px] text-center text-white_A700 w-[auto]">
                          Buy now
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray_900 flex flex-1 flex-col items-center justify-start p-[24px] sm:px-[20px] rounded-radius12 w-[100%]">
                    <div className="flex flex-col gap-[32px] items-start justify-start w-[100%]">
                      <div className="flex flex-col gap-[16px] items-start justify-start md:w-[100%] sm:w-[100%] w-[77%]">
                        <div className="flex flex-row items-center justify-start md:w-[100%] sm:w-[100%] w-[70%]">
                          <Text
                            className="font-medium text-bluegray_100 text-left w-[auto]"
                            variant="body1"
                          >
                            Name :
                          </Text>
                          <Text
                            className="font-medium ml-[4px] text-bluegray_100 text-left w-[auto]"
                            variant="body1"
                          >
                            Microsoft
                          </Text>
                        </div>
                        <div className="flex flex-row items-center justify-start md:w-[100%] sm:w-[100%] w-[47%]">
                          <Text
                            className="font-medium text-bluegray_100 text-left w-[auto]"
                            variant="body1"
                          >
                            Title :
                          </Text>
                          <Text
                            className="font-medium ml-[4px] text-bluegray_100 text-left w-[auto]"
                            variant="body1"
                          >
                            MSFT
                          </Text>
                        </div>
                        <div className="flex flex-row items-center justify-evenly w-[100%]">
                          <Text
                            className="font-medium text-bluegray_100 text-left w-[auto]"
                            variant="body1"
                          >
                            ISIN Number :
                          </Text>
                          <Text
                            className="font-medium text-bluegray_100 text-left w-[auto]"
                            variant="body1"
                          >
                            378r93u3u
                          </Text>
                        </div>
                        <div className="flex flex-row items-center justify-start md:w-[100%] sm:w-[100%] w-[51%]">
                          <Text
                            className="font-medium text-bluegray_100 text-left w-[auto]"
                            variant="body1"
                          >
                            Type :
                          </Text>
                          <Text
                            className="font-medium ml-[4px] text-bluegray_100 text-left w-[auto]"
                            variant="body1"
                          >
                            Stock
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-row gap-[38px] items-end justify-between w-[100%]">
                        <div className="flex flex-col items-start justify-start w-[auto]">
                          <Text
                            className="text-bluegray_50 text-left w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            Venue Details
                          </Text>
                          <div className="flex flex-row items-center justify-start mt-[10px] md:w-[100%] sm:w-[100%] w-[73%]">
                            <Text
                              className="font-medium text-bluegray_100 text-left w-[auto]"
                              variant="body1"
                            >
                              Name :
                            </Text>
                            <Text
                              className="font-medium ml-[4px] text-bluegray_100 text-left w-[auto]"
                              variant="body1"
                            >
                              Tesla
                            </Text>
                          </div>
                          <div className="flex flex-row items-start justify-start mt-[16px] md:w-[100%] sm:w-[100%] w-[65%]">
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
                          <div className="flex flex-row items-center justify-start mt-[18px] md:w-[100%] sm:w-[100%] w-[70%]">
                            <Text
                              className="font-medium text-bluegray_100 text-left w-[auto]"
                              variant="body1"
                            >
                              IMic :
                            </Text>
                            <Text
                              className="font-medium ml-[4px] text-bluegray_100 text-left w-[auto]"
                              variant="body1"
                            >
                              XMUN
                            </Text>
                          </div>
                          <div className="flex flex-row items-start justify-start mt-[16px] md:w-[100%] sm:w-[100%] w-[75%]">
                            <Text
                              className="font-medium text-bluegray_100 text-left w-[auto]"
                              variant="body1"
                            >
                              Is Open :
                            </Text>
                            <Text
                              className="font-medium ml-[4px] mt-[2px] text-green_300 text-left w-[auto]"
                              variant="body1"
                            >
                              Yes
                            </Text>
                          </div>
                          <div className="flex flex-row items-center justify-start mt-[16px] md:w-[100%] sm:w-[100%] w-[89%]">
                            <Text
                              className="font-medium text-bluegray_100 text-left w-[auto]"
                              variant="body1"
                            >
                              Tradeable :
                            </Text>
                            <Text
                              className="font-medium ml-[4px] text-green_300 text-left w-[auto]"
                              variant="body1"
                            >
                              Yes
                            </Text>
                          </div>
                          <div className="flex flex-row items-center justify-start mt-[16px] md:w-[100%] sm:w-[100%] w-[89%]">
                            <Text
                              className="font-medium text-bluegray_100 text-left w-[auto]"
                              variant="body1"
                            >
                              Currency :
                            </Text>
                            <Text
                              className="font-medium ml-[4px] text-bluegray_100 text-left w-[auto]"
                              variant="body1"
                            >
                              USD
                            </Text>
                          </div>
                        </div>
                        <Button className="cursor-pointer font-medium min-w-[79px] mt-[200px] text-[14px] text-center text-white_A700 w-[auto]">
                          Buy now
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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

export default DesktopPage;

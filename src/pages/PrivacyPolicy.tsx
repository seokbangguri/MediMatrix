import { useEffect } from "react";
import { Footer } from "../components";
export default function PrivacyPolicy() {

  useEffect(() => {
    // Scroll to the top of the page on component mount
    window.scrollTo(0, 0);
  }, []);

  return <>
    <div className="static w-screen pt-[100px]">
      <div className="w-[1000px] md:w-[1445px] p-5 mb-14 bg-white mx-auto">
        <section>
          <h2 className="text-7xl font-semibold my-16">이용약관</h2>
          <hr />
          <h4 className="text-2xl font-semibold my-5">GoQba Medical 이용해 주셔서 감사합니다!</h4>
          <p className='max-w-[1000px] mt-5 text-black text-lg'>
            본 이용약관은 귀하의 GoQba Medical 및 기타 서비스 이용에 적용됩니다.
            당사 웹사이트에 액세스하고 사용함으로써 귀하는 다음 약관을 준수할 것에 동의하고
            다음 이용 약관을 준수할 것에 동의합니다.
            본 약관의 일부에 동의하지 않는 경우 당사 웹사이트를 이용하지 마십시오.
          </p>
          <p className='max-w-[1000px] mt-5 text-black text-lg'>
            당사의 개인정보 처리방침은 당사가 개인정보를 수집하고 사용하는 방법을 설명합니다.
            본 약관의 일부를 구성하지는 않지만,
            반드시 읽어보셔야 하는 중요한 문서입니다.
          </p>
          <ol className=" list-decimal ml-4 flex flex-col mt-5 space-y-5">
            <li>
              <h5 className="font-bold text-xl">Use of the website:</h5>
              <ul className='list-disc list-inside space-y-2 mt-2 max-w-[1000px]'>
                <li className="text-lg">
                  귀하는 웹사이트를 합법적인
                  합법적인 목적과 제3자의 권리를 침해하지 않는 방식으로 웹사이트를 사용하는 데 동의합니다.
                </li>
                <li className="text-lg">
                  본 웹사이트의 무단 사용은 손해배상 청구 및/또는 형사 범죄에 해당할 수 있습니다.
                </li>
              </ul>
            </li>
            <li>
              <h5 className="font-bold text-xl">Intellectual Property:</h5>
              <ul className='list-disc list-inside space-y-2 mt-2 max-w-[1000px]'>
                <li className="text-lg">
                  텍스트, 그래픽, 로고, 이미지 및 소프트웨어를 포함하되 이에 국한되지 않는 이 웹사이트의 모든 콘텐츠는 GoQba Medica의 재산입니다,
                  이미지 및 소프트웨어를 포함한 모든 콘텐츠는 고큐바 메디컬의 자산이며 지적 재산권법의 보호를 받습니다.
                  및/또는 형사 범죄에 해당할 수 있습니다.
                </li>
              </ul>
            </li>

            <li>
              <h5 className="font-bold text-xl">User Content:</h5>
              <ul className='list-disc list-inside space-y-2 mt-2 max-w-[1000px]'>
                <li className="text-lg">
                  사용자가 당사 웹사이트를 통해 제출한 모든 콘텐츠는 사용자의 자산으로 유지됩니다. 콘텐츠를 제출함으로써 사용자는 당사에 해당 콘텐츠를 사용, 복제, 각색, 게시, 번역 및 배포할 수 있는 전 세계적이고 취소 불가능한 비독점적이며 로열티가 없는 라이선스를 부여하는 것입니다.
                </li>
              </ul>
            </li>

            <li>
              <h5 className="font-bold text-xl">Limitation of Liability:</h5>
              <ul className='list-disc list-inside space-y-2 mt-2 max-w-[1000px]'>
                <li className="text-lg">
                  GoQba Medical은 귀하의 웹사이트 액세스 또는 사용으로 인해 발생하는 직접적, 간접적, 부수적, 결과적 또는 징벌적 손해에 대해 책임을 지지 않습니다.
                </li>
              </ul>
            </li>

            <li>
              <h5 className="font-bold text-xl">Links to Other Websites:</h5>
              <ul className='list-disc list-inside space-y-2 mt-2 max-w-[1000px]'>
                <li className="text-lg">
                  당사 웹사이트에는 타사 웹사이트로 연결되는 링크가 포함되어 있을 수 있습니다. 이러한 링크는 사용자의 편의를 위해 제공되며, 당사는 이러한 웹사이트의 콘텐츠를 보증하지 않습니다.
                </li>
              </ul>
            </li>

            <li>
              <h5 className="font-bold text-xl">Changes to Terms:</h5>
              <ul className='list-disc list-inside space-y-2 mt-2 max-w-[1000px]'>
                <li className="text-lg">
                  당사는 언제든지 통지 없이 본 약관을 수정할 수 있는 권리를 보유합니다. 본 약관을 정기적으로 검토하는 것은 회원님의 책임입니다.
                </li>
              </ul>
            </li>

            <li>
              <h5 className="font-bold text-xl">Governing Law:</h5>
              <ul className='list-disc list-inside space-y-2 mt-2 max-w-[1000px]'>
                <li className="text-lg">
                  본 약관은 관할 법률의 적용을 받으며 그에 따라 해석됩니다.
                </li>
              </ul>
            </li>
          </ol>
        </section>
        <section>
          <h2 className="text-7xl font-semibold my-16">개인정보 보호정책</h2>
          <hr />
          <h4 className="text-2xl my-5">GoQba Medical의 개인정보 보호정책에 오신 것을 환영합니다!</h4>
          <p className='max-w-[1000px] mt-5 text-black text-lg'>
            본 개인정보 처리방침은 당사가 귀하의 개인정보를 수집, 사용, 공개 및 보호하는 방법을 설명합니다.
          </p>
          <p className='max-w-[1000px] mt-5 text-black text-lg'>
            당사 웹사이트를 이용함으로써 귀하는 당사의 이용약관 및 개인정보처리방침에 동의하게 됩니다.
          </p>
          <ol className=" list-decimal ml-4 flex flex-col mt-5 space-y-5">
            <li>
              <h5 className="font-bold text-xl">Information We Collect:</h5>
              <ul className='list-disc list-inside space-y-2 mt-2 max-w-[1000px]'>
                <li className="text-lg">
                  당사는 귀하가 당사 웹사이트 또는 서비스를 이용할 때 귀하의 이름, 이메일 주소 및 기타 세부 정보와 같은 개인 정보를 수집할 수 있습니다.
                </li>
              </ul>
            </li>
            <li>
              <h5 className="font-bold text-xl">How We Use Your Information:</h5>
              <ul className='list-disc list-inside space-y-2 mt-2 max-w-[1000px]'>
                <li className="text-lg">
                  당사는 귀하의 정보를 사용하여 서비스를 제공 및 개선하고, 귀하의 경험을 맞춤화하고, 귀하와 소통합니다.
                </li>
              </ul>
            </li>

            <li>
              <h5 className="font-bold text-xl">Sharing Your Information:</h5>
              <ul className='list-disc list-inside space-y-2 mt-2 max-w-[1000px]'>
                <li className="text-lg">
                  당사는 법률에서 요구하는 경우를 제외하고는 귀하의 동의 없이 귀하의 개인정보를 제3자에게 판매, 거래 또는 양도하지 않습니다.
                </li>
              </ul>
            </li>

            <li>
              <h5 className="font-bold text-xl">Security:</h5>
              <ul className='list-disc list-inside space-y-2 mt-2 max-w-[1000px]'>
                <li className="text-lg">
                  당사는 귀하의 개인정보를 보호하기 위해 보안 조치를 시행합니다. 그러나 인터넷을 통한 데이터 전송이나 저장 방식이 100% 안전한 것은 아닙니다.
                </li>
              </ul>
            </li>

            <li>
              <h5 className="font-bold text-xl">Cookies:</h5>
              <ul className='list-disc list-inside space-y-2 mt-2 max-w-[1000px]'>
                <li className="text-lg">
                  당사 웹사이트는 사용자 경험을 향상시키기 위해 쿠키를 사용합니다. 쿠키를 허용하거나 거부하도록 선택할 수 있습니다.
                </li>
              </ul>
            </li>

            <li>
              <h5 className="font-bold text-xl">Your Choices:</h5>
              <ul className='list-disc list-inside space-y-2 mt-2 max-w-[1000px]'>
                <li className="text-lg">
                  브라우저 설정을 조정하고 특정 기능을 선택 해제하여 정보 수집 및 사용을 제어할 수 있습니다.
                </li>
              </ul>
            </li>
            <li>
              <h5 className="font-bold text-xl">Link to other websites:</h5>
              <ul className='list-disc list-inside space-y-2 mt-2 max-w-[1000px]'>
                <li className="text-lg">
                  서비스에는 소셜 미디어 서비스("제3자 사이트")를 포함하여 고큐바 메디컬이 운영하거나 통제하지 않는 다른 웹사이트로 연결되는 링크가 포함될 수 있습니다. 귀하가 제3자 사이트와 공유하는 정보는 본 개인정보 보호정책이 아닌 제3자 사이트의 특정 개인정보 보호정책 및 서비스 약관의 적용을 받습니다. 이러한 링크를 제공한다고 해서 당사가 이러한 사이트를 보증하거나 검토했음을 의미하지는 않습니다. 제3자 사이트의 개인정보 보호 관행 및 정책에 대한 정보는 해당 제3자 사이트에 직접 문의하시기 바랍니다.
                </li>
              </ul>
            </li>

            <li>
              <h5 className="font-bold text-xl">Changes to Privacy Policy:</h5>
              <ul className='list-disc list-inside space-y-2 mt-2 max-w-[1000px]'>
                <li className="text-lg">
                  당사는 본 개인정보 처리방침을 수시로 업데이트할 수 있습니다. 업데이트할 경우, 관련 법률에 따라 다른 유형의 고지가 요구되지 않는 한 이 페이지에 업데이트된 버전을 게시합니다.
                </li>
              </ul>
            </li>

            <li>
              <h5 className="font-bold text-xl">Contact Us:</h5>
              <ul className='list-disc list-inside space-y-2 mt-2 max-w-[1000px]'>
                <li className="text-lg">
                  본 개인정보 처리방침에서 아직 다루지 않은 질문이나 우려 사항이 있는 경우 지원팀에 문의하시기 바랍니다.
                </li>
              </ul>
            </li>
          </ol>
        </section>

      </div>
      <Footer />
    </div>
  </>
};



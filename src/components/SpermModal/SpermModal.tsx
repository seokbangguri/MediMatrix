import "../../../src/index.css";
import { aclass, bclass, cclass, dclass, pgt } from "../../assets";
import {Button} from "../../components"
import { useState } from "react";

const SpermModal = () => {
    const [visibleModal, setVisibleModal] = useState(true);
  const sectionClasses = `fixed w-screen h-screen bg-zinc-700 bg-opacity-90 z-50 flex items-center ${visibleModal ? '' : 'hidden'}`;

  const handleModalButton = () => {
    setVisibleModal(false);
  };

  return (
    <div className={sectionClasses}>
      <div className="flex-col bg-white h-5/6 w-[800px] rounded-sm overflow-scroll mx-auto flex items-center">
              <div className="p-10 text-black">
                  <div>
                      <span className="font-semibold text-xl">소개</span>
                      <p className="text-lg py-5">
                          인공지능 방법으로 정자의 운동 동영상을 분석하고 이를 기반으로 한 정자의 염색체 이상 발생 및 생산능력 예측해 난인 진단을 하는 도구입니다.<br /><br />
                          환자의 나이 및 정자 운동 동영상을 제공 해주시면 정자의 염색체 이상 발생 여부를 예측하고 원인 불명 남성 난임을 진단 할 수 있습니다.
                      </p>
                  </div>
                  <hr />
                  <div>
                      <span className="font-semibold text-xl">클래스</span>
                        <ul className="text-lg py-5">
                          <li>정자의 행동패턴을 4가지의 클래스 구분하여 분석을 합니다.</li>
                          <li>A 클래스 (Active) : 정자의 운동 궤적이 직선 형태를 나타냅니다 직진성이 강합니다.</li>
                          <li>B 클래스 (Semi-Active) : 회전 때문에 정자 운동 궤적이 A 클래스보다 약한 직진성을 보입니다.</li>
                          <li>C 클래스 (In-Active) : 강한 회전 운동으로 인해 직진성은 거의 없으나, D 클래스에 비해 방향성은 갖고 있는 편입니다.</li>
                          <li>D 클래스 (Non-Active) : 방향성이 없는 회전 운동을 하며, 원래 위치에서 맴도는 운동 양상을 보입니다.</li>
                        </ul>
                        <hr/>
                        <div className="flex flex-row p-3 justify-between">
                          <div className="flex flex-col items-center">
                            <span>A클래스</span>
                              <img className="w-40" src={aclass} />
                          </div>
                          <div className="flex flex-col items-center">
                            <span>B클래스</span>
                              <img className="w-40" src={bclass} />
                          </div>
                          <div className="flex flex-col items-center">
                            <span>C클래스</span>
                              <img className="w-40" src={cclass} />
                          </div>
                          <div className="flex flex-col items-center">
                            <span>D클래스</span>
                              <img className="w-40" src={dclass} />
                          </div>
                        </div>
                  </div>
                  <hr />
                  <div>
                      <span className="font-semibold text-xl">PGT-A</span>
                      <p className="text-lg py-5">
                          PGT-A 는 배아를 선별하여 배아를 이식할 수 있는 염색체 정상 배아를 선택할 수 있게 해줍니다.<br />
                          PGT-A 만으로는 전이가 가능한 염색체 정상 배아의 수를 증가시키지 않습니다. PGT-A 테스트는 두 가지 가능한 결과를 보여줍니다.<br />
                          PGT-A 이후의 임신율은 매우 높습니다.<br /><br />
                      </p>
                          <ul className="list-disc text-sm px-5">
                              <li>유배체(Euploid): 배위체 또는 "정상" 결과는 배아 생검에서 23쌍의 염색체가 검출되었음을 의미합니다.</li>
                              <li>뉴플로이드 (Aneuploid): 뉴플로이드 또는 "이상" 결과는 배아 생검에서 적어도 하나의 염색체 이상이 검출되었음을 의미합니다.</li>
                          </ul>
                          <hr/>
                          <img src={pgt} className="p-3" />
                  </div>
                  <hr />
                  <div>
                      <span className="font-semibold text-xl">참고문헌</span>
                      <p className="text-lg py-5">
                          Dahdouh, Elias M. "Preimplantation genetic testing for aneuploidy: a review of the evidence." Obstetrics & Gynecology 137.3 (2021): 528-534.<br /><br />

                          Gleicher, Norbert, Pasquale Patrizio, and Ali Brivanlou. "Preimplantation genetic testing for aneuploidy–a castle built on sand." Trends in molecular medicine 27.8 (2021): 731-742.<br /><br />

                          Marin, Diego, Jia Xu, and Nathan R. Treff. "Preimplantation genetic testing for aneuploidy: a review of published blastocyst reanalysis concordance data." Prenatal Diagnosis 41.5 (2021): 545-553.<br /><br />
                      </p>
                  </div>
                  <hr />
              </div>
              <a onClick={handleModalButton}>
                  <Button appearance="custom" styles="mb-10" >확인</Button>
              </a>
      </div>
    </div>
  );
};

export default SpermModal;

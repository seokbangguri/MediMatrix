import React, { useState, useEffect, useRef } from "react";
import { Heading, Text, Button, Footer, Loading } from "../components";
import Swal from "sweetalert2";
import uploadIcon from '../assets/upload-icon.svg';
import hospital from '../contracted';

function Beery() {
    const [visible, setVisible] = useState(false);

    // 페이지가 처음 로딩될 때만 실행되는 함수
    useEffect(() => {
        // 여기에 원하는 동작을 추가하세요.
        const signinSession = sessionStorage.getItem('name');
        const hos = sessionStorage.getItem('hospital');
        if(!signinSession || hos == null){
            Swal.fire({
                title: "로그인 후 이용 가능합니다.",
                icon: "error",
                confirmButtonText: "확인",
            }).then((result) => {
                if (result.isConfirmed) {
                    window.location.href = "/signin";
                }
            });
        } else {
            const selectedHospital = hospital[hos]; // 병원 이름을 사용하여 hospital 객체에서 해당 병원 정보 가져오기
            if (!selectedHospital || !selectedHospital.beery) {
                Swal.fire({
                    title: "Beery와 계약되어 있지 않습니다.",
                    icon: "error",
                    confirmButtonText: "확인",
                }).then((result) => {
                    if (result.isConfirmed) {
                        window.location.href = "/";
                    }
                });
            }
        }
    }, []);

    const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = Array.from(e.target.files || []);

        // 허용되는 총 파일 크기 (100MB)
        const maxTotalFileSize = 100 * 1024 * 1024; // 100MB를 바이트 단위로 계산
        let totalFileSize = 0;

        // 업로드된 각 파일의 크기를 합산
        files.forEach((file) => {
            totalFileSize += file.size;
        });

        // 총 파일 크기가 제한을 초과하는 경우
        if (totalFileSize > maxTotalFileSize) {
            Swal.fire({
                title: "파일 크기 초과",
                text: "파일 크기 합계가 100MB를 초과합니다.",
                icon: "error",
            });

            // 업로드할 수 없도록 파일 목록 초기화
            setSelectedFiles([]);
            return;
        }

        // 허용 크기를 초과하지 않는 파일만 선택
        const validFiles = files.filter((file) => {
            return file.size <= maxTotalFileSize;
        });

        // 선택된 파일 목록 업데이트
        setSelectedFiles(validFiles);
    };


    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        const droppedFiles = Array.from(e.dataTransfer.files);

        // 허용되는 총 파일 크기 (100MB)
        const maxTotalFileSize = 100 * 1024 * 1024; // 100MB를 바이트 단위로 계산
        let totalFileSize = 0;

        // 드래그 앤 드롭한 파일 중에서 허용된 확장자만 선택
        const validFiles = droppedFiles.filter((file) => {
            const fileExtension = file.name.split(".").pop()?.toLowerCase();
            const allowedExtensions = ["pdf","jpg","jpeg","png"]; // 허용할 확장자 목록
            const isValidExtension = allowedExtensions.includes(fileExtension || "");

            if (!isValidExtension) {
                Swal.fire({
                    title: "유효하지 않은 파일 형식",
                    text: "PDF 파일 및 이미지 파일만 허용됩니다.",
                    icon: "error",
                });
            }

            // 파일 크기를 합산
            totalFileSize += file.size;

            return isValidExtension;
        });

        // 총 파일 크기가 제한을 초과하는 경우
        if (totalFileSize > maxTotalFileSize) {
            Swal.fire({
                title: "파일 크기 초과",
                text: "파일 크기 합계가 100MB를 초과합니다.",
                icon: "error",
            });

            // 업로드할 수 없도록 파일 목록 초기화
            setSelectedFiles([]);
            return;
        }

        // 선택된 파일 목록 업데이트
        setSelectedFiles(validFiles);
    };


    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
    };

    const handleFileButtonClick = () => {
        // 파일 업로드 버튼 클릭 시, 파일 입력(input) 요소 클릭
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    const handleScoreButtonClick = () => {
        if (selectedFiles.length === 0) {
            // 파일이 없을 때 알림 띄우기
            Swal.fire({
                title: "파일 업로드 필요",
                text: "파일을 업로드해야 채점이 가능합니다.",
                icon: "warning",
            });
        } else {
            setVisible(true);
            // 파일이 있을 때 채점 페이지로 이동
            window.location.href = "/results";
        }
    };

    return (
        <div className="w-screen">
            <Loading context="Beery 채점 중 입니다." hidden={visible} />
            <section className="px-5 lg:px-10 flex flex-col justify-center items-center py-20 h-screen">
                <Heading tag="h2" className="">
                    AI 기반 Beery VMI 답안 채점도구
                </Heading>
                <Text size="m" styles="max-w-[700px] text-center pt-5">
                    채점을 진행하기 위해 환자의 Beery VMI 답안지를 넣어주세요.
                </Text>
                <Text size="s" styles=" mb-16">
                    Beery VMI 답안지는 S(환자번호).pdf 형태 또는 .png .jpg .jpeg 등 형태로 파일 이름을 작성해주세요.
                </Text>
                <Text size="m" styles="text-[#888888] font-bold pb-5">
                    파일 업로드
                </Text>
                <div
                    onDrop={handleDrop}
                    onDragOver={handleDragOver}
                    className="flex justify-center items-center w-[500px] bg-[#ebebeb] rounded-sm border border-dotted shadow-xl p-4"
                >
                    {selectedFiles.length > 0 ? (
                        <div>
                            <p>업로드 목록:</p>
                            <ul>
                                {selectedFiles.map((file, index) => (
                                    <li key={index}>{file.name}</li>
                                ))}
                            </ul>
                        </div>
                    ) : (
                        <button className="flex flex-col items-center gap-2" onClick={handleFileButtonClick}>
                            <img src={uploadIcon} alt="uload file" width={25} />
                            <p className="text-black text-sm">클릭해서 파일을 추가하거나 마우스로 끌어서 추가할 수 있습니다.</p>
                            <span className="text-xs">최대 파일 크기 100MB</span>
                        </button>
                    )}
                    {/* 파일 입력(input) 요소를 숨겨놓고 버튼 클릭 시 파일 선택 창 열리도록 함 */}
                    <input
                        type="file"
                        accept=".pdf, .jpg, .jpeg, .png" // 원하는 파일 형식 지정
                        ref={fileInputRef}
                        style={{ display: "none" }}
                        onChange={handleFileChange}
                        multiple
                    />
                </div>
                <a onClick={handleScoreButtonClick}>
                    <Button apperance="primary" styles="mt-10 lg:w-[300px]">채점</Button>
                </a>
            </section>
            <Footer />
        </div>
    );
}

export default Beery;
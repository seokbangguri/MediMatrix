import React, { useState, useRef } from "react";
import Swal from "sweetalert2";
import uploadIcon from '../../assets/upload-icon.svg';
import { Button, Text } from "../../components";
import axios from "axios";

const apiUrl = process.env.REACT_APP_API_URL;
type finalData = {
    name: string;
    id: string;
    sex: string;
    hospital: string;
    therapists: string;
};

type onVisibleCallback = (b: boolean) => void;

const FileInputBox = ({ finalData, visible }: { finalData: finalData, visible: onVisibleCallback }) => {
    const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = Array.from(e.target.files || []);

        // 허용되는 총 파일 크기 (10MB)
        const maxTotalFileSize = 10 * 1024 * 1024; // 100MB를 바이트 단위로 계산
        let totalFileSize = 0;

        // 업로드된 각 파일의 크기를 합산
        files.forEach((file) => {
            totalFileSize += file.size;
        });

        // 총 파일 크기가 제한을 초과하는 경우
        if (totalFileSize > maxTotalFileSize) {
            Swal.fire({
                title: "파일 크기 초과",
                text: "파일 크기 합계가 10MB를 초과합니다.",
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

        // 허용되는 총 파일 크기 (10MB)
        const maxTotalFileSize = 10 * 1024 * 1024; // 10MB를 바이트 단위로 계산
        let totalFileSize = 0;

        // 드래그 앤 드롭한 파일 중에서 허용된 확장자만 선택
        const validFiles = droppedFiles.filter((file) => {
            const fileExtension = file.name.split(".").pop()?.toLowerCase();
            const allowedExtensions = ["pdf", "jpg", "jpeg", "png"]; // 허용할 확장자 목록
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
                text: "파일 크기 합계가 10MB를 초과합니다.",
                icon: "error",
            });

            // 업로드할 수 없도록 파일 목록 초기화
            setSelectedFiles([]);
            return;
        }
        // 파일 개수가 1개 초과인 경우
        if (droppedFiles.length > 1) {
            Swal.fire({
                title: "파일 개수 초과",
                text: "파일 1개만 업로드 가능합니다.",
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

    const handleScoreButtonClick = async () => {
        if (selectedFiles.length === 0) {
            // 파일이 없을 때 알림 띄우기
            Swal.fire({
                title: "파일 업로드 필요",
                text: "파일을 업로드해야 채점이 가능합니다.",
                icon: "warning",
            });
        } else {
            // 환자 데이터 처리 및 채점 요청
            try {
                visible(true);
                const data = {
                    finalData: finalData, // 환자 정보
                    files: selectedFiles, // 선택된 파일 목록
                };
                console.log(data['finalData']);
                console.log(data['files']);
                const response = await axios.post(apiUrl + '/patientexist', data['finalData'])
                if(response.status === 200) {
                    Swal.fire({
                        title: '채점 완료!',
                        text: '확인을 누르면 결과로 이동합니다.',
                        icon: 'success',
                        confirmButtonText: '확인',
                    }).then(() => {
                        window.location.href = `/results?patientId=${finalData.id}`;
                    });
                } else if(response.status === 201) {
                    Swal.fire({
                        title: '채점 완료!(신규환자)',
                        text: '확인을 누르면 결과로 이동합니다.',
                        icon: 'success',
                        confirmButtonText: '확인',
                    }).then(() => {
                        window.location.href = `/results?patientId=${finalData.id}`;
                    });
                } else {
                    Swal.fire({
                        title: '에러가 발생했습니다!',
                        text: response.data.error,
                        icon: 'error',
                        confirmButtonText: '확인',
                    }).then(() => {
                        window.location.href = "/beery";
                    });
                }
                // const response = await axios.post(apiUrl +'/patientE', data['files'])
                // 응답 완료 후 결과페이지로 이동

            } catch (error) {
                visible(false);
                Swal.fire({
                    title: '에러!',
                    text: '확인을 누르면 메인로 이동합니다.',
                    icon: 'error',
                    confirmButtonText: '확인',
                }).then(() => {
                    window.location.href = "/";
                });

            }

        }
    };

    return (
        <div className="flex flex-col justify-center items-center">
            <Text size="m" styles="text-[#888888] font-bold pb-5 pt-5">
                파일 업로드
            </Text>
            <div
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                className="flex justify-center items-center w-[450px] bg-[#ebebeb] rounded-sm border border-dotted shadow-xl p-4"
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
                        <span className="text-xs">최대 파일 크기 10MB</span>
                    </button>
                )}
                {/* 파일 입력(input) 요소를 숨겨놓고 버튼 클릭 시 파일 선택 창 열리도록 함 */}
                <input
                    type="file"
                    accept=".pdf, .jpg, .jpeg, .png" // 원하는 파일 형식 지정
                    ref={fileInputRef}
                    style={{ display: "none" }}
                    onChange={handleFileChange}
                />
            </div>
            <a onClick={handleScoreButtonClick}>
                <Button appearance="primary" styles="mt-10 lg:w-[300px]">채점</Button>
            </a>
        </div>
    );
};

export default FileInputBox;
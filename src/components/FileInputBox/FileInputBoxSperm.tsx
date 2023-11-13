import React, { useState, useRef, useEffect } from "react";
import Swal from "sweetalert2";
import uploadIcon from '../../assets/upload-icon.svg';
import { Button, Text } from "..";
import axios from "axios";
import { useAppContext } from "../../state";
import { useNavigate } from 'react-router-dom';

const apiUrl = process.env.REACT_APP_API_SPERMS;
type finalData = {
    name: string;
    id: string;
    sex: string;
    hospital: string;
    therapists: string;
};

type onVisibleCallback = (b: boolean) => void;

const FileInputBoxSperm = ({ finalData, visible }: { finalData: finalData, visible: onVisibleCallback }) => {
    const { state, dispatch } = useAppContext();
    const navigate = useNavigate();

    const addData = (newData: string) => {
        dispatch({ type: 'ADD_DATA', payload: newData });
    }
    const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [test, setTest] = useState<any[]>([]);


    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = Array.from(e.target.files || []);

        // 허용되는 총 파일 크기 (10MB)
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
    //마우스로 파일 드래그 앤 드랍
    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        const droppedFiles = Array.from(e.dataTransfer.files);

        // 허용되는 총 파일 크기 (10MB)
        const maxTotalFileSize = 100 * 1024 * 1024; // 10MB를 바이트 단위로 계산
        let totalFileSize = 0;

        // 드래그 앤 드롭한 파일 중에서 허용된 확장자만 선택
        const validFiles = droppedFiles.filter((file) => {
            const fileExtension = file.name.split(".").pop()?.toLowerCase();
            const allowedExtensions = ['mp4', 'csv']; // 허용할 확장자 목록
            const isValidExtension = allowedExtensions.includes(fileExtension || "");

            if (!isValidExtension) {
                Swal.fire({
                    title: "유효하지 않은 파일 형식",
                    text: "동영상 파일과 csv만 허용됩니다.",
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
        // if (droppedFiles.length > 1) {
        //     Swal.fire({
        //         title: "파일 개수 초과",
        //         text: "파일 1개만 업로드 가능합니다.",
        //         icon: "error",
        //     });

        //     // 업로드할 수 없도록 파일 목록 초기화
        //     setSelectedFiles([]);
        //     return;
        // }

        // 선택된 파일 목록 업데이트
        setSelectedFiles(validFiles);
    };
    //파일이 브라우저에서 열리는거 방지
    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
    };

    const handleFileButtonClick = () => {
        // 파일 업로드 버튼 클릭 시, 파일 입력(input) 요소 클릭
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };
    const handlePostData = async (data: finalData) => {
        const response = await axios.post(apiUrl + '/patientexist', data)
        if (response.status === 200) {
            visible(false);
            Swal.fire({
                title: '채점 완료!',
                text: '확인을 누르면 결과로 이동합니다.',
                icon: 'success',
                confirmButtonText: '확인',
            }).then(() => {
                navigate(`/results?patientId=${finalData.id}`);
            });
        } else if (response.status === 201) {
            visible(false);
            Swal.fire({
                title: '채점 완료!(신규환자)',
                text: '확인을 누르면 결과로 이동합니다.',
                icon: 'success',
                confirmButtonText: '확인',
            }).then(() => {
                navigate(`/results?patientId=${finalData.id}`);
            });
        } else {
            visible(false);
            Swal.fire({
                title: '에러가 발생했습니다!',
                text: response.data.error,
                icon: 'error',
                confirmButtonText: '확인',
            }).then(() => {
                navigate("/sperm");
            });
        }
    };

    const handleScoreButtonClick = async () => {
        const mp4Files = selectedFiles.filter(file => file.name.endsWith('.mp4'));
        const csvFiles = selectedFiles.filter(file => file.name.endsWith('.csv'));

        // if (mp4Files.length % 5 == 0 && csvFiles.length == mp4Files.length / 5) {
            try {
                visible(true);
                const data = new FormData();
                mp4Files.forEach((file, index) => {
                    data.append('files', file);
                });
                csvFiles.forEach((file) => {
                    data.append('files', file);
                });
                const response = await axios.post(apiUrl + '/spermVideos', data);
                if (response.status === 200) {
                    visible(false);
                    const result = response.data.data;
                    addData(JSON.parse(result));
                    Swal.fire({
                        title: '분석 완료!',
                        text: '확인을 누르면 결과로 이동합니다.',
                        icon: 'success',
                        confirmButtonText: '확인',
                    }).then(() => {
                        navigate("/resultsSperm");
                    });
                } else if (response.status === 500) {
                    Swal.fire({
                        title: '저장 실패!',
                        icon: 'error',
                        confirmButtonText: '확인',
                    }).then(() => {
                        window.location.reload();
                    });
                } else if (response.status === 400) {
                    Swal.fire({
                        title: '에러!',
                        icon: 'error',
                        confirmButtonText: '확인',
                    }).then(() => {
                        window.location.reload();
                    });
                }
            } catch (error) {
                console.log(error);
                visible(false);
                Swal.fire({
                    title: '에러!',
                    text: '확인을 누르면 메인으로 이동합니다.',
                    icon: 'error',
                    confirmButtonText: '확인',
                }).then(() => {
                    navigate("/");
                });
            }
        // } else {
        //     Swal.fire({
        //         title: "파일 개수 또는 형식 오류",
        //         text: "한 환자 당 mp4 파일은 5개, csv 파일은 1개를 업로드해야 합니다.",
        //         icon: "error",
        //     });
        // }
    };

    return (
        <div className="flex flex-col justify-center items-center">
            <Text size="m" styles="text-[#888888] font-bold pb-5 pt-5">
                파일 업로드
            </Text>
            <div
                onClick={handleFileButtonClick}
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                className="flex justify-center items-center w-[450px] min-h-[200px] bg-[#ebebeb] rounded-sm border border-dotted shadow-xl p-4 cursor-pointer"
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
                    <button className="flex flex-col items-center gap-2">
                        <img src={uploadIcon} alt="uload file" width={25} />
                        <p className="text-black text-sm">클릭해서 파일을 추가하거나 마우스로 끌어서 추가할 수 있습니다.</p>
                        <span className="text-xs">최대 파일 크기 100MB</span>
                    </button>
                )}
                {/* 파일 입력(input) 요소를 숨겨놓고 버튼 클릭 시 파일 선택 창 열리도록 함 */}
                <input
                    type="file"
                    accept='.mp4, .csv' // 원하는 파일 형식 지정
                    ref={fileInputRef}
                    style={{ display: "none" }}
                    onChange={handleFileChange}
                    multiple
                />
            </div>
            <div onClick={handleScoreButtonClick}>
                <Button appearance="primary" styles="mt-10 lg:w-[300px]">AI 분석시작</Button>
            </div>
        </div>
    );
};

export default FileInputBoxSperm;
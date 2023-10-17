import React, { useState, useRef } from "react";
import Swal from "sweetalert2";
import uploadIcon from '../../assets/upload-icon.svg';
import { Button, Loading, Text } from "../../components";

type PatientInfo = {
    name: string;
    id: string;
    sex: string;
    hospital: string | null;
    therapists: string | null;
  };

const FileInputBox = ({ patientInfo }: { patientInfo: PatientInfo }) => {
    const [visible, setVisible] = useState(false);
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
            // window.location.href = "/results";
        }
    };

  return (
    <div className="flex flex-col justify-center items-center">
        <Loading context="Beery 채점 중 입니다." hidden={visible} />
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
    </div>
  );
};

export default FileInputBox;
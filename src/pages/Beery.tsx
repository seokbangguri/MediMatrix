import React, { useState, useRef } from "react";
import { Heading, Text, Button, Footer } from "../components";
import Swal from "sweetalert2";

function Beery () {
    const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
    const fileInputRef = useRef<HTMLInputElement>(null);
  
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const files = Array.from(e.target.files || []);
      setSelectedFiles(files);
    };
  
    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        const droppedFiles = Array.from(e.dataTransfer.files);
    
        // 원하는 확장자를 여기에 지정 (예: pdf)
        const allowedExtensions = ["pdf"];
        
        // 드래그 앤 드롭한 파일 중에서 허용된 확장자만 선택
        const validFiles = droppedFiles.filter((file) => {
          const fileExtension = file.name.split(".").pop()?.toLowerCase();
          return allowedExtensions.includes(fileExtension || "");
        });

        // 유효하지 않은 파일이 있는 경우 경고 메시지 표시
        const invalidFiles = droppedFiles.filter((file) => {
          const fileExtension = file.name.split(".").pop()?.toLowerCase();
          return !allowedExtensions.includes(fileExtension || "");
        });

        if (invalidFiles.length > 0) {
          Swal.fire({
            title: "유효하지 않은 파일 형식",
            text: "PDF 파일만 허용됩니다.",
            icon: "error",
          });
        }
    
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

    return (
        <div className="w-screen">
            <section className="px-5 lg:px-10 flex flex-col justify-center items-center py-20 h-screen">
                <Heading tag="h2" className="">
                    AI 기반 Beery VMI 답안 채점도구
                </Heading>
                <Text size="m" styles="max-w-[600px] text-center pt-5 mb-16">
                    채점을 진행하기 위해 환자의 Beery VMI 답안지를 넣어주세요.<br/>
                    Beery VMI 답안지는 S(환자번호).pdf 형태로 파일 이름을 작성해주세요.
                </Text>
                <Text size="m" styles="text-[#888888] font-bold pb-5">
                    파일 업로드
                </Text>
                    <div
                      onDrop={handleDrop}
                      onDragOver={handleDragOver}
                      className="flex justify-center items-center w-[500px] min-h-[80px] bg-white rounded-md shadow-xl p-5"
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
                        <button onClick={handleFileButtonClick}>
                            <p className="text-[#888888]">클릭해서 파일을 추가하거나 마우스로 끌어서 추가할 수 있습니다.</p>
                        </button>
                      )}
                      {/* 파일 입력(input) 요소를 숨겨놓고 버튼 클릭 시 파일 선택 창 열리도록 함 */}
                      <input
                        type="file"
                        accept=".pdf" // 원하는 파일 형식 지정
                        ref={fileInputRef}
                        style={{ display: "none" }}
                        onChange={handleFileChange}
                      />
                    </div>
                    <a href="/results">
                        <Button apperance="primary" styles="mt-10 lg:w-[300px]">채점</Button>
                    </a>
            </section>
            <Footer />
        </div>
    );
}

export default Beery;
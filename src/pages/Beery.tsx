import React, { useState, useRef } from "react";
import { Heading, Text, Button } from "../components";

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
          alert("You can upload only '*.pdf' files.");
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
        <div className="w-screen lg:max-w-[1445px]">
            <section className="px-5 lg:px-10 flex flex-col justify-center items-center py-20 h-screen">
                <Heading tag="h2" className="">
                    AI-based Beery VMI scoring tool
                </Heading>
                <Text size="m" styles="max-w-[700px] text-center pt-5 mb-16">
                    Please insert the patient's Beery VMI answer sheet to proceed with the grading.
                    Please fill out the file name in S(patient number).pdf form for the answer sheet.
                </Text>
                <Text size="m" styles="text-[#888888] font-bold pb-5">
                    Upload File
                </Text>
                    <div
                      onDrop={handleDrop}
                      onDragOver={handleDragOver}
                      className="flex justify-center items-center w-[500px] min-h-[80px] bg-white rounded-md shadow-xl p-5"
                    >
                      {selectedFiles.length > 0 ? (
                        <div>
                          <p>Selected Files:</p>
                          <ul>
                            {selectedFiles.map((file, index) => (
                              <li key={index}>{file.name}</li>
                            ))}
                          </ul>
                        </div>
                      ) : (
                        <button onClick={handleFileButtonClick}>
                            <p className="text-[#888888]">Click to select PDF file or Drop PDF file</p>
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
                    <Button apperance="primary" styles="mt-10 lg:w-[300px]">SCORE</Button>
            </section>
        </div>
    );
}

export default Beery;
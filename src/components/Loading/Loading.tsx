import "../../../src/index.css";

interface loadingProps {
  context: string,
  hidden: boolean,
}

const Loading = ({ context, hidden }: loadingProps) => {
  const sectionClasses = `fixed inset-0 w-screen h-screen bg-zinc-700 bg-opacity-50 z-50 left-0 top-0 flex justify-center items-center ${hidden ? '' : 'hidden'}`;

  return (
    <div className={sectionClasses}>
      <div className="flex-col flex justify-center items-center bg-zinc-900 bg-opacity-80 p-14 rounded-full w-96 h-96">
        <div id="loadbar" className="loader border-8 border-white border-opacity-30 rounded-full h-32 w-32 animate-spin"></div>
        <div className="py-10 text-white font-bold text-3xl text-center break-keep">{context}</div>
      </div>
    </div>
  );
};

export default Loading;

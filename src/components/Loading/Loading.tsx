import "../../../src/index.css";

interface loadingProps {
    context: string,
    hidden: boolean,
}

const Loading = ({context, hidden}: loadingProps) => {
    const sectionClasses = `w-screen h-screen bg-zinc-700 fixed bg-opacity-50 z-50 flex justify-center items-center ${hidden ? '' : 'hidden'}`;

  return (
    <section className={sectionClasses}>
        <div className="flex-col flex justify-center items-center bg-zinc-900 bg-opacity-80 p-14 rounded-full">
            <div id="loadbar" className="loader border-8 border-white border-opacity-30 rounded-full h-32 w-32 animate-spin"></div>
            <div className="py-10 text-white font-bold text-3xl text-center">{context}<br/>잠시만 기다려주세요.</div>
        </div>
  </section>
  );
};

export default Loading;

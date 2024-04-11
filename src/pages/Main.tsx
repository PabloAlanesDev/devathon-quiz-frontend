import Instruccions from "@/components/Instructions";
import MainForm from "@/components/MainForm";

export default function Main() {
  return (
    <main className="flex justify-content items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-screen">
        <div className="flex flex-col justify-content items-center gap-4 p-5">
          <Instruccions />
        </div>
        <div className="flex flex-col justify-content items-center gap-4 p-5">
          <MainForm />
        </div>
      </div>
    </main>
  );
}

import { CustomInput } from "@/shared/components";
import CustomBtn from "@/shared/components/CustomBtn";

export default function Home() {
  return (
    <main className="h-dvh w-full flex items-center justify-center flex-col gap-4 ">
      <h1>demo</h1>
      <CustomBtn title="Custom button" />
      <CustomInput title="Name" placeholder="Enter your name" />
    </main>
  );
}

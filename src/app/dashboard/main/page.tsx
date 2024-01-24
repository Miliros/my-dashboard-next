import { SimpleWidget } from "@/components/SimpleWidget";

export const metadata = {
  title: "Admin Dashboard",
  description: "SEO Title",
};

export default function MainPage() {
  return (
    <div className="flex items-center justify-center text-black p-2 content-center text-center">
      <div>
        <h1 className="mt-2 text-3xl">Dashboard</h1>
        <span className="text-xl">Información general</span>

        <div className="flex flex-wrap p-2">
          <SimpleWidget />
          <SimpleWidget />
          <SimpleWidget />
          <SimpleWidget />
        </div>
      </div>
    </div>
  );
}

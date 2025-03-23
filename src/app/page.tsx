import { COLOR_PRIMARY } from "@/constants/colors";
import { Code } from "@deemlol/next-icons";

export default function HomePage() {
  return (
    <div className="p-6">
      <div className="min-h-screen bg-white flex items-center justify-center p-6">
        <div className="max-w-2xl w-full bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-[0_0_50px_-12px_rgb(0,0,0,0.12)] border border-gray-100">
          <div className="flex items-center gap-4 mb-6">
            <Code size={24} color={COLOR_PRIMARY} />
            <div className="h-8 w-[2px] bg-gray-200" />
            <div className="text-[#399797] text-sm tracking-wider font-medium">DEV MODULE</div>
          </div>

          <h1 className="text-4xl font-light text-gray-800 mb-4">
            Development in
            <span className="font-medium block mt-2 bg-gradient-to-r from-[#399797] to-[#2d7676] bg-clip-text text-transparent">Progress</span>
          </h1>

          <p className="text-gray-600 leading-relaxed">
            This module is currently under active development. Our team is working
            on implementing core features and ensuring optimal performance for
            seamless integration with your existing systems.
          </p>

          <div className="mt-8 flex items-center gap-3">
            <div className="animate-pulse w-2 h-2 rounded-full bg-[#399797]" />
            <span className="text-gray-500 text-sm">System Active</span>
          </div>
        </div>
      </div>
    </div>
  );
}

import { ReadOnlyPlateEditor } from "@/components/editor/read-only-plate-editor";

export default function Page() {
  return (
    <div className="">
      <div className="h-screen w-full" data-registry="plate">
        <ReadOnlyPlateEditor />
      </div>
    </div>
  );
}

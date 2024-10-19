import React from "react";
import { Grid2x2Check, Handshake, WandSparkles } from "lucide-react";

export default function Break03() {
  return (
    <div className="w-full ">
      <div className="w-full space-y-3 ms:space-y-0 ms:grid grid-cols-2 lmd:grid-cols-3 gap-4 p-5">
        <div className="grid grid-cols-4">
          <div className="col-span-1">
            <Grid2x2Check className="text-sky-900 size-9 ms:size-14" />
          </div>
          <div className="col-span-3">
            <div className="text-sky-800 text-lg  ms:text-2xl font-semibold">
              Essentials
            </div>
            <div>Connecting You to Quality Medical Supplies and Equipment.</div>
          </div>
        </div>

        <div className="grid grid-cols-4">
          <div className="col-span-1">
            <Handshake className="text-sky-900 size-9 ms:size-14" />
          </div>
          <div className="col-span-3">
            <div className="text-sky-800 text-lg  ms:text-2xl font-semibold">
              Solutions
            </div>
            <div>Your Partner in Cars, Machinery, and Electronics.</div>
          </div>
        </div>

        <div className="grid grid-cols-4">
          <div className="col-span-1">
            <WandSparkles className="text-sky-900 size-9 ms:size-14" />
          </div>
          <div className="col-span-3">
            <div className="text-sky-800 text-lg  ms:text-2xl font-semibold">
              Style
            </div>
            <div>Transforming Spaces with Fashion, Furniture, and More.</div>
          </div>
        </div>
      </div>
    </div>
  );
}

"use client"; // Required for Next.js App Router

import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { FC } from "react";

type props = {
  border?: boolean;
};
const Breadcrumb: FC<props> = ({ border = true }) => {
  const pathname = usePathname();
  const router = useRouter();
  const pathSegments = pathname.split("/").filter(Boolean);

  // Remove base paths from the segments
  let adjustedSegments =
    pathSegments[0] === "admin" || pathSegments[0] === "talent"
      ? pathSegments.slice(1)
      : pathSegments;

  adjustedSegments = adjustedSegments.filter((path) => isNaN(Number(path)));
  // Function to clean slugs (remove Ids if present)
  const formatSegment = (segment: string) => {
    const parts = segment.split("-");
    if (parts.length > 1 && /^[a-f0-9]{12,}$/.test(parts[parts.length - 1])) {
      parts.pop();
    }
    return decodeURIComponent(parts.join(" "));
  };

  return (
    <nav
      className={cn(
        "py-3 bg-white sticky top-[72px]",
        border ? "border border-border px-9" : ""
      )}
    >
      <div className="flex items-center">
        <div className="flex">
          <Button
            variant={"ghost"}
            onClick={() => router.back()}
            className=" flex items-center gap-3 pl-0"
          >
            <span className="border border-border rounded-md p-[6px]">
              <Icon icon={"proicons:arrow-left"} fontSize={12} />
            </span>
            <h2 className="text-[#667185] text-sm font-medium">Go Back</h2>
          </Button>
        </div>
        <ol className="flex items-center space-x-2">
          {adjustedSegments.map((segment, index) => {
            const url = `/${pathSegments[0]}/${adjustedSegments
              .slice(0, index + 1)
              .join("/")}`; // Build URL for each breadcrumb
            const isLast = index === adjustedSegments.length - 1; // Check if it's the last link

            return (
              <li key={index} className="flex items-center">
                {!isLast ? (
                  <Link
                    href={url}
                    className="capitalize text-sm font-medium text-[#98A2B3]"
                  >
                    {formatSegment(segment)}
                  </Link>
                ) : (
                  <>
                    <span className="mx-2 text-[#98A2B3]">/</span>
                    <span className="text-primary capitalize text-sm font-medium">
                      {formatSegment(segment)}
                    </span>
                  </>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
};

export default Breadcrumb;

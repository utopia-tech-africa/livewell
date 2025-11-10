import { ArrowDown } from "lucide-react";

export const ScrollIndicator = () => {
  return (
    <div className="flex items-center justify-center text-white md:absolute md:bottom-8 md:left-1/2 md:-translate-x-1/2 md:z-30 w-full">
      <div className="relative w-[100.26px] h-[100.16px]">
        <svg
          viewBox="0 0 120 120"
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* circle path */}
            <path
              id="circlePath"
              d="M60,60 m-45,0 a45,45 0 1,1 90,0 a45,45 0 1,1 -90,0"
            />

            {/* reusable text element */}
            <text
              id="scrollText"
              fontSize="12"
              fill="white"
              letterSpacing="4"
              fontFamily="arial"
              fontWeight="900"
            >
              <textPath
                href="#circlePath"
                startOffset="50%"
                textAnchor="middle"
              >
                • SCROLL{" "}
              </textPath>
            </text>
          </defs>

          {/* use same text element with different rotations */}
          <use href="#scrollText" transform="rotate(0 60 60)" />
          <use href="#scrollText" transform="rotate(120 60 60)" />
          <use href="#scrollText" transform="rotate(240 60 60)" />
        </svg>

        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <ArrowDown className="w-8 h-8 text-white" strokeWidth={2.5} />
        </div>
      </div>
    </div>
  );
};

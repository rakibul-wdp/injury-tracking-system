/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { TBodyMapValue } from "@/types";
import { Tooltip } from "antd";

type TFrontBodyProps = {
  bodyMap: any;
  addPart?: (data: { key: string; value: TBodyMapValue }) => void;
};

const FrontBody = ({ bodyMap, addPart }: TFrontBodyProps) => {
  return (
    <svg
      width="308"
      height="730"
      viewBox="0 0 308 730"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M151.685 1.0006C169.903 0.918086 190.04 9.33609 190.04 27.5536L190.04 49.3121C190.04 49.3121 200.366 48.2057 200.366 62.2198C200.366 74.7587 190.04 79.1844 190.04 79.1844C190.04 87.3444 183.406 94.3304 175.656 99.7074V125.652C175.656 125.652 203.566 132.228 218.067 142.616C232.684 153.088 244.766 159.954 247.939 177.652C257.528 231.126 264.166 278.701 264.166 278.701C264.166 278.701 268.275 289.508 269.329 296.771C272.648 319.636 274.861 356.147 274.861 356.147C274.861 356.147 289.12 365.875 294.776 374.955C298.016 380.156 301.045 389.338 301.045 389.338C301.045 389.338 303.193 394.649 301.045 396.345C299.111 397.873 296.509 397.36 294.776 395.608C290.764 391.55 286.294 383.437 286.294 383.437L298.464 416.997C298.464 416.997 298.324 421.019 296.62 422.529C294.246 424.633 288.507 422.161 288.507 422.161C288.507 422.161 288.816 427.799 286.294 429.168C283.807 430.517 279.287 427.324 279.287 427.324L276.705 421.792C276.705 421.792 275.166 426.47 272.648 426.955C270.494 427.37 267.485 424.742 267.485 424.742L264.166 415.522C264.166 415.522 262.573 420.896 259.741 421.423C257.636 421.815 254.578 419.579 254.578 419.579C254.578 419.579 249.083 399.784 247.939 386.757C247.046 376.57 247.939 360.572 247.939 360.572C247.939 360.572 236.871 333.629 232.45 315.58C228.975 301.39 228.708 293.089 226.181 278.701C221.29 250.851 212.904 207.524 212.904 207.524C212.904 207.524 206.756 246.064 206.635 270.956C206.507 297.138 212.904 337.707 212.904 337.707C212.904 337.707 219.736 373.618 220.649 397.451C222.19 437.67 209.902 492.423 207.742 500.344L202.21 520.628C202.21 520.628 206.828 556.971 204.054 580.003C201.82 598.557 195.982 608.088 192.621 626.471C188.454 649.267 186.352 685.478 186.352 685.478C186.352 685.478 200.366 699.123 204.054 710.924C204.917 713.688 205.964 715.654 204.792 718.3C203.842 720.444 202.677 721.959 200.366 722.357C198.436 722.689 195.572 720.882 195.572 720.882C195.572 720.882 194.298 723.802 192.621 724.57C190.335 725.617 186.352 723.095 186.352 723.095C186.352 723.095 185.008 726.775 182.663 726.782C180.785 726.788 177.87 724.57 177.87 724.57C177.87 724.57 174.9 726.782 172.707 726.782C170.513 726.782 167.544 724.57 167.544 724.57C167.544 724.57 163.637 726.7 160.905 726.782C157.899 726.874 153.53 724.57 153.53 724.57C153.53 724.57 149.134 728.349 145.785 728.258C142.303 728.163 138.04 723.832 138.04 723.832C138.04 723.832 135.775 725.831 133.984 726.045C131.673 726.321 128.452 723.832 128.452 723.832C128.452 723.832 125.283 727.423 122.92 726.782C121.05 726.275 119.601 723.095 119.601 723.095C119.601 723.095 116.577 725.792 114.438 725.307C112.349 724.834 110.75 721.251 110.75 721.251C110.75 721.251 108.423 723.279 106.693 723.095C104.859 722.899 103.005 720.144 103.005 720.144C103.005 720.144 102.432 714.479 103.005 710.924C104.705 700.374 119.601 689.166 119.601 689.166C119.601 689.166 115.381 650.85 111.487 626.471C108.578 608.255 104.857 598.357 103.005 580.003C100.677 556.933 103.005 520.628 103.005 520.628L96.7356 500.344C96.7356 500.344 84.2219 438.29 85.6718 398.189C86.5316 374.41 90.4173 361.356 93.0477 337.707C95.9436 311.671 99.8208 297.152 99.6859 270.956C99.5577 246.049 95.6401 232.296 93.0477 207.524C87.1568 235.234 84.0871 250.825 79.0336 278.701C76.6346 291.934 76.0038 299.49 73.1329 312.629C68.9775 331.647 59.4876 360.572 59.4876 360.572C59.4876 360.572 61.0973 376.564 60.2252 386.757C59.1024 399.879 55.4301 407.04 52.4806 419.579C51.9317 421.912 49.7145 422.883 47.3175 422.898C44.6435 422.915 41.8013 418.841 41.8013 418.841L41.048 421.792C41.048 421.792 37.198 428.053 33.6722 427.324C30.9652 426.763 28.8298 422.161 28.8298 422.161L27.034 427.324C27.034 427.324 23.1602 430.911 20.3957 430.274C16.6168 429.403 16.7078 421.054 16.7078 421.054C16.7078 421.054 13.4273 423.002 11.5447 422.161C10.0456 421.49 8.61701 420.447 8.96316 418.841C13.0191 400.033 20.3957 383.437 20.3957 383.437L9.70075 395.608C9.70075 395.608 5.25033 397.765 3.06249 396.345C-0.13594 394.269 4.90645 386.757 4.90645 386.757L30.7219 356.147C30.7219 356.147 29.6151 319.093 36.2537 296.771C38.3969 289.565 41.2168 286.03 42.892 278.701C51.743 239.977 47.3175 212.318 56.9061 177.652C61.8004 159.957 73.1885 153.11 88.2534 142.616C102.713 132.544 130.067 125.652 130.067 125.652V100.205C122.284 94.7067 115.276 87.4969 114.806 79.1844C114.806 79.1844 103.374 77.709 103.374 62.2198C103.374 49.3121 113.299 49.3121 113.299 49.3121C113.167 42.8058 113.251 35.9398 113.7 27.5536C114.668 9.48021 133.586 1.08258 151.685 1.0006Z"
        fill="#F7F7F7"
      />
      <path
        d="M114.806 79.1844C114.806 79.1844 103.374 77.709 103.374 62.2198C103.374 49.3121 113.299 49.3121 113.299 49.3121M114.806 79.1844C114.15 67.5754 113.493 58.8285 113.299 49.3121M114.806 79.1844C115.276 87.4969 122.284 94.7067 130.067 100.205M190.04 79.1844C190.04 79.1844 200.366 74.7587 200.366 62.2198C200.366 48.2057 190.04 49.3121 190.04 49.3121M190.04 79.1844C190.04 65.4684 190.04 57.7304 190.04 49.3121M190.04 79.1844C190.04 87.3444 183.406 94.3304 175.656 99.7074M190.04 49.3121C190.04 43.2439 190.04 36.8224 190.04 27.5536C190.04 9.33609 169.903 0.918086 151.685 1.0006C133.586 1.08258 114.668 9.48021 113.7 27.5536C113.251 35.9398 113.167 42.8058 113.299 49.3121M130.067 100.205C140.217 107.377 151.685 111.638 151.685 111.638C151.685 111.638 164.772 107.26 175.656 99.7074M130.067 100.205V125.652C130.067 125.652 102.713 132.544 88.2534 142.616C73.1885 153.11 61.8004 159.957 56.9061 177.652C47.3175 212.318 51.743 239.977 42.892 278.701C41.2168 286.03 38.3969 289.565 36.2537 296.771C29.6151 319.093 30.7219 356.147 30.7219 356.147L4.90645 386.757C4.90645 386.757 -0.13594 394.269 3.06249 396.345C5.25033 397.765 9.70075 395.608 9.70075 395.608L20.3957 383.437C20.3957 383.437 13.0191 400.033 8.96316 418.841C8.61701 420.447 10.0456 421.49 11.5447 422.161C13.4273 423.002 16.7078 421.054 16.7078 421.054M16.7078 421.054L27.034 395.608M16.7078 421.054C16.7078 421.054 16.6168 429.403 20.3957 430.274C23.1602 430.911 27.034 427.324 27.034 427.324L28.8298 422.161M35.885 401.877L28.8298 422.161M28.8298 422.161C28.8298 422.161 30.9652 426.763 33.6722 427.324C37.198 428.053 41.048 421.792 41.048 421.792L41.8013 418.841M45.4735 404.459L41.8013 418.841M41.8013 418.841C41.8013 418.841 44.6435 422.915 47.3175 422.898C49.7145 422.883 51.9317 421.912 52.4806 419.579C55.4301 407.04 59.1024 399.879 60.2252 386.757C61.0973 376.564 59.4876 360.572 59.4876 360.572C59.4876 360.572 68.9775 331.647 73.1329 312.629C76.0038 299.49 76.6346 291.934 79.0336 278.701C84.0871 250.825 87.1568 235.234 93.0477 207.524M93.0477 207.524C91.0314 204.067 87.8846 198.673 87.8846 198.673M93.0477 207.524C95.6401 232.296 99.5577 246.049 99.6859 270.956C99.8208 297.152 95.9436 311.671 93.0477 337.707C90.4173 361.356 86.5316 374.41 85.6718 398.189C84.2219 438.29 96.7356 500.344 96.7356 500.344L103.005 520.628C103.005 520.628 100.677 556.933 103.005 580.003C104.857 598.357 108.578 608.255 111.487 626.471C115.381 650.85 119.601 689.166 119.601 689.166C119.601 689.166 104.705 700.374 103.005 710.924C102.432 714.479 103.005 720.144 103.005 720.144C103.005 720.144 104.859 722.899 106.693 723.095C108.423 723.279 110.75 721.251 110.75 721.251M110.75 721.251V716.456M110.75 721.251C110.75 721.251 112.349 724.834 114.438 725.307C116.577 725.792 119.601 723.095 119.601 723.095M119.601 723.095V717.563M119.601 723.095C119.601 723.095 121.05 726.275 122.92 726.782C125.283 727.423 128.452 723.832 128.452 723.832M128.452 723.832V717.563M128.452 723.832C128.452 723.832 131.673 726.321 133.984 726.045C135.775 725.831 138.04 723.832 138.04 723.832M138.04 723.832V716.456M138.04 723.832C138.04 723.832 142.303 728.163 145.785 728.258C149.134 728.349 153.53 724.57 153.53 724.57M153.53 724.57L152.792 689.903M153.53 724.57C153.53 724.57 157.899 726.874 160.905 726.782C163.637 726.7 167.544 724.57 167.544 724.57M152.792 689.903C152.792 689.903 149.186 686.719 149.104 684.003C147.997 647.123 153.915 630.744 152.792 596.599C152.16 577.4 150.135 566.731 149.104 547.55C145.487 480.229 152.792 374.955 152.792 374.955M152.792 689.903C152.792 689.903 156.614 686.789 156.849 684.003C159.798 648.967 154.442 630.735 155.005 596.599C155.321 577.433 156.388 566.713 156.849 547.55C158.471 480.148 152.792 374.955 152.792 374.955M152.792 374.955L143.203 369.792M152.792 374.955L161.274 370.898M167.544 724.57V715.35M167.544 724.57C167.544 724.57 170.513 726.782 172.707 726.782C174.9 726.782 177.87 724.57 177.87 724.57M177.87 724.57L178.239 716.825M177.87 724.57C177.87 724.57 180.785 726.788 182.663 726.782C185.008 726.775 186.352 723.095 186.352 723.095M186.352 723.095L185.983 716.088M186.352 723.095C186.352 723.095 190.335 725.617 192.621 724.57C194.298 723.802 195.572 720.882 195.572 720.882M195.572 720.882V716.825M195.572 720.882C195.572 720.882 198.436 722.689 200.366 722.357C202.677 721.959 203.842 720.444 204.792 718.3C205.964 715.654 204.917 713.687 204.054 710.924C200.366 699.123 186.352 685.478 186.352 685.478C186.352 685.478 188.454 649.267 192.621 626.471C195.982 608.088 201.82 598.557 204.054 580.003C206.828 556.971 202.21 520.628 202.21 520.628C204.37 512.707 205.582 508.266 207.742 500.344C209.902 492.423 222.19 437.67 220.649 397.451C219.736 373.618 212.904 337.707 212.904 337.707C212.904 337.707 206.507 297.138 206.635 270.956C206.756 246.064 212.904 207.524 212.904 207.524M212.904 207.524L218.067 198.673M212.904 207.524C212.904 207.524 221.29 250.851 226.181 278.701C228.708 293.089 228.975 301.39 232.45 315.58C236.871 333.629 247.939 360.572 247.939 360.572C247.939 360.572 247.046 376.57 247.939 386.757C249.083 399.784 254.578 419.579 254.578 419.579C254.578 419.579 257.636 421.815 259.741 421.423C262.573 420.896 264.166 415.522 264.166 415.522M264.166 415.522L259.741 400.402M264.166 415.522L267.485 424.742C267.485 424.742 270.494 427.37 272.648 426.955C275.166 426.47 276.705 421.792 276.705 421.792M276.705 421.792L269.329 398.927M276.705 421.792L279.287 427.324C279.287 427.324 283.807 430.517 286.294 429.168C288.816 427.799 288.507 422.161 288.507 422.161M288.507 422.161L278.549 396.714M288.507 422.161C288.507 422.161 294.246 424.633 296.62 422.529C298.324 421.019 298.464 416.997 298.464 416.997L286.294 383.437C286.294 383.437 290.764 391.55 294.776 395.608C296.509 397.36 299.11 397.873 301.045 396.345C303.193 394.649 301.045 389.338 301.045 389.338C301.045 389.338 298.016 380.156 294.776 374.955C289.12 365.875 274.861 356.147 274.861 356.147C274.861 356.147 272.648 319.636 269.329 296.771C268.275 289.508 264.166 278.701 264.166 278.701C264.166 278.701 257.528 231.126 247.939 177.652C244.766 159.954 232.684 153.088 218.067 142.616C203.566 132.228 175.656 125.652 175.656 125.652V99.7074M132.183 222.644C132.183 222.644 144.346 215.614 152.792 216.006C161.238 216.397 170.538 222.644 170.538 222.644M25.6027 381.224C25.6027 381.224 40.3543 374.728 40.3543 368.685C40.3543 362.416 34.4537 361.31 34.4537 361.31M277.487 377.536C277.487 377.536 261.143 372.033 261.998 365.366C262.485 361.572 267.485 357.253 267.485 357.253M111.531 520.628C111.531 520.628 118.535 527.019 124.07 527.266C130.12 527.535 138.084 520.628 138.084 520.628M163.9 520.628C163.9 520.628 172.571 527.266 179.02 527.266C185.469 527.266 194.14 520.628 194.14 520.628M152.098 326.274C150.472 326.166 148.917 327.612 149.148 329.225C149.352 330.65 150.661 331.531 152.098 331.437C153.423 331.351 154.49 330.539 154.68 329.225C154.898 327.709 153.626 326.376 152.098 326.274Z"
        stroke="black"
        strokeWidth="2"
      />
      <Tooltip title="right-chest">
        <path
          name="right-chest"
          d="M152.5 213.5V127.5C121.5 125.5 110.333 132 99 138L91.5 172.5L96.5 225C97.1667 229.833 102.1 237.2 116.5 228C130.9 218.8 146.5 214.5 152.5 213.5Z"
          strokeWidth="2"
          onClick={() => {
            if (addPart) {
              addPart({
                key: "right-chest",
                value: {
                  label: "right-chest",
                  description: "",
                },
              });
            }
          }}
          fill="transparent"
          stroke="transparent"
          className={`cursor-pointer ${
            bodyMap["right-chest"]
              ? "fill-[#E52B50]/50 hover:fill-[#E52B50]/60"
              : "hover:fill-gray-300/50"
          }`}
        />
      </Tooltip>
      <Tooltip title="left-chest">
        <path
          name="left-chest"
          d="M154 214.156V128.368C185 126.373 196.167 132.857 207.5 138.842L215 173.257L210 225.627C209.333 230.449 204.4 237.797 190 228.62C175.6 219.443 160 215.153 154 214.156Z"
          strokeWidth="2"
          onClick={() => {
            if (addPart) {
              addPart({
                key: "left-chest",
                value: {
                  label: "left-chest",
                  description: "",
                },
              });
            }
          }}
          fill="transparent"
          stroke="transparent"
          className={`cursor-pointer ${
            bodyMap["left-chest"]
              ? "fill-[#FFBF00]/50 hover:fill-[#FFBF00]/60"
              : "hover:fill-gray-300/50"
          }`}
        />
      </Tooltip>
      <Tooltip title="right-eye">
        <path
          d="M151 31H114V61H151V31Z"
          name="right-eye"
          onClick={() => {
            if (addPart) {
              addPart({
                key: "right-eye",
                value: {
                  label: "right-eye",
                  description: "",
                },
              });
            }
          }}
          fill="transparent"
          stroke="transparent"
          className={`cursor-pointer ${
            bodyMap["right-eye"]
              ? "fill-[#7FFFD4]/50 hover:fill-[#7FFFD4]/60"
              : "hover:fill-gray-300/50"
          }`}
          strokeWidth="2"
        />
      </Tooltip>
      <Tooltip title="left-eye">
        <path
          d="M190 31H153V61H190V31Z"
          name="left-eye"
          onClick={() => {
            if (addPart) {
              addPart({
                key: "left-eye",
                value: {
                  label: "left-eye",
                  description: "",
                },
              });
            }
          }}
          fill="transparent"
          stroke="transparent"
          className={`cursor-pointer ${
            bodyMap["left-eye"]
              ? "fill-[#7FFFD4]/50 hover:fill-[#7FFFD4]/60"
              : "hover:fill-gray-300/50"
          }`}
          strokeWidth="2"
        />
      </Tooltip>
      <Tooltip title="head">
        <path
          d="M189.999 29H113.499C113.499 29 112 1 151.999 1C193 1 189.999 29 189.999 29Z"
          name="head"
          onClick={() => {
            if (addPart) {
              addPart({
                key: "head",
                value: {
                  label: "head",
                  description: "",
                },
              });
            }
          }}
          fill="transparent"
          stroke="transparent"
          className={`cursor-pointer ${
            bodyMap["head"]
              ? "fill-[#007FFF]/50 hover:fill-[#007FFF]/60"
              : "hover:fill-gray-300/50"
          }`}
          strokeWidth="2"
        />
      </Tooltip>
      <Tooltip title="right-jaw">
        <path
          d="M151.5 75V112C151.5 112 135.44 104.552 126 97C123.5 95 119.084 91.2006 117.5 88C114.465 81.8688 114.5 75 114.5 75H151.5Z"
          name="right-jaw"
          onClick={() => {
            if (addPart) {
              addPart({
                key: "right-jaw",
                value: {
                  label: "right-jaw",
                  description: "",
                },
              });
            }
          }}
          fill="transparent"
          stroke="transparent"
          className={`cursor-pointer ${
            bodyMap["right-jaw"]
              ? "fill-[#FFE4C4]/50 hover:fill-[#FFE4C4]/60"
              : "hover:fill-gray-300/50"
          }`}
          strokeWidth="2"
        />
      </Tooltip>
      <Tooltip title="left-jaw">
        <path
          d="M153 75V112C153 112 169.06 104.552 178.5 97C181 95 185.416 91.2006 187 88C190.035 81.8688 190 75 190 75H153Z"
          name="left-jaw"
          onClick={() => {
            if (addPart) {
              addPart({
                key: "left-jaw",
                value: {
                  label: "left-jaw",
                  description: "",
                },
              });
            }
          }}
          fill="transparent"
          stroke="transparent"
          className={`cursor-pointer ${
            bodyMap["left-jaw"]
              ? "fill-[#FFE4C4]/50 hover:fill-[#FFE4C4]/60"
              : "hover:fill-gray-300/50"
          }`}
          strokeWidth="2"
        />
      </Tooltip>
      <Tooltip title="nose">
        <path
          d="M114.5 73L113.5 63H190V73H114.5Z"
          name="nose"
          onClick={() => {
            if (addPart) {
              addPart({
                key: "nose",
                value: {
                  label: "nose",
                  description: "",
                },
              });
            }
          }}
          fill="transparent"
          stroke="transparent"
          className={`cursor-pointer ${
            bodyMap["nose"]
              ? "fill-[#FF7F50]/50 hover:fill-[#FF7F50]/60"
              : "hover:fill-gray-300/50"
          }`}
          strokeWidth="2"
        />
      </Tooltip>
      <Tooltip title="right-ear">
        <path
          d="M103.499 64C102.375 49.9648 112.499 49.5 112.499 49.5L113.499 79C113.499 79 104.5 76.5 103.499 64Z"
          name="right-ear"
          onClick={() => {
            if (addPart) {
              addPart({
                key: "right-ear",
                value: {
                  label: "right-ear",
                  description: "",
                },
              });
            }
          }}
          fill="transparent"
          stroke="transparent"
          className={`cursor-pointer ${
            bodyMap["right-ear"]
              ? "fill-[#FF00FF]/50 hover:fill-[#FF00FF]/60"
              : "hover:fill-gray-300/50"
          }`}
          strokeWidth="2"
        />
      </Tooltip>
      <Tooltip title="left-ear">
        <path
          d="M201.196 63.3905C202.133 50.4142 192.001 50.1309 192.001 50.1309L191.393 77.3855C191.393 77.3855 200.361 74.9474 201.196 63.3905Z"
          name="left-ear"
          onClick={() => {
            if (addPart) {
              addPart({
                key: "left-ear",
                value: {
                  label: "left-ear",
                  description: "",
                },
              });
            }
          }}
          fill="transparent"
          stroke="transparent"
          className={`cursor-pointer ${
            bodyMap["left-ear"]
              ? "fill-[#FF00FF]/50 hover:fill-[#FF00FF]/60"
              : "hover:fill-gray-300/50"
          }`}
          strokeWidth="2"
        />
      </Tooltip>
      <Tooltip title="right-lower-arm">
        <path
          d="M30.5017 355C28.8988 347.873 35.1684 298.5 38.5017 292L76 298C73.3473 314.032 64.8333 345.333 59 360.5L30.5017 355Z"
          name="right-lower-arm"
          onClick={() => {
            if (addPart) {
              addPart({
                key: "right-lower-arm",
                value: {
                  label: "right-lower-arm",
                  description: "",
                },
              });
            }
          }}
          fill="transparent"
          stroke="transparent"
          className={`cursor-pointer ${
            bodyMap["right-lower-arm"]
              ? "fill-[#50C878]/50 hover:fill-[#50C878]/60"
              : "hover:fill-gray-300/50"
          }`}
          strokeWidth="2"
        />
      </Tooltip>
      <Tooltip title="left-lower-arm">
        <path
          d="M275.741 356.058C277.353 348.359 271.049 295.022 267.698 288L230 294.482C232.667 311.801 241.226 345.616 247.091 362L275.741 356.058Z"
          name="left-lower-arm"
          onClick={() => {
            if (addPart) {
              addPart({
                key: "left-lower-arm",
                value: {
                  label: "left-lower-arm",
                  description: "",
                },
              });
            }
          }}
          fill="transparent"
          stroke="transparent"
          className={`cursor-pointer ${
            bodyMap["left-lower-arm"]
              ? "fill-[#50C878]/50 hover:fill-[#50C878]/60"
              : "hover:fill-gray-300/50"
          }`}
          strokeWidth="2"
        />
      </Tooltip>
      <Tooltip title="pelvis">
        <path
          d="M153 375L124.5 358H188.5L153 375Z"
          name="pelvis"
          onClick={() => {
            if (addPart) {
              addPart({
                key: "pelvis",
                value: {
                  label: "pelvis",
                  description: "",
                },
              });
            }
          }}
          fill="transparent"
          stroke="transparent"
          className={`cursor-pointer ${
            bodyMap["pelvis"]
              ? "fill-[#4B0082]/50 hover:fill-[#4B0082]/60"
              : "hover:fill-gray-300/50"
          }`}
          strokeWidth="2"
        />
      </Tooltip>
      <Tooltip title="right-thigh">
        <path
          d="M152.501 378H87.0009C87.0009 378 85.0824 398.394 85.0009 411.5C84.7851 446.184 97.0009 499.5 97.0009 499.5H147.501L152.501 378Z"
          name="right-thigh"
          onClick={() => {
            if (addPart) {
              addPart({
                key: "right-thigh",
                value: {
                  label: "right-thigh",
                  description: "",
                },
              });
            }
          }}
          fill="transparent"
          stroke="transparent"
          className={`cursor-pointer ${
            bodyMap["right-thigh"]
              ? "fill-[#C3B091]/50 hover:fill-[#C3B091]/60"
              : "hover:fill-gray-300/50"
          }`}
          strokeWidth="2"
        />
      </Tooltip>
      <Tooltip title="left-thigh">
        <path
          d="M153 378H218.497C218.497 378 220.416 398.586 220.497 411.815C220.713 446.824 208.498 500.641 208.498 500.641H158L153 378Z"
          name="left-thigh"
          onClick={() => {
            if (addPart) {
              addPart({
                key: "left-thigh",
                value: {
                  label: "left-thigh",
                  description: "",
                },
              });
            }
          }}
          fill="transparent"
          stroke="transparent"
          className={`cursor-pointer ${
            bodyMap["left-thigh"]
              ? "fill-[#C3B091]/50 hover:fill-[#C3B091]/60"
              : "hover:fill-gray-300/50"
          }`}
          strokeWidth="2"
        />
      </Tooltip>
      <Tooltip title="right-leg">
        <path
          d="M149 540H102C99.2002 551.6 103.167 585.5 105.5 601L120 685H149.5L152.5 621.5V592L149 540Z"
          name="right-leg"
          onClick={() => {
            if (addPart) {
              addPart({
                key: "right-leg",
                value: {
                  label: "right-leg",
                  description: "",
                },
              });
            }
          }}
          fill="transparent"
          stroke="transparent"
          className={`cursor-pointer ${
            bodyMap["right-leg"]
              ? "fill-[#FFF700]/50 hover:fill-[#FFF700]/60"
              : "hover:fill-gray-300/50"
          }`}
          strokeWidth="2"
        />
      </Tooltip>
      <Tooltip title="left-leg">
        <path
          d="M157.501 540H204.498C207.298 551.537 203.331 585.254 200.998 600.67L186.499 684.215H157.001L154.001 621.059V591.719L157.501 540Z"
          name="left-leg"
          onClick={() => {
            if (addPart) {
              addPart({
                key: "left-leg",
                value: {
                  label: "left-leg",
                  description: "",
                },
              });
            }
          }}
          fill="transparent"
          stroke="transparent"
          className={`cursor-pointer ${
            bodyMap["left-leg"]
              ? "fill-[#FFF700]/50 hover:fill-[#FFF700]/60"
              : "hover:fill-gray-300/50"
          }`}
          strokeWidth="2"
        />
      </Tooltip>
      <Tooltip title="neck">
        <path
          d="M130 125.5V102.5L152.5 114L175.5 101V125.5H130Z"
          name="neck"
          onClick={() => {
            if (addPart) {
              addPart({
                key: "neck",
                value: {
                  label: "neck",
                  description: "",
                },
              });
            }
          }}
          fill="transparent"
          stroke="transparent"
          className={`cursor-pointer ${
            bodyMap["neck"]
              ? "fill-[#000080]/50 hover:fill-[#000080]/60"
              : "hover:fill-gray-300/50"
          }`}
          strokeWidth="2"
        />
      </Tooltip>
      <Tooltip title="right-shoulder">
        <path
          d="M90 172L98 137C90.5 142.167 79 146.5 64.5 162.5C56.5137 171.312 52.1667 196.167 51.5 208H94.5L90 172Z"
          name="right-shoulder"
          onClick={() => {
            if (addPart) {
              addPart({
                key: "right-shoulder",
                value: {
                  label: "right-shoulder",
                  description: "",
                },
              });
            }
          }}
          fill="transparent"
          stroke="transparent"
          className={`cursor-pointer ${
            bodyMap["right-shoulder"]
              ? "fill-[#DA70D6]/50 hover:fill-[#DA70D6]/60"
              : "hover:fill-gray-300/50"
          }`}
          strokeWidth="2"
        />
      </Tooltip>
      <Tooltip title="left-shoulder">
        <path
          d="M215 170.957L207 136C214.5 141.16 226 145.488 240.5 161.469C248.486 170.27 252.833 195.094 253.5 206.912H210.5L215 170.957Z"
          name="left-shoulder"
          onClick={() => {
            if (addPart) {
              addPart({
                key: "left-shoulder",
                value: {
                  label: "left-shoulder",
                  description: "",
                },
              });
            }
          }}
          fill="transparent"
          stroke="transparent"
          className={`cursor-pointer ${
            bodyMap["left-shoulder"]
              ? "fill-[#DA70D6]/50 hover:fill-[#DA70D6]/60"
              : "hover:fill-gray-300/50"
          }`}
          strokeWidth="2"
        />
      </Tooltip>
      <Tooltip title="right-hand">
        <path
          d="M59.4997 362L29.9997 356.5L4.49973 387C4.49973 387 -0.477163 393.084 1.99973 395.5C3.95664 397.409 8.99973 395.5 8.99973 395.5L18.9997 385L7.99973 417.5C7.99973 417.5 9.23938 421.744 11.4997 422.5C13.3882 423.132 16.4997 421.5 16.4997 421.5C16.4997 421.5 16.3254 429.651 19.9997 430.5C22.7237 431.129 26.4997 427.5 26.4997 427.5L28.4997 422C28.4997 422 32.0622 428.019 35.4997 427.5C38.0972 427.107 40.4997 423 40.4997 423L41.9997 419.5C41.9997 419.5 44.5072 423.299 46.9997 423.5C49.4384 423.697 52.4997 420.5 52.4997 420.5L59.4997 391.5V362Z"
          name="right-hand"
          onClick={() => {
            if (addPart) {
              addPart({
                key: "right-hand",
                value: {
                  label: "right-hand",
                  description: "",
                },
              });
            }
          }}
          fill="transparent"
          stroke="transparent"
          className={`cursor-pointer ${
            bodyMap["right-hand"]
              ? "fill-[#FFE5B4]/50 hover:fill-[#FFE5B4]/60"
              : "hover:fill-gray-300/50"
          }`}
          strokeWidth="2"
        />
      </Tooltip>
      <Tooltip title="left-hand">
        <path
          d="M247.999 362.401L277.499 357L302.998 386.95C302.998 386.95 307.975 392.924 305.498 395.297C303.541 397.171 298.498 395.297 298.498 395.297L288.499 384.986L299.498 416.9C299.498 416.9 298.259 421.067 295.999 421.81C294.11 422.43 290.999 420.828 290.999 420.828C290.999 420.828 291.173 428.832 287.499 429.665C284.775 430.284 280.999 426.72 280.999 426.72L278.999 421.319C278.999 421.319 275.436 427.23 271.999 426.72C269.402 426.334 266.999 422.301 266.999 422.301L265.499 418.864C265.499 418.864 262.992 422.594 260.499 422.792C258.061 422.985 254.999 419.846 254.999 419.846L247.999 391.369V362.401Z"
          name="left-hand"
          onClick={() => {
            if (addPart) {
              addPart({
                key: "left-hand",
                value: {
                  label: "left-hand",
                  description: "",
                },
              });
            }
          }}
          fill="transparent"
          stroke="transparent"
          className={`cursor-pointer ${
            bodyMap["left-hand"]
              ? "fill-[#FFE5B4]/50 hover:fill-[#FFE5B4]/60"
              : "hover:fill-gray-300/50"
          }`}
          strokeWidth="2"
        />
      </Tooltip>
      <Tooltip title="right-upper-arm">
        <path
          d="M92.5 209.5H51L44.5 272L79.5 275.5L92.5 209.5Z"
          name="right-upper-arm"
          onClick={() => {
            if (addPart) {
              addPart({
                key: "right-upper-arm",
                value: {
                  label: "right-upper-arm",
                  description: "",
                },
              });
            }
          }}
          fill="transparent"
          stroke="transparent"
          className={`cursor-pointer ${
            bodyMap["right-upper-arm"]
              ? "fill-[#8E4585]/50 hover:fill-[#8E4585]/60"
              : "hover:fill-gray-300/50"
          }`}
          strokeWidth="2"
        />
      </Tooltip>
      <Tooltip title="left-upper-arm">
        <path
          d="M213 208H254.5L261 270.5L226 274L213 208Z"
          name="left-upper-arm"
          onClick={() => {
            if (addPart) {
              addPart({
                key: "left-upper-arm",
                value: {
                  label: "left-upper-arm",
                  description: "",
                },
              });
            }
          }}
          fill="transparent"
          stroke="transparent"
          className={`cursor-pointer ${
            bodyMap["left-upper-arm"]
              ? "fill-[#8E4585]/50 hover:fill-[#8E4585]/60"
              : "hover:fill-gray-300/50"
          }`}
          strokeWidth="2"
        />
      </Tooltip>
      <Tooltip title="right-elbow">
        <path
          d="M38.5 290.5L44 273.5L79 277L76.5 296.5L38.5 290.5Z"
          name="right-elbow"
          onClick={() => {
            if (addPart) {
              addPart({
                key: "right-elbow",
                value: {
                  label: "right-elbow",
                  description: "",
                },
              });
            }
          }}
          fill="transparent"
          stroke="transparent"
          className={`cursor-pointer ${
            bodyMap["right-elbow"]
              ? "fill-[#E0115F]/50 hover:fill-[#E0115F]/60"
              : "hover:fill-gray-300/50"
          }`}
          strokeWidth="2"
        />
      </Tooltip>
      <Tooltip title="left-elbow">
        <path
          d="M266.5 287.215L261 271L226 274.338L228.5 292.938L266.5 287.215Z"
          name="left-elbow"
          onClick={() => {
            if (addPart) {
              addPart({
                key: "left-elbow",
                value: {
                  label: "left-elbow",
                  description: "",
                },
              });
            }
          }}
          fill="transparent"
          stroke="transparent"
          className={`cursor-pointer ${
            bodyMap["left-elbow"]
              ? "fill-[#E0115F]/50 hover:fill-[#E0115F]/60"
              : "hover:fill-gray-300/50"
          }`}
          strokeWidth="2"
        />
      </Tooltip>
      <Tooltip title="abdomen">
        <path
          d="M215 357H91C93.3709 349.408 98.6299 316.197 99.5344 286.542C100.3 261.434 97.0527 236.105 95.5182 229.529C95.5182 229.529 100.906 235.109 104.555 235.446C114.775 236.39 118.713 227.385 128.15 223.075C136.994 219.036 142.634 214.803 152.247 215.007C159.871 215.169 162.636 217.638 169.818 220.386C183.874 225.764 194.417 238.254 200.943 235.446C205.237 233.598 210.482 227.916 210.482 227.916C210.482 227.916 206.187 262.602 206.466 284.928C206.82 313.297 215 357 215 357Z"
          name="abdomen"
          onClick={() => {
            if (addPart) {
              addPart({
                key: "abdomen",
                value: {
                  label: "abdomen",
                  description: "",
                },
              });
            }
          }}
          fill="transparent"
          stroke="transparent"
          className={`cursor-pointer ${
            bodyMap["abdomen"]
              ? "fill-[#FF2400]/50 hover:fill-[#FF2400]/60"
              : "hover:fill-gray-300/50"
          }`}
          strokeWidth="2"
        />
      </Tooltip>
      <Tooltip title="right-groin">
        <path
          d="M90 358H124.5L152 376.5H87L90 358Z"
          name="right-groin"
          onClick={() => {
            if (addPart) {
              addPart({
                key: "right-groin",
                value: {
                  label: "right-groin",
                  description: "",
                },
              });
            }
          }}
          fill="transparent"
          stroke="transparent"
          className={`cursor-pointer ${
            bodyMap["right-groin"]
              ? "fill-[#87CEEB]/50 hover:fill-[#87CEEB]/60"
              : "hover:fill-gray-300/50"
          }`}
          strokeWidth="2"
        />
      </Tooltip>
      <Tooltip title="left-groin">
        <path
          d="M215 358H180.5L153 376.571H218L215 358Z"
          name="left-groin"
          onClick={() => {
            if (addPart) {
              addPart({
                key: "left-groin",
                value: {
                  label: "left-groin",
                  description: "",
                },
              });
            }
          }}
          fill="transparent"
          stroke="transparent"
          className={`cursor-pointer ${
            bodyMap["left-groin"]
              ? "fill-[#87CEEB]/50 hover:fill-[#87CEEB]/60"
              : "hover:fill-gray-300/50"
          }`}
          strokeWidth="2"
        />
      </Tooltip>
      <Tooltip title="right-knee">
        <path
          d="M148 501.5H96.5L103.5 520.5L101.5 538H149L148 501.5Z"
          name="right-knee"
          onClick={() => {
            if (addPart) {
              addPart({
                key: "right-knee",
                value: {
                  label: "right-knee",
                  description: "",
                },
              });
            }
          }}
          fill="transparent"
          stroke="transparent"
          className={`cursor-pointer ${
            bodyMap["right-knee"]
              ? "fill-[#008080]/50 hover:fill-[#008080]/60"
              : "hover:fill-gray-300/50"
          }`}
          strokeWidth="2"
        />
      </Tooltip>
      <Tooltip title="left-knee">
        <path
          d="M158 502H209.5L202.5 520.584L204.5 537.7H157L158 502Z"
          name="left-knee"
          onClick={() => {
            if (addPart) {
              addPart({
                key: "left-knee",
                value: {
                  label: "left-knee",
                  description: "",
                },
              });
            }
          }}
          fill="transparent"
          stroke="transparent"
          className={`cursor-pointer ${
            bodyMap["left-knee"]
              ? "fill-[#008080]/50 hover:fill-[#008080]/60"
              : "hover:fill-gray-300/50"
          }`}
          strokeWidth="2"
        />
      </Tooltip>
      <Tooltip title="right-feet">
        <path
          d="M119.499 688.5V686.5H149.499L152.499 690L153.499 725C153.499 725 149.647 728.915 146.499 729C142.816 729.1 138.499 724 138.499 724C138.499 724 135.776 727 133.499 727C131.222 727 128.499 724 128.499 724C128.499 724 125.381 727.559 122.999 727C121.117 726.558 119.499 723.5 119.499 723.5C119.499 723.5 117.006 726.12 114.999 726C112.518 725.852 110.499 721.5 110.499 721.5C110.499 721.5 107.986 724.308 105.999 724C104.089 723.704 102.499 720.5 102.499 720.5C102.499 718.667 102.247 713.033 103.499 708.5C106.163 698.859 114.499 693 119.499 688.5Z"
          name="right-feet"
          onClick={() => {
            if (addPart) {
              addPart({
                key: "right-feet",
                value: {
                  label: "right-feet",
                  description: "",
                },
              });
            }
          }}
          fill="transparent"
          stroke="transparent"
          className={`cursor-pointer ${
            bodyMap["right-feet"]
              ? "fill-[#40E0D0]/50 hover:fill-[#40E0D0]/60"
              : "hover:fill-gray-300/50"
          }`}
          strokeWidth="2"
        />
      </Tooltip>
      <Tooltip title="left-feet">
        <path
          d="M187.999 687.964V686H157.999L155 689.438L154 723.814C154 723.814 157.852 727.658 160.999 727.742C164.682 727.84 168.999 722.831 168.999 722.831C168.999 722.831 171.722 725.778 173.999 725.778C176.276 725.778 178.999 722.831 178.999 722.831C178.999 722.831 182.117 726.327 184.499 725.778C186.381 725.344 187.999 722.34 187.999 722.34C187.999 722.34 190.492 724.913 192.499 724.796C194.98 724.65 196.999 720.376 196.999 720.376C196.999 720.376 199.512 723.134 201.499 722.831C203.409 722.54 204.999 719.394 204.999 719.394C204.999 717.593 205.251 712.06 203.999 707.608C201.335 698.139 192.999 692.384 187.999 687.964Z"
          name="left-feet"
          onClick={() => {
            if (addPart) {
              addPart({
                key: "left-feet",
                value: {
                  label: "left-feet",
                  description: "",
                },
              });
            }
          }}
          fill="transparent"
          stroke="transparent"
          className={`cursor-pointer ${
            bodyMap["left-feet"]
              ? "fill-[#40E0D0]/50 hover:fill-[#40E0D0]/60"
              : "hover:fill-gray-300/50"
          }`}
          strokeWidth="2"
        />
      </Tooltip>
    </svg>
  );
};

export default FrontBody;

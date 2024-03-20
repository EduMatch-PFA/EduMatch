import { Link } from "@inertiajs/react";
import React from "react";

export default function Logo({ className  }) {
    return (
        <Link href="/">
            <div className="Logo cursor-pointer relative z-50">
                <svg
                    width="188"
                    height="27"
                    viewBox="0 0 188 27"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={className}
                    alt="Tutorfinder."
                >
                    <path
                        d="M17.712 3.664L17.072 7.184H11.152L7.824 26H3.312L6.64 7.184H0.688L1.328 3.664H17.712ZM36.8848 8.272L33.7488 26H29.2688L29.6528 23.76C28.9701 24.528 28.1274 25.136 27.1248 25.584C26.1221 26.0107 25.0661 26.224 23.9568 26.224C22.1221 26.224 20.6714 25.7333 19.6048 24.752C18.5381 23.7493 18.0048 22.3307 18.0048 20.496C18.0048 19.8133 18.0581 19.2053 18.1648 18.672L19.9888 8.272H24.4688L22.7408 18.032C22.6768 18.416 22.6448 18.7893 22.6448 19.152C22.6448 20.1973 22.9328 21.008 23.5088 21.584C24.0848 22.1387 24.8954 22.416 25.9408 22.416C27.1568 22.416 28.1914 22.0427 29.0448 21.296C29.8981 20.528 30.4421 19.44 30.6768 18.032L32.4048 8.272H36.8848ZM44.377 20.528C44.3557 20.656 44.345 20.8267 44.345 21.04C44.345 21.4667 44.4623 21.776 44.697 21.968C44.953 22.1387 45.369 22.224 45.945 22.224H48.057L47.385 26H44.537C41.337 26 39.737 24.6667 39.737 22C39.737 21.488 39.7797 20.9867 39.865 20.496L41.369 11.952H39.257L39.897 8.272H42.041L42.809 3.888H47.321L46.553 8.272H50.489L49.849 11.952H45.881L44.377 20.528ZM58.5113 26.288C56.9966 26.288 55.6526 25.9787 54.4793 25.36C53.3273 24.7413 52.4313 23.8667 51.7913 22.736C51.1513 21.6053 50.8313 20.304 50.8313 18.832C50.8313 16.8267 51.3006 15.0027 52.2393 13.36C53.1993 11.696 54.5006 10.384 56.1433 9.424C57.8073 8.464 59.6526 7.984 61.6793 7.984C63.1939 7.984 64.5379 8.304 65.7113 8.944C66.9059 9.56267 67.8233 10.4373 68.4633 11.568C69.1246 12.6987 69.4553 14 69.4553 15.472C69.4553 17.4987 68.9753 19.3333 68.0153 20.976C67.0553 22.6187 65.7326 23.92 64.0473 24.88C62.3833 25.8187 60.5379 26.288 58.5113 26.288ZM59.1193 22.448C60.1859 22.448 61.1566 22.1387 62.0313 21.52C62.9059 20.9013 63.5886 20.08 64.0793 19.056C64.5699 18.032 64.8153 16.9547 64.8153 15.824C64.8153 14.544 64.4526 13.5627 63.7273 12.88C63.0233 12.176 62.1273 11.824 61.0393 11.824C59.9513 11.824 58.9806 12.1333 58.1273 12.752C57.2953 13.3707 56.6446 14.2027 56.1753 15.248C55.7059 16.272 55.4713 17.36 55.4713 18.512C55.4713 19.7707 55.8019 20.7413 56.4633 21.424C57.1459 22.1067 58.0313 22.448 59.1193 22.448ZM78.0855 11.408C78.8535 10.3413 79.7495 9.50933 80.7735 8.912C81.7975 8.31467 82.9068 8.016 84.1015 8.016L83.2695 12.72H82.0855C80.7628 12.72 79.6962 13.008 78.8855 13.584C78.0962 14.16 77.5202 15.1413 77.1575 16.528L75.4935 26H70.9815L74.1175 8.272H78.6295L78.0855 11.408Z"
                        className="fill-primary"
                    />
                    <path
                        d="M96.207 5.584C95.1617 5.52 94.3937 5.66933 93.903 6.032C93.4337 6.39467 93.1137 7.04533 92.943 7.984L92.911 8.144H95.855L95.055 12.688H92.111L89.775 26H84.271L86.607 12.688H84.623L85.423 8.144H87.407L87.503 7.632C87.9083 5.43467 88.8363 3.77067 90.287 2.64C91.759 1.488 93.711 0.911999 96.143 0.911999C96.527 0.911999 96.815 0.922665 97.007 0.943998L96.207 5.584ZM101.498 6.288C100.645 6.288 99.9623 6.064 99.4503 5.616C98.9596 5.14667 98.7143 4.56 98.7143 3.856C98.7143 2.896 99.0876 2.07467 99.8343 1.392C100.581 0.709332 101.488 0.367998 102.554 0.367998C103.408 0.367998 104.08 0.602665 104.57 1.072C105.061 1.52 105.306 2.10667 105.306 2.832C105.306 3.77067 104.933 4.58133 104.186 5.264C103.44 5.94667 102.544 6.288 101.498 6.288ZM103.866 8.144L100.73 26H95.2583L98.3943 8.144H103.866ZM118.744 7.952C120.536 7.952 121.944 8.45333 122.968 9.456C123.992 10.4587 124.504 11.856 124.504 13.648C124.504 14.2453 124.44 14.8853 124.312 15.568L122.456 26H117.016L118.744 16.304C118.808 15.9413 118.84 15.6213 118.84 15.344C118.84 14.448 118.584 13.7547 118.072 13.264C117.581 12.7733 116.888 12.528 115.992 12.528C114.925 12.528 114.029 12.8587 113.304 13.52C112.578 14.1813 112.109 15.1093 111.896 16.304V16.144L110.168 26H104.696L107.832 8.144H113.304L112.888 10.544C113.592 9.75467 114.445 9.12533 115.448 8.656C116.472 8.18667 117.57 7.952 118.744 7.952ZM126.77 17.04C127.09 15.2053 127.72 13.5947 128.658 12.208C129.597 10.8213 130.728 9.75467 132.05 9.008C133.373 8.26133 134.77 7.888 136.242 7.888C137.416 7.888 138.44 8.13333 139.314 8.624C140.21 9.11467 140.861 9.776 141.266 10.608L142.738 2.32H148.21L144.018 26H138.546L138.994 23.44C138.312 24.2933 137.458 24.976 136.434 25.488C135.41 26 134.269 26.256 133.01 26.256C131.752 26.256 130.632 25.968 129.65 25.392C128.69 24.816 127.933 23.9947 127.378 22.928C126.845 21.8613 126.578 20.6133 126.578 19.184C126.578 18.5227 126.642 17.808 126.77 17.04ZM140.146 17.072C140.21 16.688 140.242 16.336 140.242 16.016C140.242 14.9707 139.933 14.1493 139.314 13.552C138.717 12.9547 137.949 12.656 137.01 12.656C135.922 12.656 134.93 13.0507 134.034 13.84C133.138 14.608 132.573 15.6747 132.338 17.04C132.274 17.424 132.242 17.776 132.242 18.096C132.242 19.1413 132.541 19.9733 133.138 20.592C133.757 21.1893 134.525 21.488 135.442 21.488C136.53 21.488 137.522 21.0933 138.418 20.304C139.314 19.5147 139.89 18.4373 140.146 17.072ZM159.113 7.888C161.417 7.888 163.241 8.51733 164.585 9.776C165.95 11.0133 166.633 12.7093 166.633 14.864C166.633 15.568 166.58 16.1973 166.473 16.752C166.388 17.2427 166.26 17.7653 166.089 18.32H153.705C153.684 18.448 153.673 18.6507 153.673 18.928C153.673 19.8667 153.929 20.5813 154.441 21.072C154.953 21.5627 155.636 21.808 156.489 21.808C157.854 21.808 158.9 21.232 159.625 20.08H165.449C164.681 21.8933 163.433 23.376 161.705 24.528C159.977 25.68 158.036 26.256 155.881 26.256C153.577 26.256 151.732 25.616 150.345 24.336C148.98 23.056 148.297 21.3173 148.297 19.12C148.297 18.4587 148.361 17.776 148.489 17.072C148.809 15.216 149.47 13.5947 150.473 12.208C151.476 10.8213 152.724 9.75467 154.217 9.008C155.71 8.26133 157.342 7.888 159.113 7.888ZM161.097 15.536C161.14 15.2373 161.161 15.0347 161.161 14.928C161.161 14.0747 160.894 13.424 160.361 12.976C159.828 12.5067 159.124 12.272 158.249 12.272C157.31 12.272 156.478 12.56 155.753 13.136C155.049 13.6907 154.537 14.4907 154.217 15.536H161.097ZM175.728 11.376C176.56 10.3093 177.509 9.47733 178.576 8.88C179.664 8.26133 180.794 7.952 181.968 7.952L180.944 13.744H179.44C178.074 13.744 176.997 14.0427 176.208 14.64C175.418 15.216 174.896 16.24 174.64 17.712L173.168 26H167.696L170.832 8.144H176.304L175.728 11.376ZM183.911 26.256C183.058 26.256 182.375 26.032 181.863 25.584C181.373 25.1147 181.127 24.528 181.127 23.824C181.127 22.8427 181.49 22.0107 182.215 21.328C182.962 20.6453 183.879 20.304 184.967 20.304C185.799 20.304 186.461 20.5387 186.951 21.008C187.442 21.456 187.687 22.0427 187.687 22.768C187.687 23.728 187.314 24.5493 186.567 25.232C185.842 25.9147 184.957 26.256 183.911 26.256Z"
                        className="fill-[#1E1E1E] dark:fill-white"
                    />
                </svg>
            </div>
        </Link>
    );
}
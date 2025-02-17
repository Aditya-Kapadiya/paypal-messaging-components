/** @jsx h */
/* eslint-disable react/no-unknown-property, eslint-comments/disable-enable-pair */
import { h } from 'preact';

import { logos } from '../lib';

const Icon = ({ name = '', color, content }) => {
    if (content) {
        // eslint-disable-next-line react/no-danger
        return <div aria-hidden="true" className="icon__wrapper" dangerouslySetInnerHTML={{ __html: content }} />;
    }

    switch (name) {
        case 'logo':
            return <img aria-hidden="true" alt="PayPal Logo" src={logos.PRIMARY.WHITE[0].src} />;
        case 'close':
            return (
                <svg
                    aria-hidden="true"
                    width="36"
                    height="36"
                    viewBox="0 0 36 36"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M12 0L0 12"
                        transform="translate(12 12)"
                        stroke={color || '#2C2E2F'}
                        stroke-width="2"
                        stroke-linecap="round"
                    />
                    <path
                        d="M0 0L12 12"
                        transform="translate(12 12)"
                        stroke={color || '#2C2E2F'}
                        stroke-width="2"
                        stroke-linecap="round"
                    />
                </svg>
            );
        case 'pp-button':
            return (
                <svg
                    aria-hidden="true"
                    className={`icon icon--${name}`}
                    width="55"
                    height="19"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <g fill="none" fill-rule="evenodd">
                        <rect fill="#FFC43A" width="55" height="19" rx="9.5" />
                        <path
                            d="M24.613 7.965c.18 0 .362.108.407.282l.86 2.618 2.014-2.727a.404.404 0 01.34-.173h1.448c.203 0 .317.217.203.368l-4.82 6.45a.404.404 0 01-.34.173h-1.447c-.204 0-.34-.216-.227-.368l1.494-1.97-1.607-4.35c-.045-.151.068-.303.25-.303zm20.593-2.513l.045.003h1.335c.136 0 .249.13.226.28l-1.154 7.316a.385.385 0 01-.385.325h-1.176c-.136 0-.25-.13-.227-.281l1.177-7.467c.023-.109.113-.195.204-.173zm-31.863-.02c1.019 0 1.765.26 2.195.78.385.433.52 1.06.385 1.84-.294 1.796-1.448 2.705-3.44 2.705h-.95c-.204 0-.385.13-.407.325l-.34 1.97c-.022.173-.203.324-.407.324H8.931a.244.244 0 01-.25-.281l1.223-7.337a.43.43 0 01.407-.325zm26.431 2.533c.68 0 1.358.152 1.675.563l.09.13.068-.368a.263.263 0 01.25-.195h1.425c.158 0 .272.13.249.26l-.77 4.545c-.022.195-.203.325-.407.325h-1.29c-.158 0-.271-.13-.249-.26l.068-.368s-.701.757-1.968.757c-.725 0-1.358-.194-1.788-.67-.453-.52-.656-1.256-.52-2.035.248-1.58 1.606-2.684 3.167-2.684zm-5.182-2.532c.996 0 1.765.26 2.195.736.385.433.52 1.06.385 1.84-.294 1.796-1.448 2.705-3.44 2.705h-.95c-.204 0-.385.13-.407.325l-.34 2.077c-.022.13-.158.238-.294.238H30.18a.244.244 0 01-.25-.281l1.223-7.315c.022-.174.203-.325.407-.325zM18.548 7.965c.679 0 1.358.152 1.675.563l.068.13.067-.368a.263.263 0 01.25-.195h1.425a.27.27 0 01.272.26l-.77 4.545c-.022.195-.203.325-.407.325h-1.29c-.158 0-.272-.13-.249-.26l.068-.368s-.702.757-1.969.757c-.724 0-1.358-.194-1.787-.67-.453-.52-.657-1.256-.521-2.035.249-1.58 1.607-2.684 3.168-2.684zm21.566 1.429c-.792 0-1.448.52-1.584 1.277-.068.368.022.692.226.93.204.238.543.368.95.368.815 0 1.471-.52 1.607-1.277.045-.368-.045-.714-.249-.93-.226-.239-.543-.368-.95-.368zm-21.249 0c-.792 0-1.448.52-1.584 1.277-.068.368.023.692.226.93.204.238.543.368.95.368.815 0 1.472-.52 1.607-1.277.068-.368-.022-.714-.249-.93-.226-.239-.543-.368-.95-.368zm14.758-2.36h-.366a.263.263 0 00-.249.195l-.317 1.905h.453c.792 0 1.63 0 1.788-1.017.068-.368.022-.628-.136-.78-.272-.303-.792-.303-1.335-.303zm-21.249 0h-.366a.263.263 0 00-.249.195l-.316 1.905h.452c.792 0 1.63 0 1.788-1.017.068-.368.022-.628-.136-.78-.271-.303-.792-.303-1.335-.303z"
                            fill="#0070BA"
                            fill-rule="nonzero"
                        />
                    </g>
                </svg>
            );

        case 'warning':
            return (
                <svg
                    aria-hidden="true"
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M10.3074 1.80394L17.5975 14.7642C17.7975 15.1197 17.8369 15.5218 17.7393 15.887C17.6386 16.2635 17.3921 16.6008 17.0255 16.807C16.801 16.9333 16.5478 16.9996 16.2902 16.9996H1.70985C0.881419 16.9996 0.209846 16.328 0.209846 15.4996C0.209846 15.242 0.276189 14.9887 0.402483 14.7642L7.69264 1.80394C7.89219 1.44918 8.21448 1.2069 8.57637 1.10039C8.95102 0.990125 9.36811 1.02537 9.73539 1.23197C9.97483 1.36665 10.1727 1.5645 10.3074 1.80394ZM9 4.9996C8.44771 4.9996 8 5.44731 8 5.9996V9.9996C8 10.5519 8.44771 10.9996 9 10.9996C9.55228 10.9996 10 10.5519 10 9.9996V5.9996C10 5.44731 9.55228 4.9996 9 4.9996ZM10 13.9996C10 14.5519 9.55228 14.9996 9 14.9996C8.44771 14.9996 8 14.5519 8 13.9996C8 13.4473 8.44771 12.9996 9 12.9996C9.55228 12.9996 10 13.4473 10 13.9996Z"
                        fill="#FF9600"
                    />
                </svg>
            );

        case 'header-background':
            return (
                <svg
                    aria-hidden="true"
                    width="1920"
                    height="1380"
                    viewBox="0 0 1920 1380"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <g clipPath="url(#clip0)">
                        <rect width="1920" height="1379" transform="translate(0 0.5)" fill="#1040C1" />
                        <mask
                            id="mask0"
                            style={{ maskType: 'alpha' }}
                            maskUnits="userSpaceOnUse"
                            x="0"
                            y="0"
                            width="1920"
                            height="1378"
                        >
                            <rect y="0.5" width="1920" height="1377" fill="#38AF88" />
                        </mask>
                        <g mask="url(#mask0)">
                            <rect
                                opacity="0.5"
                                width="915.857"
                                height="1623.41"
                                transform="matrix(0.970524 0.241004 -0.438762 0.898603 1422.9 -79.2495)"
                                fill="#1072EB"
                            />
                            <rect
                                opacity="0.5"
                                width="1103.73"
                                height="2258.79"
                                transform="matrix(0.0750469 -0.99718 0.997737 0.067235 -338 1307.5)"
                                fill="#1040C1"
                            />
                            <rect
                                opacity="0.5"
                                width="900.752"
                                height="1693.94"
                                transform="matrix(0.970524 0.241004 -0.438762 0.898603 0.238281 -240.688)"
                                fill="#142C8E"
                            />
                            <rect
                                opacity="0.5"
                                width="351.272"
                                height="2301"
                                transform="matrix(0.0432526 -0.999064 0.998507 0.0546328 -25 151.285)"
                                fill="#1040C1"
                            />
                        </g>
                        <mask
                            id="mask1"
                            style={{ maskType: 'alpha' }}
                            maskUnits="userSpaceOnUse"
                            x="0"
                            y="0"
                            width="1920"
                            height="1378"
                        >
                            <rect y="0.5" width="1920" height="1377" fill="#38AF88" />
                        </mask>
                        <g mask="url(#mask1)">
                            <rect
                                opacity="0.5"
                                width="915.857"
                                height="1623.41"
                                transform="matrix(0.970524 0.241004 -0.438762 0.898603 1422.9 -79.2495)"
                                fill="#1072EB"
                            />
                            <rect
                                opacity="0.5"
                                width="1103.73"
                                height="2258.79"
                                transform="matrix(0.0750469 -0.99718 0.997737 0.067235 -338 1307.5)"
                                fill="#1040C1"
                            />
                            <rect
                                opacity="0.5"
                                width="900.752"
                                height="1693.94"
                                transform="matrix(0.970524 0.241004 -0.438762 0.898603 0.238281 -240.688)"
                                fill="#142C8E"
                            />
                            <rect
                                opacity="0.5"
                                width="351.272"
                                height="2301"
                                transform="matrix(0.0432526 -0.999064 0.998507 0.0546328 -25 151.285)"
                                fill="#1040C1"
                            />
                        </g>
                    </g>
                    <defs>
                        <clipPath id="clip0">
                            <rect width="1920" height="1379" fill="white" transform="translate(0 0.5)" />
                        </clipPath>
                    </defs>
                </svg>
            );

        default:
            return null;
    }
};

export default Icon;

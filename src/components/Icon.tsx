type IconProps = { type: string; className?: string };

export default function Icon({ type, className = '' }: IconProps) {
  switch (type) {
    case 'airplane':
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={'ionicon ' + className}
          viewBox="0 0 512 512"
        >
          <title>Airplane</title>
          <path
            d="M407.72 224c-3.4 0-14.79.1-18 .3l-64.9 1.7a1.83 1.83 0 01-1.69-.9L193.55 67.56a9 9 0 00-6.66-3.56H160l73 161a2.35 2.35 0 01-2.26 3.35l-121.69 1.8a8.06 8.06 0 01-6.6-3.1l-37-45c-3-3.9-8.62-6-13.51-6H33.08c-1.29 0-1.1 1.21-.75 2.43l19.84 71.42a16.3 16.3 0 010 11.9L32.31 333c-.59 1.95-.52 3 1.77 3H52c8.14 0 9.25-1.06 13.41-6.3l37.7-45.7a8.19 8.19 0 016.6-3.1l120.68 2.7a2.7 2.7 0 012.43 3.74L160 448h26.64a9 9 0 006.65-3.55L323.14 287c.39-.6 2-.9 2.69-.9l63.9 1.7c3.3.2 14.59.3 18 .3C452 288.1 480 275.93 480 256s-27.88-32-72.28-32z"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="32"
          />
        </svg>
      );
    case 'cart':
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={'ionicon ' + className}
          viewBox="0 0 512 512"
        >
          <title>Cart</title>
          <circle
            cx="176"
            cy="416"
            r="16"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="32"
          />
          <circle
            cx="400"
            cy="416"
            r="16"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="32"
          />
          <path
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="32"
            d="M48 80h64l48 272h256"
          />
          <path
            d="M160 288h249.44a8 8 0 007.85-6.43l28.8-144a8 8 0 00-7.85-9.57H128"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="32"
          />
        </svg>
      );
    case 'close':
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={'ionicon ' + className}
          viewBox="0 0 512 512"
        >
          <title>Close</title>
          <path
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="32"
            d="M368 368L144 144M368 144L144 368"
          />
        </svg>
      );
    case 'eye':
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={'ionicon ' + className}
          viewBox="0 0 512 512"
        >
          <title>Eye</title>
          <path
            d="M255.66 112c-77.94 0-157.89 45.11-220.83 135.33a16 16 0 00-.27 17.77C82.92 340.8 161.8 400 255.66 400c92.84 0 173.34-59.38 221.79-135.25a16.14 16.14 0 000-17.47C428.89 172.28 347.8 112 255.66 112z"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="32"
          />
          <circle
            cx="256"
            cy="256"
            r="80"
            fill="none"
            stroke="currentColor"
            stroke-miterlimit="10"
            strokeWidth="32"
          />
        </svg>
      );
    case 'fullscreen':
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={'ionicon ' + className}
          viewBox="0 0 512 512"
        >
          <title>Expand</title>
          <path
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="32"
            d="M432 320v112H320M421.8 421.77L304 304M80 192V80h112M90.2 90.23L208 208M320 80h112v112M421.77 90.2L304 208M192 432H80V320M90.23 421.8L208 304"
          />
        </svg>
      );
    case 'minus':
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={'ionicon ' + className}
          viewBox="0 0 512 512"
        >
          <title>Remove</title>
          <path
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="32"
            d="M400 256H112"
          />
        </svg>
      );
    case 'plus':
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={'ionicon ' + className}
          viewBox="0 0 512 512"
        >
          <title>Add</title>
          <path
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="32"
            d="M256 112v288M400 256H112"
          />
        </svg>
      );
    case 'return':
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={'ionicon ' + className}
          viewBox="0 0 512 512"
        >
          <title>Arrow Back</title>
          <path
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="48"
            d="M244 400L100 256l144-144M120 256h292"
          />
        </svg>
      );
    case 'remove':
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={'ionicon ' + className}
          viewBox="0 0 512 512"
        >
          <title>Remove</title>
          <path
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="32"
            d="M400 256H112"
          />
        </svg>
      );
    case 'shield':
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={'ionicon ' + className}
          viewBox="0 0 512 512"
        >
          <title>Shield Checkmark</title>
          <path
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="32"
            d="M336 176L225.2 304 176 255.8"
          />
          <path
            d="M463.1 112.37C373.68 96.33 336.71 84.45 256 48c-80.71 36.45-117.68 48.33-207.1 64.37C32.7 369.13 240.58 457.79 256 464c15.42-6.21 223.3-94.87 207.1-351.63z"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="32"
          />
        </svg>
      );
    default:
      return null;
  }
}

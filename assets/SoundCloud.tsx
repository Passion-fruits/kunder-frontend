interface Props {
  size: number;
}

export default function SoundcloudIcon({ size }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={(size * 35) / 12}
      height={size}
      viewBox="0 0 35.198 15.399"
    >
      <path
        id="Icon_metro-soundcloud"
        data-name="Icon metro-soundcloud"
        d="M33.23,18.244a4.688,4.688,0,0,0-1.755.339A7.891,7.891,0,0,0,23.5,11.568a8.373,8.373,0,0,0-2.9.521c-.342.127-.432.258-.432.513V26.445a.529.529,0,0,0,.485.515c.012,0,12.5.007,12.577.007a4.365,4.365,0,1,0,0-8.724ZM16.32,26.967h1.1l.55-7.707-.55-7.692h-1.1l-.55,7.692Zm-3.3,0h-1.1l-.55-5.594.55-5.405h1.1l.55,5.5Zm-5.5,0h1.1l.55-4.4-.55-4.4H7.52l-.55,4.4Zm-4.4-2.2h1.1l.55-2.2-.55-2.2h-1.1l-.55,2.2Z"
        transform="translate(-2.571 -11.568)"
        fill="#ff8000"
      />
    </svg>
  );
}

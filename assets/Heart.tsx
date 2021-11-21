interface Props {
  size: number;
}

export default function HeartIcon({ size }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={(size * 18) / 16}
      height={size}
      viewBox="0 0 18.856 16.542"
    >
      <path
        id="Icon_feather-heart"
        data-name="Icon feather-heart"
        d="M18.341,5.827a4.587,4.587,0,0,0-6.46,0L11,6.7l-.88-.875a4.589,4.589,0,0,0-6.46,0,4.518,4.518,0,0,0,0,6.419l.88.875L11,19.539l6.46-6.419.88-.875a4.517,4.517,0,0,0,0-6.419Z"
        transform="translate(-1.573 -3.747)"
        fill="none"
        stroke="#fff"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.5"
      />
    </svg>
  );
}

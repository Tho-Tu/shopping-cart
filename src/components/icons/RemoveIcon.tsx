type colorType = {
  color: string;
};

const RemoveIcon = ({ color }: colorType) => {
  return (
    <svg
      fill={`${color}`}
      xmlns="http://www.w3.org/2000/svg"
      height="24"
      viewBox="0 -960 960 960"
      width="24"
    >
      <path d="M200-440v-80h560v80H200Z" />
    </svg>
  );
};

export default RemoveIcon;
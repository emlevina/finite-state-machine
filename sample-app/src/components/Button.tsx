type Props = {
  handleClick: () => void;
  text: string;
};

export default function Button({ handleClick, text }: Props) {
  return <button onClick={handleClick}>{text}</button>;
}

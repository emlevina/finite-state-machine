import { useGetNumberQuery } from "../services/number";

type Props = {
  number: string;
};

export default function Fact({ number }: Props) {
  const { data } = useGetNumberQuery(number);

  return (
    <div>
      <p>{data}</p>
    </div>
  );
}

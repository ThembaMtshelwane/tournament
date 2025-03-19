type Props = { name: string };

const PlayerTag = ({ name }: Props) => {
  return <div className=" p-2 bg-[#DDE9F1] w-fit rounded-lg">{name}</div>;
};

export default PlayerTag;

import Arrow from '@/assets/arrow.svg';

export default function Banner() {
  console.log(Arrow);
  return (
    <div className="container flex flex-col px-4">
      <div>
        <p>I BUILD THINGS WITH MY COMPUTER</p>
      </div>
      <a className="flex">
        <span>See what I have been working on</span>
        <span>{`---------------> `}</span>
        {/* <Arrow width={24} height={24} /> */}
      </a>
    </div>
  );
}

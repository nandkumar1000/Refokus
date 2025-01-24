export default function Stripe({ val }) {
  return (
    <div className="w-[16.56%] px-10 py-5 border-t-[1.2px] border-b-[1.2px] border-r-[1.2px] border-zinc-700 flex-justify-between items-center bg-zinc-400">
      <img src={val.url} alt=""></img>
      <span style={{ color: "black" }}>{val.number}</span>
    </div>
  )
} 
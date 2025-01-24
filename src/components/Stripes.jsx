import Stripe from "./Stripe";

export default function Stripes() {
  const data = [
    { url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d76e013990180ea2be31_jungle-logo-black.svg", number: 48 },
    { url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359b8724afca0a36e7e8d_633c148cf63c4467416f9bea_61ee848c05ba9c9caff5fd64_yahoo.svg", number: 2 },
    { url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d300a4cce143f24735d3_sevdesk-black.svg", number: 11 },
    { url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359bafc1c77261cbab22d_633c148a8b25dcfcd2e387b2_61957e512832dbf5efe8cdc6_mural.svg", number: 48 },
    { url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359b5306b05c2b704224d_65b2ca264ed8d89bad9b331c_Logo%2520Black%25201.svg", number: 48 },
    { url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359ba3497cf06ff9e8f71_633c14899b819b7aafbbcde1_627a8da607be73fd13e76134_basf.svg", number: 48 },
  ];

  return (
    <div className="overflow-hidden py-4 bg-zinc-900 px-1 flex justify-center" style={{ marginTop: "55px" }}>
      <div className="flex whitespace-nowrap">
        {data.map((elem, index) => (
          <Stripe key={index} val={elem} />
        ))}
      </div>
    </div>
  );
}

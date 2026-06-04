"use client"

export default function Swap() {
 const inputToken = "0xE7d5027106D60F3419bEA006E538a516fdcd2008"
  const outputToken = "0xed500EF5e2cdF642ce715675a67A31bDe09a7a97"
  const uniswapUrl = `https://app.uniswap.org/swap?inputCurrency=${inputToken}&outputCurrency=${outputToken}&exactField=input&exactAmount=1&theme=dark&swapOnly=true&hideLocationDescriptor=true`

  return (
    <div className="w-full max-w-[480px] mx-auto">
      <iframe
        src={uniswapUrl}
        height="500px"
        width="100%"
        style={{
          border: 0,
          margin: "0 auto",
          display: "block",
          borderRadius: "10px",
          maxWidth: "960px",
          minWidth: "300px",
          backgroundColor: "#191B1F",
        }}
      />
    </div>
  )
}
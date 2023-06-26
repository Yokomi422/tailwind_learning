import Image from 'next/image'

export default function Home() {
  return (
    <>
    <div>
        <p className="border border-red-400 p-16 m-8 text-lg font-bold tracking-wider">font sizeの練習</p>
        <p className="border border-red-400 p-16 m-8 text-lg font-bold">font sizeの練習</p>
    </div>
    <div className="border border-green-600 p-8 m-8 text-center">
        <p>小窓</p>
        <div>ちゃん</div>
    </div>
    <div className="border border-green-600 p-8 m-8 text-center">
        <p>色の練習</p>
        <p className="text-slate-500">text Color</p>
        <p className="bg-blue-200">background</p>
        <p className="border border-red-800">border color</p>
    </div>
    <div className="border border-green-600 p-8 m-8 text-center">
        <input type="text" className="border border-red-300 outline-none focus:border-blue-300"/>
    </div>
    </>
  )
}

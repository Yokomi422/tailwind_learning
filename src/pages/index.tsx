import Image from 'next/image'

export default function Home() {
  return (
    <>
      <span className="border border-red-400 m-8">spanタグです</span>
      <span className="border border-red-400 p-12">spanタグです</span>
      <p className="mt-12 border border-blue-500 ">ここはブロック要素です。</p>
      <p className="m-8 p-12 border border-blue-500">ここはブロック要素です。</p>
      <p className="m-16 p-12 border border-blue-500">ここはブロック要素です。</p>
      <p className="m-4 border border-red-400 p-4">
        <span className="border border-blue-400">spanタグです。</span>
      </p>
      <div className="border border-red-800 w-1/2 h-8 m-12">
        <p>width・heightの練習だよ</p>
      </div>
      <div className="border border-red-800 max-w-3xl">
        <p>width・heightの練習だよ</p>
      </div>
    </>
  )
}

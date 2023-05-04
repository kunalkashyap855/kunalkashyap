

function Header() {
  return (
    <div className="flex w-full justify-between">
        <h2 className="font-extrabold text-gray-900 text-2xl">
            Kunal Kashyap<span className="font-extrabold text-blue-500 text-4xl">.</span>
        </h2>
        <div className="text-lg">
            <p><a href="#projectSection" className="font-semibold text-gray-900 hover:text-black">Projects</a></p>
            <a href="https://kunalkashyap.substack.com/" target="_blank" className="font-semibold text-blue-500 hover:text-blue-700">Blog</a>
        </div>
    </div>
  )
}

export default Header
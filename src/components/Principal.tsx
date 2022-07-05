export function Principal() {
    return (
        <div className="flex flex-col gap-2 items-center">
            <div className="w-28 h-28 flex items-center justify-center border-blue-600 border-4 rounded-full">
                <img
                    className="w-24 rounded-full"
                    src="https://github.com/matheusjurkovich.png"
                    alt="Image do Matheus Jurkovich"
                />
            </div>
            <h1 className="text-3xl font-bold">Matheus Jurkovich</h1>
            <p className="opacity-90 text-lg">@matheusjurkovich</p>

            <ul className="flex flex-col gap-2 mt-5 text-gray-50 text-sm">
                <li className="font-bold bg-blue-600 rounded px-20 py-4 hover:bg-blue-400 transition-colors cursor-pointer">
                    <a 
                        href="https://linkedin.com/in/matheusjurkovich/"
                        target="_blank">💼 Linkedin
                    </a>
                </li>
                <li className="font-bold bg-blue-600 rounded px-20 py-4 hover:bg-blue-400 transition-colors cursor-pointer">
                    <a 
                        href="https://instagram.com/matheusjurkovich"
                        target="_blank">📷 Instagram
                    </a>
                </li>
                <li className="font-bold bg-blue-600 rounded px-20 py-4 hover:bg-blue-400 transition-colors cursor-pointer">
                    <a 
                        href="https://twitter.com/mtjurko"
                        target="_blank">🐦 Twitter
                    </a>
                </li>
                <li className="font-bold bg-blue-600 rounded px-20 py-4 hover:bg-blue-400 transition-colors cursor-pointer">
                    <a 
                        href="https://github.com/matheusjurkovich"
                        target="_blank">🐱 Github
                    </a>
                </li>
            </ul>
        </div>
    )
}
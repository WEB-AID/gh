import Image from "next/image";

export default function Greetings() {
    return (
        <div className="md:overflow-hidden mt-6">
            <div className="flex flex-col md:flex-row md:w-full md:items-center">
                <article className="flex flex-center items-center flex-col max-[767px]:px-12 md:px-0 max-[767px]:mx-auto md:pl-24 md:w-1/2">
                    <h1 className="text-xl mb-5">Georgian House</h1>
                    12nam atque! Ea soluta excepturi labore, quis vero ipsum illum repellendus animi,
                    fugit ratione tenetur fuga, consequatur blanditiis at aperiam magni dolores velit
                    molestiae corporis maiores debitis officia? Iusto expedita tempora adipisci voluptate?
                </article>
                <div className="md:w-1/2 max-[767px]:mx-auto max-[767px]:px-12">
                    <Image
                        src="/translucent-image.png"
                        alt="Plant logo"
                        width="0"
                        height="0"
                        sizes="100vw"
                        className="w-auto -mt-4 md:-mt-10"
                    />
                </div>
            </div>
        </div>
    )
}
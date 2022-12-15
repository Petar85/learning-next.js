import Image from "next/image"


const Page = () => {
  return (
    <div>
        <h1> Events Page</h1>
        <div>
            <a href="#">
                <Image src="" alt="" />
                <h2> Events in London</h2>
            </a> 
            <a href="#">
                <Image src="" alt="" />
                <h2> Events in San Francisco</h2>
            </a> 
            <a href="#">
                <Image src="" alt="" />
                <h2> Events in Barcelona</h2>
            </a> 
        </div>
    </div>
  )
}

export default Page;
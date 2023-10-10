import { UserButton } from "@clerk/nextjs";
 
export default function Home() {
  return (
    <>
      <main>
        <h1 className="head-text">Threndz</h1>
        <div>
          <UserButton afterSignOutUrl="/"/>
        </div>
      </main>
    </>
  )
}
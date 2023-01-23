import Navigation from "@/components/navigation/navigation.component"
import Hero from "@/components/hero/hero.component";


export default function App() {
  return (
    <div className="flex flex-col">
      <h2 className="mx-auto mb-10 text-4xl ">Castanas Salon</h2>
      <Hero></Hero>
      <div className="w-full bg-green-700 h-[750px]"></div>
      <div className="w-full bg-red-500 h-[750px]"></div>

    </div>




  )
}
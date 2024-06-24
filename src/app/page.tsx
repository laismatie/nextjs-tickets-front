import Image from "next/image";
import { Title } from "./components/Title";
import { EventCard } from "./components/EventCard";
import { EventModel } from "./model";

export default function HomePage() {
  const events: EventModel[] = [
    {
      id: "1",
      name: "Mulheres que Mudam o Mundo com a Tecnologia",
      organization: "Developer Girls",
      date: "2024-03-16T00:00:00.000Z",
      location: "Campo Grande, MS",
      price: 0,
      rating: "",
      image_url: "https://images.sympla.com.br/65c2f14eac7a9-lg.png"
    },
    {
      id: "1",
      name: "Mulheres que Mudam o Mundo com a Tecnologia",
      organization: "Developer Girls",
      date: "2024-03-16T00:00:00.000Z",
      location: "Campo Grande, MS",
      price: 0,
      rating: "",
      image_url: "https://images.sympla.com.br/65c2f14eac7a9-lg.png"
    },
    {
      id: "1",
      name: "Mulheres que Mudam o Mundo com a Tecnologia",
      organization: "Developer Girls",
      date: "2024-03-16T00:00:00.000Z",
      location: "Campo Grande, MS",
      price: 0,
      rating: "",
      image_url: "https://images.sympla.com.br/65c2f14eac7a9-lg.png"
    },
  ];
  return (
    <main className="mt-10 flex flex-col">
    <Title>Eventos disponíveis</Title>
    <div className="mt-8 sm:grid sm:grid-cols-auto-fit-cards flex flex-wrap justify-center gap-x-2 gap-y-4">
      {events.map((event) => (
        <EventCard key={event.id} event={event}/>
      ))}
    </div>
  </main>
  );
}

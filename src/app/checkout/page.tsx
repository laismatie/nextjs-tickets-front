import { Title } from "../components/Title";
import { EventModel } from "../model";

export default async function CheckoutPage() {
  const event: EventModel = {
    id: "1",
    name: "Mulheres que Mudam o Mundo com a Tecnologia",
    organization: "Developer Girls",
    date: "2024-03-16T00:00:00.000Z",
    location: "Campo Grande, MS",
    price: 0,
    rating: "",
    image_url: "https://images.sympla.com.br/65c2f14eac7a9-lg.png"
  };

  return (
    <main className="mt-10 flex flex-wrap justify-center md:justify-between">
      <div className="mb-4 flex max-h-[250px] w-full max-w-[478px] flex-col gap-y-6 rounded-2xl bg-secondary p-4">
        <Title>Resumo da compra</Title>
        <p className="font-semibold">
          {event.name}
          <br />
          {event.location}
          <br />
          {new Date(event.date).toLocaleDateString("pt-BR", {
            weekday: "long",
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
          })}
        </p>
        <p className="font-semibold text-white">{`preço total`}</p>
      </div>
      <div className="w-full max-w-[650px] rounded-2xl bg-secondary p-4">
        <Title>Informações de pagamento</Title>
          <div className="flex flex-col">
            <label htmlFor="titular">E-mail</label>
            <input
              type="email"
              name="email"
              className="mt-2 border-solid rounded p-2 h-10 bg-input"
              defaultValue={"test@test.com"}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="titular">Nome no cartão</label>
            <input
              type="text"
              name="card_name"
              className="mt-2 border-solid rounded p-2 h-10 bg-input"
              defaultValue={"Teste Teste"}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="cc">Numero do cartão</label>
            <input
              type="card_number"
              name="cc"
              className="mt-2 border-solid rounded p-2 h-10 bg-input"
              defaultValue={"4111111111111111"}
            />
          </div>
          <div className="flex flex-wrap sm:justify-between">
            <div className="flex w-full flex-col md:w-auto">
              <label htmlFor="expire">Vencimento</label>
              <input
                type="text"
                name="expire_date"
                className="mt-2 sm:w-[240px] border-solid rounded p-2 h-10 bg-input"
                defaultValue={"12/2024"}
              />
            </div>
            <div className="flex w-full flex-col md:w-auto">
              <label htmlFor="cvv">CVV</label>
              <input
                type="text"
                name="cvv"
                className="mt-2 sm:w-[240px] border-solid rounded p-2 h-10 bg-input"
                defaultValue={"123"}
              />
            </div>
          </div>
          <button className="rounded-lg bg-btn-primary py-4 px-4 text-sm font-semibold uppercase text-btn-primary">
            Finalizar pagamento
          </button>
      </div>
    </main>
  );
}
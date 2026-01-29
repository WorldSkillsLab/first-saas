import ButtonLogin from "@/components/ButtonLogin";
import ListItem from "@/components/ListItem";
import FAQListItem from "@/components/FAQListItem";
import Image from "next/image";
import productDemo from "./productDemo.jpeg";
import { auth } from "@/auth";


export default async function Home() {

  const session = await auth();
  console.log("Session:", session);


  return (
    <main>
      {/* HEADER */}
      <section className="bg-base-200">
        <div className="max-w-xl mx-auto bg-base-200 flex justify-between items-center px-8 py-2">
          <div className="font-bold">World Skills Lab SaaS</div>

          <div className="space-x-4">
            <a className="link link-hover" href="#pricing">
              Pricing
            </a>
            <a className="link link-hover" href="#faq">
              FAQ
            </a>
          </div>

          <ButtonLogin session={session}/>
        </div>
      </section>

      {/* HERO */}
      <section className="text-center py-32 px-8 max-w-xl mx-auto">
        <Image
          src={productDemo}
          alt="Product Demo"
          className="mx-auto mb-12 rounded-3xl shadow-lg"
        />
        <h1 className="text-4xl font-extrabold mb-6">
          Collect customer feedback to build better products
        </h1>

        <p className="mb-8">
          Create a feedback board in minutes, prioritize features, and build
          products your customers will love.
        </p>

        <ButtonLogin session={session} />
      </section>

      {/* PRICING */}
      <section className="bg-base-200" id="pricing">
        <div className="py-32 px-8 max-w-3xl mx-auto">
          <p className="text-sm uppercase font-medium text-center text-primary mb-4">
            Pricing
          </p>

          <h2 className="text-3xl lg:text-4xl font-extrabold mb-12 text-center">
            A pricing that adapts to your needs
          </h2>

          <div className="p-8 bg-base-100 max-w-sm rounded-3xl mx-auto text-center">
            <div className="flex gap-2 items-baseline justify-center mb-6">
              <div className="text-4xl font-black">$19</div>
              <div className="uppercase text-sm font-medium opacity-60">
                /month
              </div>
            </div>

            <ul className="space-y-3 text-left mb-8">
              <ListItem>Collect customer feedback</ListItem>
              <ListItem>Unlimited feedback boards</ListItem>
              <ListItem>Admin dashboard</ListItem>
              <ListItem>24/7 Support</ListItem>
            </ul>

            <ButtonLogin session={session} />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-base-200" id="faq">
        <div className="py-32 px-8 max-w-3xl mx-auto">
          <p className="text-sm uppercase font-medium text-center text-primary mb-4">
            FAQ
          </p>

          <h2 className="text-3xl lg:text-4xl font-extrabold mb-12 text-center">
            Frequently asked questions
          </h2>
          <ul>
            {[
              {
                question: "What do I get exactly?",
                answer: "Lorem Ipsum",
              },
              {
                question: "Can I get a refund?",
                answer: "Lorem Ipsum",
              },
              {
                question: "I have another question",
                answer: "Lorem Ipsum",
              },
            ].map((qa) => (
              <FAQListItem key={qa.question} qa={qa} />
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}

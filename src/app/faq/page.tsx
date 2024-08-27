import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FAQ() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">FAQ (Foire Aux Questions Loufoques)</h1>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>C'est quoi KRPRSS ?</AccordionTrigger>
          <AccordionContent>
            KRPRSS, c'est comme si la Tour Eiffel et un croissant avaient eu un bébé stylé. On fait des fringues qui font dire "Wow" aux Parisiens, ce qui n'est pas une mince affaire vu qu'ils sont blasés de tout.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Vos vêtements sont-ils fabriqués en France ?</AccordionTrigger>
          <AccordionContent>
            Oui, nos vêtements sont fabriqués en France, plus précisément dans un atelier secret sous le Sacré-Cœur. Non, on déconne. Ils sont faits dans diverses régions de France, avec tout l'amour et le savoir-faire français (et un peu de râlerie, pour le goût).
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Puis-je retourner un article ?</AccordionTrigger>
          <AccordionContent>
            Bien sûr ! Vous avez 14 jours pour nous retourner un article, même si vous vous êtes rendu compte que le jaune fluo ne vous va pas aussi bien que vous le pensiez après cette soirée arrosée. On ne juge pas, promis.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>Faites-vous des collaborations ?</AccordionTrigger>
          <AccordionContent>
            On adore les collabs ! Notre dernière en date était avec un boulanger du 18ème pour une collection "Pain au Chocolat vs Chocolatine". Ça a failli déclencher une guerre civile, mais les t-shirts étaient canons.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger>Comment entretenir mes vêtements KRPRSS ?</AccordionTrigger>
          <AccordionContent>
            Avec autant d'amour que vous donneriez à votre chat, mais sans les croquettes. Lavage à 30°C, pas de sèche-linge, et surtout, ne les portez pas pour courir après le bus. Nos vêtements sont stylés, pas sportifs.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}
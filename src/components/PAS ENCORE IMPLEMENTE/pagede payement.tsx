/**
 * v0 by Vercel.
 * @see https://v0.dev/t/n6YcqLY7zrz
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
"use client"

import { useState, useEffect } from "react"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogClose } from "@/components/ui/dialog"

export default function Component() {
  const [showExitPopup, setShowExitPopup] = useState(false)
  const handleWindowUnload = (event) => {
    event.preventDefault()
    setShowExitPopup(true)
  }
  useEffect(() => {
    window.addEventListener("beforeunload", handleWindowUnload)
    return () => {
      window.removeEventListener("beforeunload", handleWindowUnload)
    }
  }, [])
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4 p-4 md:p-6">
        <Card className="w-full">
          <CardHeader>
            <CardTitle>Informations de paiement</CardTitle>
            <CardDescription>Saisissez vos coordonnées de paiement</CardDescription>
          </CardHeader>
          <CardContent>
            <form className="grid gap-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="first-name">Prénom</Label>
                  <Input id="first-name" type="text" placeholder="Saisissez votre prénom" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="last-name">Nom</Label>
                  <Input id="last-name" type="text" placeholder="Saisissez votre nom" />
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="Saisissez votre email" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="card-number">Numéro de carte</Label>
                <Input id="card-number" type="text" placeholder="Saisissez le numéro de votre carte" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="expiry-date">Date d'expiration</Label>
                  <Input id="expiry-date" type="text" placeholder="MM/AA" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="cvc">CVC</Label>
                  <Input id="cvc" type="text" placeholder="CVC" />
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="zip-code">Code postal</Label>
                <Input id="zip-code" type="text" placeholder="Saisissez votre code postal" />
              </div>
            </form>
          </CardContent>
        </Card>
        <div className="grid gap-6">
          <Card className="w-full">
            <CardHeader>
              <CardTitle>Code promo</CardTitle>
              <CardDescription>Saisissez votre code promo</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-2">
              <div className="flex items-center">
                <Input id="promo-code" type="text" placeholder="Saisissez le code promo" className="flex-1" />
                <Button size="sm" className="ml-2">
                  Appliquer
                </Button>
              </div>
            </CardContent>
          </Card>
          <Card className="w-full">
            <CardHeader>
              <CardTitle>Récapitulatif de la commande</CardTitle>
              <CardDescription>Vérifiez les détails de votre commande</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                <div className="grid gap-2">
                  <div className="flex items-center justify-between">
                    <span>Sous-total</span>
                    <span>99,99 €</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Code promo</span>
                    <span className="text-green-500">-10,00 €</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Taxe</span>
                    <span>9,99 €</span>
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between font-bold">
                    <span>Total</span>
                    <span>99,98 €</span>
                  </div>
                </div>
                <div className="grid gap-2">
                  <Button size="lg" className="w-full">
                    Passer la commande
                  </Button>
                  <div className="text-center text-muted-foreground text-sm">
                    En passant votre commande, vous acceptez nos{" "}
                    <Link href="#" className="underline" prefetch={false}>
                      conditions d'utilisation
                    </Link>{" "}
                    et notre{" "}
                    <Link href="#" className="underline" prefetch={false}>
                      politique de confidentialité
                    </Link>
                    .
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="col-span-2 grid gap-6">
          <Card className="w-full">
            <CardHeader>
              <CardTitle>Paiement sécurisé</CardTitle>
              <CardDescription>Vos informations de paiement sont cryptées et protégées</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                <div className="flex items-center gap-4">
                  <LockIcon className="w-6 h-6 text-primary" />
                  <div>
                    <h3 className="font-semibold">Cryptage SSL/TLS</h3>
                    <p className="text-muted-foreground">
                      Vos informations de paiement sont transmises de manière sécurisée à l'aide de la dernière
                      technologie de cryptage.
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <ShieldIcon className="w-6 h-6 text-primary" />
                  <div>
                    <h3 className="font-semibold">Conformité PCI</h3>
                    <p className="text-muted-foreground">
                      Notre traitement des paiements est entièrement conforme aux normes de sécurité PCI en vigueur dans
                      l'industrie.
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <KeyIcon className="w-6 h-6 text-primary" />
                  <div>
                    <h3 className="font-semibold">Protection contre la fraude</h3>
                    <p className="text-muted-foreground">
                      Des mesures avancées de détection et de prévention de la fraude sont en place pour protéger vos
                      transactions.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="w-full">
            <CardHeader>
              <CardTitle>Approuvé par des milliers de clients</CardTitle>
              <CardDescription>Nos clients apprécient notre expérience de paiement sécurisée et fiable</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                <div className="flex items-center gap-4">
                  <Avatar className="border w-12 h-12">
                    <AvatarImage src="/placeholder-user.jpg" alt="@username" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-semibold">John Doe</h3>
                    <p className="text-muted-foreground">
                      "J'ai utilisé Acme Checkout pour tous mes achats en ligne et c'est toujours une expérience sans
                      faille."
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Avatar className="border w-12 h-12">
                    <AvatarImage src="/placeholder-user.jpg" alt="@username" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-semibold">Jane Smith</h3>
                    <p className="text-muted-foreground">
                      "J'adore la facilité et la sécurité du processus de paiement avec Acme. C'est mon choix pour tous
                      mes achats en ligne."
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Avatar className="border w-12 h-12">
                    <AvatarImage src="/placeholder-user.jpg" alt="@username" />
                    <AvatarFallback>AS</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-semibold">Alex Sanchez</h3>
                    <p className="text-muted-foreground">
                      "Acme Checkout ne m'a jamais déçu. Le service client est également de premier ordre chaque fois
                      que j'ai eu des problèmes."
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      {showExitPopup && (
        <Dialog>
          <DialogContent className="max-w-md">
            <DialogHeader>
              <DialogTitle>Voulez-vous vraiment quitter la page ?</DialogTitle>
              <DialogDescription>
                Vos informations de paiement ne seront pas enregistrées si vous quittez maintenant.
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <div>
                <Button variant="outline">Rester sur la page</Button>
              </div>
              <Button>Quitter la page</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}
    </div>
  )
}

function KeyIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4" />
      <path d="m21 2-9.6 9.6" />
      <circle cx="7.5" cy="15.5" r="5.5" />
    </svg>
  )
}


function LockIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  )
}


function ShieldIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
    </svg>
  )
}
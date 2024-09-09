/**
 * v0 by Vercel.
 * @see https://v0.dev/t/PxgOEOYjLQJ
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
"use client"

import { useState, useMemo } from "react"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem, DropdownMenuRadioGroup, DropdownMenuRadioItem } from "@/components/ui/dropdown-menu"
import { Card } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function Component() {
  const [sortColumn, setSortColumn] = useState("totalOrders")
  const [sortDirection, setSortDirection] = useState("desc")
  const [customers, setCustomers] = useState([
    {
      id: 1,
      name: "Sophia Anderson",
      email: "sophia@example.com",
      totalOrders: 45,
      totalSpent: 2500.99,
    },
    {
      id: 2,
      name: "Liam Johnson",
      email: "liam@example.com",
      totalOrders: 32,
      totalSpent: 1800.75,
    },
    {
      id: 3,
      name: "Emma Brown",
      email: "emma@example.com",
      totalOrders: 28,
      totalSpent: 1500.5,
    },
    {
      id: 4,
      name: "Noah Williams",
      email: "noah@example.com",
      totalOrders: 22,
      totalSpent: 1200.25,
    },
    {
      id: 5,
      name: "Olivia Davis",
      email: "olivia@example.com",
      totalOrders: 18,
      totalSpent: 950.75,
    },
  ])
  const [selectedCustomers, setSelectedCustomers] = useState([])
  const [showEmailModal, setShowEmailModal] = useState(false)
  const handleSort = (column) => {
    if (sortColumn === column) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc")
    } else {
      setSortColumn(column)
      setSortDirection("desc")
    }
  }
  const sortedCustomers = useMemo(() => {
    const sorted = [...customers]
    sorted.sort((a, b) => {
      if (a[sortColumn] < b[sortColumn]) return sortDirection === "asc" ? -1 : 1
      if (a[sortColumn] > b[sortColumn]) return sortDirection === "asc" ? 1 : -1
      return 0
    })
    return sorted
  }, [customers, sortColumn, sortDirection])
  const handleSelectCustomer = (customer) => {
    if (selectedCustomers.includes(customer.id)) {
      setSelectedCustomers(selectedCustomers.filter((id) => id !== customer.id))
    } else {
      setSelectedCustomers([...selectedCustomers, customer.id])
    }
  }
  const handleSendEmail = () => {
    setShowEmailModal(true)
  }
  const handleCloseEmailModal = () => {
    setShowEmailModal(false)
  }
  const handleSendEmailToCustomers = (subject, message) => {
    const selectedCustomersData = sortedCustomers.filter((customer) => selectedCustomers.includes(customer.id))
    selectedCustomersData.forEach((customer) => {
      console.log(`Sending email to ${customer.email} with subject: ${subject} and message: ${message}`)
    })
    setShowEmailModal(false)
  }
  return (
    <div className="grid min-h-screen w-full overflow-hidden lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r bg-muted/40 lg:block">
        <div className="flex flex-col gap-2">
          <div className="flex h-[60px] items-center px-6">
            <Link href="#" className="flex items-center gap-2 font-semibold" prefetch={false}>
              <Package2Icon className="h-6 w-6" />
              <span className="">Acme Inc</span>
            </Link>
          </div>
          <div className="flex-1">
            <nav className="grid items-start px-4 text-sm font-medium">
              <Link
                href="#"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                prefetch={false}
              >
                <ShoppingCartIcon className="h-4 w-4" />
                Orders
                <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">12</Badge>
              </Link>
              <Link
                href="#"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                prefetch={false}
              >
                <PackageIcon className="h-4 w-4" />
                Products
              </Link>
              <Link
                href="#"
                className="flex items-center gap-3 rounded-lg bg-muted px-3 py-2 text-primary transition-all hover:text-primary"
                prefetch={false}
              >
                <UsersIcon className="h-4 w-4" />
                Customers
              </Link>
              <Link
                href="#"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                prefetch={false}
              >
                <LineChartIcon className="h-4 w-4" />
                Analytics
              </Link>
            </nav>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <header className="flex h-14 lg:h-[60px] items-center gap-4 border-b bg-muted/40 px-6">
          <Link href="#" className="lg:hidden" prefetch={false}>
            <Package2Icon className="h-6 w-6" />
            <span className="sr-only">Home</span>
          </Link>
          <div className="flex-1">
            <h1 className="font-semibold text-lg">Customers</h1>
          </div>
          <div className="flex flex-1 items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
            <Button onClick={handleSendEmail} className="ml-auto">
              Send Email
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <img
                    src="/placeholder.svg"
                    width="32"
                    height="32"
                    className="rounded-full"
                    alt="Avatar"
                    style={{ aspectRatio: "32/32", objectFit: "cover" }}
                  />
                  <span className="sr-only">Toggle user menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuItem>Support</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Logout</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>
        <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
          <div className="flex items-center gap-4 mb-4">
            <h2 className="text-2xl font-bold">Customers</h2>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="ml-auto shrink-0">
                  <ArrowUpDownIcon className="w-4 h-4 mr-2" />
                  Sort by
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-[200px]" align="end">
                <DropdownMenuRadioGroup value={sortColumn}>
                  <DropdownMenuRadioItem value="totalOrders" onClick={() => handleSort("totalOrders")}>
                    Total Orders
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="totalSpent" onClick={() => handleSort("totalSpent")}>
                    Total Spent
                  </DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <div className="grid gap-4">
            {sortedCustomers.map((customer) => (
              <Card key={customer.id} className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <Checkbox
                    checked={selectedCustomers.includes(customer.id)}
                    onCheckedChange={() => handleSelectCustomer(customer)}
                  />
                  <div>
                    <h3 className="font-semibold">{customer.name}</h3>
                    <p className="text-muted-foreground">{customer.email}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-semibold">${customer.totalSpent.toFixed(2)}</p>
                  <p className="text-muted-foreground">{customer.totalOrders} orders</p>
                </div>
              </Card>
            ))}
          </div>
        </main>
      </div>
      {showEmailModal && (
        <div>
          <div>
            <div>
              <div>Send Email</div>
              <div>
                <div className="flex items-center justify-between">
                  <XIcon className="h-4 w-4" />
                  <div className="flex items-center gap-2">
                    <Checkbox
                      checked={selectedCustomers.length > 0}
                      onCheckedChange={() =>
                        setSelectedCustomers(selectedCustomers.length > 0 ? [] : sortedCustomers.map((c) => c.id))
                      }
                    >
                      Select All
                    </Checkbox>
                    <Button variant="outline" onClick={handleCloseEmailModal}>
                      <div className="flex items-center gap-2">
                        <CalendarDaysIcon className="h-4 w-4" />
                        <span>Choose Send Date</span>
                      </div>
                    </Button>
                    <Button type="submit">Send Email</Button>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <form
                onSubmit={(e) => {
                  e.preventDefault()
                  handleSendEmailToCustomers(e.target.elements.subject.value, e.target.elements.message.value)
                }}
              >
                <div className="grid gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input type="text" id="subject" name="subject" required />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" name="message" required />
                  </div>
                </div>
                <div className="mt-6 flex justify-end gap-2">
                  <Button type="button" variant="outline" onClick={handleCloseEmailModal}>
                    Cancel
                  </Button>
                  <Button type="submit">Send</Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

function ArrowUpDownIcon(props) {
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
      <path d="m21 16-4 4-4-4" />
      <path d="M17 20V4" />
      <path d="m3 8 4-4 4 4" />
      <path d="M7 4v16" />
    </svg>
  )
}


function CalendarDaysIcon(props) {
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
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
      <path d="M8 14h.01" />
      <path d="M12 14h.01" />
      <path d="M16 14h.01" />
      <path d="M8 18h.01" />
      <path d="M12 18h.01" />
      <path d="M16 18h.01" />
    </svg>
  )
}


function LineChartIcon(props) {
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
      <path d="M3 3v18h18" />
      <path d="m19 9-5 5-4-4-3 3" />
    </svg>
  )
}


function Package2Icon(props) {
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
      <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
      <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9" />
      <path d="M12 3v6" />
    </svg>
  )
}


function PackageIcon(props) {
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
      <path d="m7.5 4.27 9 5.15" />
      <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
      <path d="m3.3 7 8.7 5 8.7-5" />
      <path d="M12 22V12" />
    </svg>
  )
}


function ShoppingCartIcon(props) {
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
      <circle cx="8" cy="21" r="1" />
      <circle cx="19" cy="21" r="1" />
      <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
    </svg>
  )
}


function UsersIcon(props) {
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
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}


function XIcon(props) {
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
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}
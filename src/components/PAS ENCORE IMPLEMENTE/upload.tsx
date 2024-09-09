/**
 * v0 by Vercel.
 * @see https://v0.dev/t/3WNpdSdjiMf
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
"use client"

import { useState } from "react"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function Component() {
  const [file, setFile] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const handleDrop = (event) => {
    event.preventDefault()
    event.stopPropagation()
    if (event.dataTransfer.files && event.dataTransfer.files.length > 0) {
      setFile(event.dataTransfer.files[0])
    }
  }
  const handleFileChange = (event) => {
    if (event.target.files && event.target.files.length > 0) {
      setFile(event.target.files[0])
    }
  }
  const handleUpload = async () => {
    if (!file) return
    setLoading(true)
    setError(null)
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000))
      const mockupImage = (
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">T-Shirt Mockup</h2>
          <div className="bg-gray-200 p-8 rounded-lg">
            <img
              src="/placeholder.svg"
              alt="T-Shirt Mockup"
              width={400}
              height={500}
              className="w-full h-auto object-contain"
              style={{ aspectRatio: "400/500", objectFit: "cover" }}
            />
          </div>
        </div>
      )
      setFile(null)
    } catch (err) {
      setError("Error uploading file. Please try again.")
    } finally {
      setLoading(false)
    }
  }
  return (
    <div className="grid gap-4">
      <Label htmlFor="file-upload">Upload an Image</Label>
      <p className="text-sm text-muted-foreground">
        Drag and drop your image here or click the button to select a file.
      </p>
      <div
        onDragOver={(event) => event.preventDefault()}
        onDrop={handleDrop}
        className="flex h-32 items-center justify-center rounded-md border-2 border-dashed border-muted transition-colors hover:border-primary"
      >
        {file ? (
          <img
            src="/placeholder.svg"
            alt="Uploaded Image"
            width={200}
            height={200}
            className="max-h-full max-w-full object-contain"
            style={{ aspectRatio: "200/200", objectFit: "cover" }}
          />
        ) : (
          <div className="flex flex-col items-center gap-2">
            <UploadIcon className="h-8 w-8 text-muted-foreground" />
            <span className="text-muted-foreground">Drag and drop or click to upload</span>
          </div>
        )}
      </div>
      <div className="flex items-center gap-2">
        <Input id="file-upload" type="file" accept="image/*" onChange={handleFileChange} className="hidden" />
        <label
          htmlFor="file-upload"
          className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
        >
          Choose File
        </label>
        <Button onClick={handleUpload} disabled={!file || loading} className="flex-1">
          {loading ? <div className="h-5 w-5 animate-spin" /> : "Upload"}
        </Button>
      </div>
      {error && <div className="rounded-md bg-red-50 p-4 text-sm text-red-900">{error}</div>}
      {file && (
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">T-Shirt Mockup</h2>
          <div className="bg-gray-200 p-8 rounded-lg">
            <img
              src="/placeholder.svg"
              alt="T-Shirt Mockup"
              width={400}
              height={500}
              className="w-full h-auto object-contain"
              style={{ aspectRatio: "400/500", objectFit: "cover" }}
            />
          </div>
        </div>
      )}
    </div>
  )
}

function UploadIcon(props) {
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
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="17 8 12 3 7 8" />
      <line x1="12" x2="12" y1="3" y2="15" />
    </svg>
  )
}
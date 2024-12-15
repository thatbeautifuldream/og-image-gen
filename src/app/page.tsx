'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Head from 'next/head'
import Image from 'next/image'

export default function OGImageGenerator() {
  const [websiteName, setWebsiteName] = useState('')
  const [ogImageUrl, setOgImageUrl] = useState('')

  const generateOGImage = () => {
    if (websiteName) {
      const url = `/api/og?websiteName=${encodeURIComponent(websiteName)}`
      setOgImageUrl(url)
    }
  }

  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>OG Image Generator</title>
        {ogImageUrl && <meta property="og:image" content={ogImageUrl} />}
      </Head>
      <Card className="w-full max-w-md mx-auto">
        <CardHeader>
          <CardTitle>OG Image Generator</CardTitle>
          <CardDescription>Generate an Open Graph image for your website</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col space-y-4">
            <Input
              type="text"
              placeholder="Enter your website name"
              value={websiteName}
              onChange={(e) => setWebsiteName(e.target.value)}
            />
            <Button onClick={generateOGImage}>Generate OG Image</Button>
          </div>
        </CardContent>
        {ogImageUrl && (
          <CardFooter className="flex flex-col items-center">
            <p className="mb-2">Generated OG Image:</p>
            <Image src={ogImageUrl} alt="Generated OG Image" width={600} height={315} className="rounded-lg shadow-lg" />
          </CardFooter>
        )}
      </Card>
    </div>
  )
}


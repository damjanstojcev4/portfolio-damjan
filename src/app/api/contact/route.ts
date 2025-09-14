// app/api/contact/route.ts
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, service, message } = body

    // Here you would typically send an email or save to a database
    // For now, we'll just log the data and simulate a successful response
    console.log('Contact form submission:', { name, email, service, message })

    return NextResponse.json({ message: 'Message sent successfully' }, { status: 200 })
  } catch (error) {
    console.error('Error processing contact form:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
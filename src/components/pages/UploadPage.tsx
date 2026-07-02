'use client'

import { useState } from 'react'
import { Container } from '@/components/layout/Container'
import Hero from '../layout/Hero'
import HeaderApi from '../layout/HeaderApi'
import { Button } from '../ui/Button'
import Modal from '../ui/Modal'

type FilePreview = {
  file: File
  preview: string
}

export default function UploadPage() {
  const [files, setFiles] = useState<FilePreview[]>([])
  const [openModal, setOpenModal] = useState(false)

  const handleFiles = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = Array.from(e.target.files || [])

    const mapped = selected.map((file) => ({
      file,
      preview: URL.createObjectURL(file),
    }))

    setFiles(mapped)
  }

  return (
    <Container>
      <Hero
        imageLight='/images/bg-light.svg'
        imageDark='/images/bg-dark.svg'
        alt='Hero background space'
        lightOpacity={0.6}
        variant='fixed'
      />

      <section className='flex min-h-screen flex-col items-center justify-center gap-10 py-10'>
        {/* UPLOADER */}
        <article className='w-full max-w-lg rounded-xl border border-border bg-surface p-6 shadow-lg'>
          <HeaderApi
            title='Upload Image'
            italic
            url={
              'https://github.com/Kapelu/api-collection/blob/main/src/components/pages/UploadPage.tsx'
            }
          />
          <h3 className='mb-6 text-center text-2xl font-bold text-heading'>
            Seleccionar imágenes
          </h3>

          <input
            type='file'
            multiple
            accept='image/*'
            onChange={handleFiles}
            className='mb-6 w-full cursor-pointer rounded-lg border border-border bg-background p-3 file:mr-4 file:rounded-md file:border-0 file:bg-primary file:px-4 file:py-2 file:text-white'
          />

          {/* PREVIEW */}
          {files.length > 0 && (
            <div className='mb-6 grid grid-cols-3 gap-3'>
              {files.map((f, i) => (
                <img
                  key={i}
                  src={f.preview}
                  className='h-24 w-full rounded-lg object-cover'
                  alt='preview'
                />
              ))}
            </div>
          )}

          {/* BOTÓN (NO SUBE, SOLO ABRE MODAL) */}
          <Button
            onClick={() => setOpenModal(true)}
            disabled={files.length === 0}
            className='w-full rounded-lg bg-primary px-4 py-3 font-semibold text-white disabled:opacity-50'>
            Subir
          </Button>
        </article>
      </section>

      {/* MODAL */}
      <Modal isOpen={openModal} onClose={() => setOpenModal(false)} />
    </Container>
  )
}

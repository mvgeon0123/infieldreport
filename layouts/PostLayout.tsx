<SectionContainer>
  <article className="mx-auto max-w-3xl px-4 py-10">
    <header className="mb-8 text-center">
      <p className="text-sm text-gray-500 dark:text-gray-400">
        {new Date(date).toLocaleDateString(siteMetadata.locale, postDateTemplate)}
      </p>
      <h1 className="mt-2 text-5xl font-bold text-gray-900 dark:text-white leading-tight">
        {title}
      </h1>
    </header>

    <section className="prose dark:prose-invert max-w-none pb-8">{children}</section>

    {tags && (
      <div className="pt-6 text-sm text-gray-500 dark:text-gray-400 text-center">
        {tags.join(' · ')}
      </div>
    )}
  </article>
</SectionContainer>

import React from 'react'
import { cn } from '@/lib/utils';

const PageHeading = ({ title = "", description = "", className = {} }) => {
  const { wrapper, title: titleClass, description: descriptionClass } = className;
  return (
    <div className={cn('flex flex-col items-start justify-center space-y-2 mb-4 h-9', wrapper)}>
      <h2 className={cn("text-2xl font-bold tracking-tight", titleClass)}>
        {title}
      </h2>
      {description && <p className={cn("text-muted-foreground", descriptionClass)}>{description}</p>}
    </div>
  )
}

export default PageHeading
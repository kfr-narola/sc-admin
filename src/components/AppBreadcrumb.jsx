import React from 'react'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb'
import { useLocation } from 'react-router-dom'

const AppBreadcrumb = () => {
  const { pathname } = useLocation();

  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem className="hidden md:block">
          <BreadcrumbLink href="#">
            {pathname === '/' ? 'Dashboard' : pathname?.split('/')?.[0]}
          </BreadcrumbLink>
        </BreadcrumbItem>
        {pathname.split('/').slice(1).map((path, index) => (
          <>
            {index > 0 && (
              <BreadcrumbSeparator className="hidden md:block" />
            )}
            <BreadcrumbItem>
              {index !== pathname.split('/').length - 2 ? (
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink className="capitalize" to={pathname.split('/').map((ele, new_index) => new_index < index + 2 ? ele : '').filter(Boolean).join('/')}>{path}</BreadcrumbLink>
                </BreadcrumbItem>
              ) : (
                <BreadcrumbPage className="capitalize">{path}</BreadcrumbPage>
              )}
            </BreadcrumbItem>
          </>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  )
}

export default AppBreadcrumb
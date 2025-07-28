import AppBreadcrumb from '@/components/AppBreadcrumb'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { Separator } from '@/components/ui/separator'
import { SidebarTrigger } from '@/components/ui/sidebar'
import { themeModeSelector, updateThemeMode } from '@/reducers/themeSlice'
import { THEME_MODES } from '@/utils/constants'
import { BadgeCheck, Bell, CreditCard, Laptop, LogOut, MoonStar, Sparkles, Sun } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const user = {
  name: "shadcn",
  email: "m@example.com",
  avatar: "/media/avatars/300-1.jpg",
}

const AppHeader = () => {
  const [isSticky, setIsSticky] = useState(false);
  const themeMode = useSelector(themeModeSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    const onScroll = () => {
      setIsSticky(document.body.scrollTop || document.documentElement.scrollTop > 0)
    }

    // Add scroll listener to the body
    document.addEventListener('scroll', onScroll, { passive: true })

    // Clean up the event listener on unmount
    return () => document.removeEventListener('scroll', onScroll)
  }, []);

  const setThemeMode = (mode) => {
    dispatch(updateThemeMode(mode));
    if (mode === 'system') {
      document.documentElement.setAttribute('data-theme', (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'));
    } else {
      document.documentElement.setAttribute('data-theme', mode)
    }
  }

  return (
    <header className={`flex h-14 shrink-0 items-center justify-between m-2 px-4 gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12 sticky top-2 border-b ${isSticky ? 'z-20 bg-card/40 backdrop-blur-md shadow-sm rounded-md' : 'border-b-transparent shadow-none'} `}>
      {/* <header className={`flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12 ${isSticky ? 'sticky' : ''} top-0 z-10 border-b bg-background shadow-sm data-[sidebar=collapsed]:w-[calc(100vw-4rem)] data-[sidebar=expanded]:w-[calc(100vw-16rem)] data-[sidebar=collapsed]:data-[collapsible=icon]/sidebar-wrapper:w-[calc(100vw-4rem)] data-[sidebar=expanded]:data-[collapsible=icon]/sidebar-wrapper:w-[calc(100vw-16rem)]`}> */}
      <div className="flex items-center gap-2">
        <SidebarTrigger className="-ml-1" />
        <Separator
          orientation="vertical"
          className="mr-2 data-[orientation=vertical]:h-4"
        />
        <AppBreadcrumb />
      </div>
      <div className='flex flex-row items-center gap-2'>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className="data-[state=open]:bg-muted text-muted-foreground flex size-7 hover:shadow data-[state=open]:shadow"
              size="icon"
            >
              {themeMode === THEME_MODES.SYSTEM ? <Laptop /> : themeMode === THEME_MODES.DARK ? <MoonStar /> : <Sun />}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-(--radix-dropdown-menu-trigger-width) min-w-28 rounded-lg"
            side="bottom"
            align="end"
            sideOffset={4}>
            <DropdownMenuItem active={themeMode === THEME_MODES.SYSTEM} onClick={() => setThemeMode(THEME_MODES.SYSTEM)}>
              <Laptop />
              System
            </DropdownMenuItem>
            <DropdownMenuItem active={themeMode === THEME_MODES.LIGHT} onClick={() => setThemeMode(THEME_MODES.LIGHT)}>
              <Sun />
              Light
            </DropdownMenuItem>
            <DropdownMenuItem active={themeMode === THEME_MODES.DARK} onClick={() => setThemeMode(THEME_MODES.DARK)}>
              <MoonStar />
              Dark
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div className="relative">
              <Avatar className="h-8 w-8 rounded-lg">
                <AvatarImage src={user.avatar} alt={user.name} />
                <AvatarFallback className="text-sm">CN</AvatarFallback>
              </Avatar>
              <span className="border-background absolute -end-0.5 -bottom-0.5 size-3 rounded-full border-2 bg-emerald-500">
                <span className="sr-only">Online</span>
              </span>
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg"
            side="bottom"
            align="end"
            sideOffset={4}>
            <DropdownMenuLabel className="p-0 font-normal">
              <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                <div className="relative">
                  <Avatar className="h-8 w-8 rounded-lg">
                    <AvatarImage src={user.avatar} alt={user.name} />
                    <AvatarFallback className="rounded-lg text-sm">CN</AvatarFallback>
                  </Avatar>
                  <span className="border-background absolute -end-0.5 -bottom-0.5 size-3 rounded-full border-2 bg-emerald-500">
                    <span className="sr-only">Online</span>
                  </span>
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-medium">{user.name}</span>
                  <span className="truncate text-xs">{user.email}</span>
                </div>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <Sparkles />
                Upgrade to Pro
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <BadgeCheck />
                Account
              </DropdownMenuItem>
              <DropdownMenuItem>
                <CreditCard />
                Billing
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Bell />
                Notifications
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <LogOut />
              Log out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* 
        <div className="ml-2 flex items-center gap-2">
          <div className="relative">
            <Avatar>
              <AvatarImage src="./avatar-80-07.jpg" alt="Kelly King" />
              <AvatarFallback>KK</AvatarFallback>
            </Avatar>
            <span className="border-background absolute -end-0.5 -bottom-0.5 size-3 rounded-full border-2 bg-emerald-500">
              <span className="sr-only">Online</span>
            </span>
          </div>
        </div> */}

      </div>
    </header>
  )
}

export default AppHeader
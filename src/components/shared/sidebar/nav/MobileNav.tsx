"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tooltip, TooltipTrigger } from "@/components/ui/tooltip"
import { useNavigation } from "@/hooks/useNavigation"
import { UserButton } from "@clerk/nextjs"
import Link from "next/link"


const MobileNav = () => {
    const paths = useNavigation()
    return (
        <Card className="fixed bottom-4 w-[calc(100vw-32px)] flex flex-row items-center h-16 p-2 lg:hidden">
            <nav className="w-full">
                <ul className="flex justify-evenly gap-4 items-center">
                    {
                        paths.map((path, id) => {
                            return <li key={id} className="relative">
                                <Link href={path.href}>
                                    <Tooltip>
                                        <TooltipTrigger>
                                            <Button size="icon" variant={path.isActive ? "default" : "outline"}>
                                                {path.icon}
                                            </Button>
                                        </TooltipTrigger>
                                    </Tooltip>
                                </Link>
                            </li>
                        })
                    }
                    <li><UserButton /></li>
                </ul>
            </nav>
        </Card>
    )
}

export default MobileNav
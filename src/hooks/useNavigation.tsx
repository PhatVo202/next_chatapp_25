import { MessageSquare, User } from "lucide-react"
import { usePathname } from "next/navigation"
import { useMemo } from "react"

export const useNavigation = () => {
    const pathname = usePathname()

    const paths = useMemo(() => [
        {
            name: "Conversations",
            href: "/conversations",
            icon: <MessageSquare />,
            isActive: pathname.startsWith("/conversations")
        },
        {
            name: "Friends",
            href: "/friends",
            icon: <User />,
            isActive: pathname === "/friends"
        }
    ], [pathname])

    return paths
}
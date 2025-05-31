"use client";

import * as React from "react";
import {
    AudioWaveform,
    BookOpen,
    Bot,
    ChartBarIncreasing,
    CirclePlus,
    Command,
    Frame,
    GalleryVerticalEnd,
    Headphones,
    Headset,
    Home,
    Map,
    MenuIcon,
    PieChart,
    Settings2,
    SquareTerminal,
    Video,
} from "lucide-react";
import logo from "@/public/logo.png";

import { NavMain } from "@/components/nav-main";
import { NavProjects } from "@/components/nav-projects";

import { TeamSwitcher } from "@/components/team-switcher";
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarRail,
} from "@/components/ui/sidebar";
import Image from "next/image";

// This is sample data.
const data = {
    user: {
        name: "shadcn",
        email: "m@example.com",
        avatar: "/avatars/shadcn.jpg",
    },
    teams: [
        {
            name: "Pump.Fun",
            logo: () => (
                <Image
                    src={logo}
                    alt="Pump.Fun Logo"
                    width={32}
                    height={32}
                    className="rounded-full"
                />
            ),
            plan: "Enterprise",
        },
        {
            name: "Acme Corp.",
            logo: AudioWaveform,
            plan: "Startup",
        },
        {
            name: "Evil Corp.",
            logo: Command,
            plan: "Free",
        },
    ],
    navMain: [
        {
            title: "Home",
            url: "#",
            icon: Home,
            isActive: true,
            // items: [
            //     {
            //         title: "History",
            //         url: "#",
            //     },
            //     {
            //         title: "Starred",
            //         url: "#",
            //     },
            //     {
            //         title: "Settings",
            //         url: "#",
            //     },
            // ],
        },
        {
            title: "Advanced",
            url: "#",
            icon: ChartBarIncreasing,
            // items: [
            //     {
            //         title: "Genesis",
            //         url: "#",
            //     },
            //     {
            //         title: "Explorer",
            //         url: "#",
            //     },
            //     {
            //         title: "Quantum",
            //         url: "#",
            //     },
            // ],
        },
        {
            title: "Livestreams",
            url: "#",
            icon: Video,
            // items: [
            //     {
            //         title: "Introduction",
            //         url: "#",
            //     },
            //     {
            //         title: "Get Started",
            //         url: "#",
            //     },
            //     {
            //         title: "Tutorials",
            //         url: "#",
            //     },
            //     {
            //         title: "Changelog",
            //         url: "#",
            //     },
            // ],
        },
        {
            title: "Create new coin",
            url: "#",
            icon: CirclePlus,
            // items: [
            //     {
            //         title: "General",
            //         url: "#",
            //     },
            //     {
            //         title: "Team",
            //         url: "#",
            //     },
            //     {
            //         title: "Billing",
            //         url: "#",
            //     },
            //     {
            //         title: "Limits",
            //         url: "#",
            //     },
            // ],
        },
        {
            title: "Support",
            url: "#",
            icon: Headset,
            // items: [
            //     {
            //         title: "General",
            //         url: "#",
            //     },
            //     {
            //         title: "Team",
            //         url: "#",
            //     },
            //     {
            //         title: "Billing",
            //         url: "#",
            //     },
            //     {
            //         title: "Limits",
            //         url: "#",
            //     },
            // ],
        },
        {
            title: "More",
            url: "#",
            icon: MenuIcon,
            items: [
                {
                    title: "PumpSwap",
                    url: "#",
                },
                {
                    title: "Livestream Policy",
                    url: "#",
                },
                {
                    title: "DMCA Policy",
                    url: "#",
                },
                {
                    title: "How it works",
                    url: "#",
                },
            ],
        },
    ],
    projects: [
        {
            name: "Support",
            url: "#",
            icon: Frame,
        },
        {
            name: "Sales & Marketing",
            url: "#",
            icon: PieChart,
        },
        {
            name: "Travel",
            url: "#",
            icon: Map,
        },
    ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    return (
        <Sidebar collapsible="icon" {...props}>
            <SidebarHeader>
                <TeamSwitcher teams={data.teams} />
            </SidebarHeader>
            <SidebarContent>
                <NavMain items={data.navMain} />
                {/* <NavProjects projects={data.projects} /> */}
            </SidebarContent>
            <SidebarFooter>{/* <NavUser user={data.user} /> */}</SidebarFooter>
            <SidebarRail />
        </Sidebar>
    );
}
